import {
  Camera,
  Heart,
  ImageOff,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Star,
} from "lucide-react";
import { faCount, faKm, faNum, faPrice, faRating } from "@/lib/format";
import { bestScore, fitmentFor, fitmentLabel } from "@/lib/rank";
import { OFFERS } from "@/lib/data";
import { useApp } from "@/lib/store";
import type { Fitment, Offer, OfferAction } from "@/lib/types";
import { cn } from "@/lib/utils";

function FitBadge({ fit, label }: { fit: Fitment; label: string }) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center truncate rounded-full px-2 py-0.5 text-[11px] font-medium",
        fit === "confirmed" && "bg-trust-fg text-trust",
        fit === "inferred" && "bg-caution-fg text-caution",
        fit === "unknown" && "bg-background text-muted",
        fit === "mismatch" && "bg-primary/10 text-primary",
      )}
    >
      {label}
    </span>
  );
}

function ActionBtn({
  action,
  onClick,
}: {
  action: OfferAction;
  onClick: () => void;
}) {
  const map: Record<OfferAction, { label: string; icon: typeof Phone; primary?: boolean }> = {
    buy: { label: "خرید", icon: ShoppingBag, primary: true },
    call: { label: "تماس", icon: Phone },
    nav: { label: "مسیر", icon: Navigation },
    chat: { label: "پیام", icon: MessageCircle },
  };
  const item = map[action];
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={cn(
        "pressable flex h-10 min-w-0 flex-1 items-center justify-center gap-1 rounded-sm text-xs font-medium",
        item.primary
          ? "bg-primary text-primary-foreground"
          : "bg-background text-foreground",
      )}
    >
      <Icon className="size-3.5" strokeWidth={2} />
      {item.label}
    </button>
  );
}

