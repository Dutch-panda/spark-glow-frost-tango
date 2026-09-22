import {
  Camera,
  ChevronDown,
  Info,
  MapPin,
  Mic,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import { useMemo } from "react";
import { CATEGORIES, OFFERS } from "@/lib/data";
import { faCompactPrice, faCount, faNum } from "@/lib/format";
import { marketAverages, matchesFilters, sortOffers } from "@/lib/rank";
import { useApp } from "@/lib/store";
import { cn } from "@/lib/utils";
import { OfferCard, bestOfferId } from "./offer-card";

const SORT_LABEL: Record<string, string> = {
  best: "بهترین",
  price: "ارزان‌ترین",
  distance: "نزدیک‌ترین",
  speed: "سریع‌ترین",
};

export function PlpScreen() {
  const query = useApp((s) => s.query);
  const setQuery = useApp((s) => s.setQuery);
  const vehicle = useApp((s) => s.vehicle);
  const location = useApp((s) => s.location);
  const filters = useApp((s) => s.filters);
  const toggleFilter = useApp((s) => s.toggleFilter);
  const sort = useApp((s) => s.sort);
  const openSheet = useApp((s) => s.openSheet);
  const garageNoteSeen = useApp((s) => s.garageNoteSeen);

  const listed = useMemo(() => {
    const filtered = OFFERS.filter((o) => matchesFilters(o, vehicle, filters));
    return sortOffers(filtered, sort, vehicle, OFFERS);
  }, [vehicle, filters, sort]);

  const avgs = useMemo(() => marketAverages(listed.length ? listed : OFFERS), [listed]);
  const bestId = listed.length && sort === "best" ? bestOfferId(listed, vehicle) : listed[0]?.id;
  const oemMax = Math.max(avgs.oem, avgs.aftermarket, 1);

  const chips = [
    { key: "nearby" as const, label: "فروشگاه‌های نزدیک" },
    { key: "inStock" as const, label: "موجودی فوری" },
    { key: "guarantee" as const, label: "ضمانت ترب" },
    { key: "installments" as const, label: "خرید قسطی" },
    { key: "confirmedOnly" as const, label: "فقط سازگار" },
  ];

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="sticky top-0 z-20 bg-card/95 backdrop-blur-sm">
        <div className="flex items-center gap-2 px-3 pt-3 pb-2">
          <button
            type="button"
            aria-label="اصول طراحی"
            onClick={() => openSheet("design")}
            className="flex size-11 shrink-0 items-center justify-center rounded-md text-muted"
          >
            <Info className="size-5" />
          </button>
          <div
            dir="ltr"
            className="flex h-11 min-w-0 flex-1 items-center gap-0.5 rounded-md bg-background pl-1.5 pr-1"
          >
            <button
              type="button"
              aria-label="جستجوی تصویری"
              onClick={() => openSheet("camera")}
              className="flex size-9 shrink-0 items-center justify-center text-muted"
            >
              <Camera className="size-4" />
            </button>
            <button
              type="button"
              aria-label="جستجوی صوتی"
              onClick={() => openSheet("voice")}
              className="flex size-9 shrink-0 items-center justify-center text-muted"
            >
              <Mic className="size-4" />
            </button>
            <input
              dir="rtl"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-w-0 flex-1 bg-transparent px-1 text-right text-sm outline-none placeholder:text-subtle"
              placeholder="قطعه، برند یا کد فنی"
            />
            {query && (
              <button
                type="button"
                aria-label="پاک کردن"
                onClick={() => setQuery("")}
                className="flex size-8 shrink-0 items-center justify-center text-subtle"
              >
                <X className="size-4" />
              </button>
            )}
            <span className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <Search className="size-4" />
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => openSheet("garage")}
          className="mx-3 mb-2 flex w-[calc(100%-1.5rem)] items-center justify-between rounded-md bg-foreground px-3 py-2.5 text-card"
        >
          <div className="text-right">
            <p className="text-[10px] text-card/70">خودروی شما</p>
            <p className="text-sm font-semibold">
              {vehicle.make} {vehicle.model} {vehicle.trim}
              <span className="mr-2 text-[11px] font-normal text-card/70">
                {vehicle.year} · {vehicle.engine}
              </span>
            </p>
          </div>
          <span className="text-xs text-card/80">تغییر</span>
        </button>

        <div className="flex items-center justify-between px-3 pb-2">
          <button
            type="button"
            onClick={() => openSheet("location")}
            className="flex h-9 items-center gap-1 text-xs text-muted"
          >
            <MapPin className="size-3.5 text-primary" />
            {location.label}
            <span className="text-[10px] text-subtle">
              {location.source === "gps" ? "موقعیت دقیق" : location.source === "ip" ? "تقریبی" : "انتخاب‌شده"}
            </span>
          </button>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => openSheet("sort")}
              className="flex h-9 items-center gap-1 rounded-full bg-background px-3 text-xs font-medium"
            >
              {SORT_LABEL[sort]}
              <ChevronDown className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => openSheet("filters")}
              className="flex size-9 items-center justify-center rounded-full bg-background"
              aria-label="فیلترها"
            >
              <SlidersHorizontal className="size-4" />
            </button>
          </div>
        </div>

        <div className="no-scrollbar flex gap-1.5 overflow-x-auto px-3 pb-3">
          {chips.map((c) => {
            const on = filters[c.key];
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => toggleFilter(c.key)}
                className={cn(
                  "h-8 shrink-0 rounded-full px-3 text-xs font-medium",
                  on ? "bg-primary text-primary-foreground" : "bg-background text-muted",
                )}
              >
                {c.label}
              </button>
            );
          })}
        </div>
        {!garageNoteSeen && (
          <div className="mx-3 mb-3 flex items-center gap-2 rounded-md bg-trust-fg px-2 py-1.5 text-trust">
            <button
              type="button"
              onClick={() => useApp.setState({ garageNoteSeen: true, tab: "garage" })}
              className="min-w-0 flex-1 px-1 text-right text-[11px] leading-relaxed"
            >
              پژو ۲۰۶ تیپ ۵ از روی جستجو به گاراژ اضافه شد. برای ویرایش بزنید.
            </button>
            <button
              type="button"
              aria-label="بستن"
              onClick={() => useApp.setState({ garageNoteSeen: true })}
              className="flex size-8 shrink-0 items-center justify-center"
            >
              <X className="size-3.5" />
            </button>
          </div>
        )}
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto px-3 pt-3 pb-28">
        <div className="flex items-center justify-between text-xs text-muted">
          <p>
            {faCount(listed.length)} پیشنهاد برای «{query || "قطعه"}»
          </p>
          <p>مرتب‌سازی: {SORT_LABEL[sort]}</p>
        </div>

        <div className="no-scrollbar flex gap-1.5 overflow-x-auto">
          {[
            { t: "اصلی والئو یا طرح؟", k: () => useApp.getState().setOrigin(filters.origin === "oem" ? "all" : "oem") },
            { t: "تحویل امروز اطراف من", k: () => { toggleFilter("nearby"); if (!filters.inStock) toggleFilter("inStock"); } },
            { t: "فقط ضمانت ترب", k: () => { if (!filters.guarantee) toggleFilter("guarantee"); } },
          ].map((p) => (
            <button
              key={p.t}
              type="button"
              onClick={p.k}
              className="inline-flex h-8 shrink-0 items-center gap-1 rounded-full bg-card px-3 text-[11px] text-foreground shadow-[var(--shadow-card)]"
            >
              <Sparkles className="size-3 text-primary" />
              {p.t}
            </button>
          ))}
        </div>

        <section className="rounded-lg bg-card p-3 shadow-[var(--shadow-card)]">
          <p className="text-xs font-medium">میانگین بازار تهران</p>
          <div className="mt-2.5 space-y-2">
            <AvgRow label="اصلی / OEM" value={avgs.oem} max={oemMax} tone="trust" />
            <AvgRow label="طرح / افترمارکت" value={avgs.aftermarket} max={oemMax} tone="muted" />
          </div>
          <p className="mt-2 text-[11px] text-muted">
            قیمت پایین‌تر از طرح لزوماً ارزان‌تر نیست — مبدأ و ضمانت را ببینید.
          </p>
        </section>

        {listed.length === 0 ? (
          <div className="rounded-lg bg-card px-4 py-10 text-center shadow-[var(--shadow-card)]">
            <p className="text-sm font-medium">نتیجه‌ای با این فیلترها نیست</p>
            <p className="mt-1 text-xs text-muted">فیلترها را کمتر کنید یا خودرو را بررسی کنید.</p>
            <button
              type="button"
              onClick={() => useApp.getState().resetFilters()}
              className="mt-4 h-10 rounded-md bg-primary px-4 text-sm text-primary-foreground"
            >
              حذف فیلترها
            </button>
          </div>
        ) : (
          listed.map((offer, i) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              rank={i + 1}
              isBest={offer.id === bestId && !offer.isAd}
            />
          ))
        )}

        <p className="px-2 pb-4 text-center text-[11px] leading-relaxed text-subtle">
          سازگاری بر اساس گاراژ شما فیلتر شده. پیشنهادهایی بدون متادیتا با نشان «نامشخص»
          دیده می‌شوند تا داده ناقص پنهان نشود.
        </p>
      </div>
    </div>
  );
}

function AvgRow({
  label,
  value,
  max,
  tone,
}: {
  label: string;
  value: number;
  max: number;
  tone: "trust" | "muted";
}) {
  const w = Math.round((value / max) * 100);
  return (
    <div>
      <div className="flex items-center justify-between text-[11px]">
        <span className="text-muted">{label}</span>
        <span className="font-medium tabular-nums">{value ? faCompactPrice(value) : "—"}</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-background">
        <div
          className={cn("h-full rounded-full", tone === "trust" ? "bg-trust" : "bg-subtle")}
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}

export function CategoriesScreen() {
  const setQuery = useApp((s) => s.setQuery);
  const vehicle = useApp((s) => s.vehicle);
  return (
    <div className="flex-1 overflow-y-auto px-4 pt-6 pb-28">
      <h1 className="text-lg font-semibold">دسته‌بندی قطعات</h1>
      <p className="mt-1 text-sm text-muted">
        نتایج روی {vehicle.make} {vehicle.model} {vehicle.trim} فیلتر می‌شود.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setQuery(c.query)}
            className="pressable rounded-lg bg-card px-3 py-5 text-sm font-medium shadow-[var(--shadow-card)]"
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
