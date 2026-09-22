import { Check, MapPin, Plus, ShieldCheck } from "lucide-react";
import { LOCATIONS, OFFERS, VEHICLES } from "@/lib/data";
import { faPrice } from "@/lib/format";
import { useApp } from "@/lib/store";
import { cn } from "@/lib/utils";

export function GarageScreen() {
  const vehicle = useApp((s) => s.vehicle);
  const setVehicle = useApp((s) => s.setVehicle);
  const openSheet = useApp((s) => s.openSheet);
  const savedIds = useApp((s) => s.savedIds);

  return (
    <div className="flex-1 overflow-y-auto px-4 pt-6 pb-28">
      <h1 className="text-lg font-semibold">گاراژ من</h1>
      <p className="mt-1 text-sm text-muted">
        سازگاری هر پیشنهاد با خودروی فعال سنجیده می‌شود. خودرو می‌تواند از روی متن جستجو هم ذخیره شود.
      </p>
      <div className="mt-4 space-y-2">
        {VEHICLES.map((v) => {
          const on = v.id === vehicle.id;
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => setVehicle(v)}
              className={cn(
                "flex w-full items-center justify-between rounded-lg bg-card px-3 py-3 text-right shadow-[var(--shadow-card)]",
                on && "ring-1 ring-primary",
              )}
            >
              <div>
                <p className="text-sm font-semibold">
                  {v.make} {v.model} {v.trim}
                </p>
                <p className="mt-0.5 text-xs text-muted">
                  {v.year} · موتور {v.engine}
                </p>
              </div>
              {on && (
                <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" />
                </span>
              )}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => openSheet("garage")}
          className="flex h-12 w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-border text-sm text-muted"
        >
          <Plus className="size-4" />
          افزودن خودرو
        </button>
      </div>

      {savedIds.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-semibold">ذخیره‌شده‌ها</h2>
          <ul className="mt-2 space-y-2">
            {OFFERS.filter((o) => savedIds.includes(o.id)).map((o) => (
              <li key={o.id} className="rounded-md bg-card px-3 py-2.5 text-sm shadow-[var(--shadow-card)]">
                <p className="font-medium">{o.title}</p>
                <p className="mt-0.5 text-xs text-muted">
                  {o.seller.name} · {faPrice(o.price)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export function ProfileScreen() {
  const location = useApp((s) => s.location);
  const openSheet = useApp((s) => s.openSheet);

  return (
    <div className="flex-1 overflow-y-auto px-4 pt-6 pb-28">
      <h1 className="text-lg font-semibold">ترب من</h1>
      <p className="mt-1 text-sm text-muted">موقعیت، اعتماد و مسیرهای تبدیل — بدون حساب کاربری.</p>

      <button
        type="button"
        onClick={() => openSheet("location")}
        className="mt-5 flex w-full items-center justify-between rounded-lg bg-card px-3 py-3 shadow-[var(--shadow-card)]"
      >
        <span className="flex items-center gap-2 text-sm">
          <MapPin className="size-4 text-primary" />
          {location.label}
        </span>
        <span className="text-xs text-muted">تغییر</span>
      </button>

      <ul className="mt-3 divide-y divide-border overflow-hidden rounded-lg bg-card shadow-[var(--shadow-card)]">
        {[
          { t: "ضمانت ترب", d: "مرجوعی و اصالت روی پیشنهادهای نشان‌دار" },
          { t: "خرید قسطی", d: "اقساط از اعتبار ترب‌پی روی فروشنده‌های واجد شرایط" },
          { t: "تماس و مسیریابی", d: "اقدام مستقیم از روی کارت، بدون صفحه جزئیات اجباری" },
        ].map((row) => (
          <li key={row.t} className="px-3 py-3">
            <p className="flex items-center gap-1.5 text-sm font-medium">
              <ShieldCheck className="size-4 text-trust" />
              {row.t}
            </p>
            <p className="mt-0.5 text-xs text-muted">{row.d}</p>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => openSheet("design")}
        className="mt-6 h-12 w-full rounded-md bg-foreground text-sm font-medium text-card"
      >
        اصول طراحی و داوری طرح
      </button>
    </div>
  );
}

export function LocationList({ onPick }: { onPick?: () => void }) {
  const current = useApp((s) => s.location);
  const setLocation = useApp((s) => s.setLocation);
  return (
    <div className="space-y-2 pt-1">
      {LOCATIONS.map((l) => (
        <button
          key={l.id}
          type="button"
          onClick={() => {
            setLocation(l);
            onPick?.();
          }}
          className={cn(
            "flex w-full items-center justify-between rounded-md bg-background px-3 py-3 text-sm",
            current.id === l.id && "ring-1 ring-primary",
          )}
        >
          <span>
            {l.label}
            <span className="mr-2 text-[11px] text-muted">
              {l.source === "gps" ? "GPS" : l.source === "ip" ? "تقریبی IP" : "دستی"}
            </span>
          </span>
          {current.id === l.id && <Check className="size-4 text-primary" />}
        </button>
      ))}
    </div>
  );
}