export function OfferCard({
  offer,
  rank,
  isBest,
}: {
  offer: Offer;
  rank: number;
  isBest: boolean;
}) {
  const vehicle = useApp((s) => s.vehicle);
  const openSheet = useApp((s) => s.openSheet);
  const toggleSaved = useApp((s) => s.toggleSaved);
  const saved = useApp((s) => s.savedIds.includes(offer.id));
  const extraConfirmed = useApp((s) => s.confirmedIds.includes(offer.id));

  const fit = extraConfirmed ? "confirmed" : fitmentFor(offer, vehicle);
  const label = extraConfirmed
    ? `تأیید شد · ${vehicle.make} ${vehicle.model} ${vehicle.trim}`
    : fitmentLabel(fit, vehicle);

  const channelLabel =
    offer.seller.channel === "hybrid"
      ? "حضوری و آنلاین"
      : offer.seller.channel === "physical"
        ? "فروشگاه حضوری"
        : "فقط آنلاین";

  const stockLabel =
    offer.seller.stock === "now"
      ? "موجودی فوری"
      : offer.seller.stock === "limited"
        ? "تعداد محدود"
        : offer.seller.stock === "unknown"
          ? "موجودی نامشخص"
          : "ناموجود";

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-lg bg-card p-2.5 shadow-[var(--shadow-card)]",
        isBest && "ring-1 ring-trust/35",
      )}
    >
      {isBest && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            openSheet("score", offer.id);
          }}
          className="mb-2 flex w-full items-center justify-between rounded-sm bg-trust-fg px-2 py-1 text-[11px] font-medium text-trust"
        >
          پیشنهاد ترب · بهترین توازن قیمت، فاصله و اعتماد
          <span className="text-[10px]">چرا؟</span>
        </button>
      )}
      {offer.isAd && (
        <p className="mb-2 text-[10px] font-medium text-muted">آگهی اسپانسر</p>
      )}

      <button
        type="button"
        onClick={() => openSheet("detail", offer.id)}
        className="flex w-full gap-3 text-right"
      >
        <div className="relative size-[108px] shrink-0 overflow-hidden rounded-md bg-background">
          {offer.image ? (
            <img
              src={offer.image}
              alt={offer.title}
              className="size-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
            />
          ) : (
            <div className="flex size-full flex-col items-center justify-center gap-1 text-subtle">
              <ImageOff className="size-6" />
              <span className="px-1 text-center text-[10px] leading-tight">
                فروشنده عکس نداده
              </span>
            </div>
          )}
          <span className="absolute bottom-1 right-1 inline-flex items-center gap-0.5 rounded-full bg-card/95 px-1.5 py-0.5 text-[10px] text-muted">
            {offer.photoKind === "seller" ? (
              <>
                <Camera className="size-2.5" />
                عکس فروشنده
              </>
            ) : offer.photoKind === "catalog" ? (
              "کاتالوگ"
            ) : (
              "بدون تصویر"
            )}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-2 text-[13px] font-semibold leading-snug text-foreground">
              {offer.title}
            </h3>
            <span className="mt-0.5 shrink-0 text-[10px] text-subtle">
              {faNum(rank)}
            </span>
          </div>
          <p className="mt-0.5 text-[11px] text-muted">
            {offer.brand}
            {offer.oemCode ? ` · کد ${offer.oemCode}` : ""}
            {offer.origin === "oem"
              ? " · اصلی"
              : offer.origin === "aftermarket"
                ? " · طرح"
                : " · مبدأ نامشخص"}
          </p>
          <div className="mt-1.5">
            <FitBadge fit={fit} label={label} />
          </div>
          <div className="mt-2 flex items-center justify-between gap-2">
            <p className="text-[15px] font-semibold tabular-nums tracking-tight">
              {faPrice(offer.price)}
            </p>
          </div>
        </div>
      </button>

      <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-border pt-2">
        <div className="min-w-0">
          <p className="truncate text-[12px] font-medium">{offer.seller.name}</p>
          <p className="mt-0.5 flex items-center gap-1 text-[11px] text-muted">
            {offer.seller.rating != null ? (
              <>
                <Star className="size-3 fill-caution text-caution" />
                {faRating(offer.seller.rating)}
                <span className="text-subtle">({faCount(offer.seller.reviewCount)})</span>
              </>
            ) : (
              <span>بدون امتیاز</span>
            )}
            <span className="text-subtle">·</span>
            <MapPin className="size-3" />
            {offer.seller.distanceKm != null ? (
              <span>{faKm(offer.seller.distanceKm)}</span>
            ) : (
              <span>فاصله نامشخص</span>
            )}
          </p>
        </div>
        <button
          type="button"
          aria-label="ذخیره"
          onClick={() => toggleSaved(offer.id)}
          className="flex size-10 items-center justify-center rounded-sm text-muted"
        >
          <Heart
            className={cn("size-4", saved && "fill-primary text-primary")}
            strokeWidth={2}
          />
        </button>
      </div>

      <div className="mt-2 flex flex-wrap gap-1">
        <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-muted">
          {channelLabel}
        </span>
        {offer.seller.torobGuarantee && (
          <span className="inline-flex items-center gap-0.5 rounded-full bg-trust-fg px-2 py-0.5 text-[10px] font-medium text-trust">
            <ShieldCheck className="size-3" />
            ضمانت ترب
          </span>
        )}
        {offer.seller.hasInstallments && (
          <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-muted">
            خرید قسطی
          </span>
        )}
        <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-muted">
          {stockLabel}
        </span>
      </div>

      <div className="mt-2.5 flex gap-1.5">
        {offer.actions.map((action) => (
          <ActionBtn
            key={action}
            action={action}
            onClick={() => {
              if (action === "nav") openSheet("map", offer.id);
              else if (action === "call") openSheet("call", offer.id);
              else if (action === "chat") openSheet("chat", offer.id);
              else openSheet("buy", offer.id);
            }}
          />
        ))}
      </div>
    </article>
  );
}

export function bestOfferId(offers: Offer[], vehicle: Parameters<typeof bestScore>[1]) {
  if (!offers.length) return null;
  let top = offers[0];
  let topScore = -Infinity;
  for (const o of offers) {
    const s = bestScore(o, vehicle, OFFERS);
    if (s > topScore) {
      top = o;
      topScore = s;
    }
  }
  return top.id;
}
