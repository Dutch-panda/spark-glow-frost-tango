import { NEARBY_RADIUS_KM } from "./data";
import type { Filters, Fitment, Offer, SortKey, Vehicle } from "./types";

export function fitmentFor(offer: Offer, vehicle: Vehicle | null): Fitment {
  if (!vehicle) return offer.vehicleIds.length ? "inferred" : "unknown";
  if (offer.vehicleIds.includes(vehicle.id)) return "confirmed";
  if (offer.vehicleIds.length === 0) return "unknown";
  return "mismatch";
}

export function fitmentLabel(fit: Fitment, vehicle: Vehicle | null): string {
  const car = vehicle ? `${vehicle.make} ${vehicle.model} ${vehicle.trim}` : "خودروی شما";
  switch (fit) {
    case "confirmed":
      return `مناسب برای ${car}`;
    case "inferred":
      return "احتمالاً مناسب · نیاز به تأیید";
    case "unknown":
      return "سازگاری نامشخص";
    case "mismatch":
      return "نامناسب برای خودروی شما";
  }
}

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

export function bestScore(offer: Offer, vehicle: Vehicle | null, all: Offer[]): number {
  const prices = all.map((o) => o.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const priceNorm = max === min ? 1 : 1 - (offer.price - min) / (max - min);

  const d = offer.seller.distanceKm;
  const proximity =
    d == null
      ? offer.seller.channel === "online"
        ? 0.28
        : 0.4
      : 1 - Math.min(d, 25) / 25;

  const rating = offer.seller.rating == null ? 0.45 : offer.seller.rating / 5;

  const speed =
    offer.seller.stock === "now"
      ? offer.seller.channel === "physical" || offer.seller.channel === "hybrid"
        ? 1
        : offer.deliveryHours != null
          ? 1 - Math.min(offer.deliveryHours, 72) / 72
          : 0.7
      : offer.seller.stock === "limited"
        ? 0.65
        : 0.35;

  const guarantee = offer.seller.torobGuarantee ? 1 : 0;
  const fit = fitmentFor(offer, vehicle);
  const fitScore =
    fit === "confirmed" ? 1 : fit === "inferred" ? 0.55 : fit === "unknown" ? 0.28 : 0;

  const adPenalty = offer.isAd ? 0.12 : 0;

  return (
    0.26 * priceNorm +
    0.22 * proximity +
    0.18 * rating +
    0.12 * speed +
    0.12 * guarantee +
    0.1 * fitScore -
    adPenalty
  );
}

export function scoreBreakdown(offer: Offer, vehicle: Vehicle | null, all: Offer[]) {
  const prices = all.map((o) => o.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return {
    price: max === min ? 1 : 1 - (offer.price - min) / (max - min),
    proximity:
      offer.seller.distanceKm == null
        ? 0.28
        : 1 - Math.min(offer.seller.distanceKm, 25) / 25,
    rating: offer.seller.rating == null ? 0.45 : offer.seller.rating / 5,
    speed: offer.seller.stock === "now" ? 0.95 : 0.45,
    guarantee: offer.seller.torobGuarantee ? 1 : 0,
    fitment: ({ confirmed: 1, inferred: 0.55, unknown: 0.28, mismatch: 0 } as const)[
      fitmentFor(offer, vehicle)
    ],
    total: bestScore(offer, vehicle, all),
  };
}

export function matchesFilters(
  offer: Offer,
  vehicle: Vehicle | null,
  filters: Filters,
): boolean {
  const fit = fitmentFor(offer, vehicle);
  if (fit === "mismatch") return false;
  if (filters.nearby) {
    if (offer.seller.distanceKm == null || offer.seller.distanceKm > NEARBY_RADIUS_KM) {
      return false;
    }
    if (offer.seller.channel === "online") return false;
  }
  if (filters.inStock && offer.seller.stock !== "now") return false;
  if (filters.guarantee && !offer.seller.torobGuarantee) return false;
  if (filters.installments && !offer.seller.hasInstallments) return false;
  if (filters.origin !== "all" && offer.origin !== filters.origin) return false;
  if (filters.confirmedOnly && fit !== "confirmed") return false;
  if (filters.hideAds && offer.isAd) return false;
  return true;
}

export function sortOffers(
  offers: Offer[],
  sort: SortKey,
  vehicle: Vehicle | null,
  pool: Offer[],
): Offer[] {
  const copy = [...offers];
  copy.sort((a, b) => {
    if (sort === "price") return a.price - b.price;
    if (sort === "distance") {
      const da = a.seller.distanceKm ?? 999;
      const db = b.seller.distanceKm ?? 999;
      return da - db;
    }
    if (sort === "speed") {
      const sa =
        a.seller.stock === "now" ? 0 : a.deliveryHours ?? 80;
      const sb =
        b.seller.stock === "now" ? 0 : b.deliveryHours ?? 80;
      return sa - sb;
    }
    return bestScore(b, vehicle, pool) - bestScore(a, vehicle, pool);
  });
  return copy;
}

export function marketAverages(offers: Offer[]) {
  const oem = offers.filter((o) => o.origin === "oem");
  const alt = offers.filter((o) => o.origin === "aftermarket");
  const avg = (list: Offer[]) =>
    list.length ? Math.round(list.reduce((s, o) => s + o.price, 0) / list.length) : 0;
  return {
    oem: avg(oem),
    aftermarket: avg(alt),
    all: avg(offers),
  };
}


