import {
  Camera,
  Check,
  MapPin,
  Mic,
  Navigation,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { VEHICLES } from "@/lib/data";
import { faKm, faNum, faPrice, faRating } from "@/lib/format";
import { fitmentFor, fitmentLabel, scoreBreakdown } from "@/lib/rank";
import { OFFERS } from "@/lib/data";
import { useActiveOffer, useApp } from "@/lib/store";
import { cn } from "@/lib/utils";
import { LocationList } from "./garage-profile";
import { BottomSheet } from "./ui/sheet";

export function AppSheets() {
  const sheet = useApp((s) => s.sheet);
  const close = useApp((s) => s.closeSheet);
  const offer = useActiveOffer();

  return (
    <>
      <BottomSheet open={sheet === "garage"} onClose={close} title="گاراژ مجازی">
        <GaragePicker />
      </BottomSheet>
      <BottomSheet open={sheet === "location"} onClose={close} title="موقعیت شما">
        <p className="mb-3 text-xs text-muted">
          ترتیب دقت: GPS دستگاه، انتخاب دستی، سپس موقعیت تقریبی از شبکه.
        </p>
        <LocationList />
      </BottomSheet>
      <BottomSheet open={sheet === "sort"} onClose={close} title="مرتب‌سازی">
        <SortList />
      </BottomSheet>
      <BottomSheet open={sheet === "filters"} onClose={close} title="فیلترهای بیشتر">
        <MoreFilters />
      </BottomSheet>
      <BottomSheet open={sheet === "detail" && !!offer} onClose={close} height="full">
        {offer && <OfferDetail />}
      </BottomSheet>
      <BottomSheet open={sheet === "map" && !!offer} onClose={close} title="مسیریابی">
        {offer && <MapPane />}
      </BottomSheet>
      <BottomSheet open={sheet === "call" && !!offer} onClose={close} title="تماس با فروشنده">
        {offer && <CallPane />}
      </BottomSheet>
      <BottomSheet open={sheet === "chat" && !!offer} onClose={close} title="پیام به فروشنده">
        {offer && <ChatPane />}
      </BottomSheet>
      <BottomSheet open={sheet === "buy" && !!offer} onClose={close} title="خرید اینترنتی">
        {offer && <BuyPane />}
      </BottomSheet>
      <BottomSheet open={sheet === "camera"} onClose={close} title="جستجوی تصویری">
        <CameraPane />
      </BottomSheet>
      <BottomSheet open={sheet === "voice"} onClose={close} title="جستجوی صوتی">
        <VoicePane />
      </BottomSheet>
      <BottomSheet open={sheet === "fitment" && !!offer} onClose={close} title="تأیید سازگاری">
        {offer && <FitmentPane />}
      </BottomSheet>
      <BottomSheet open={sheet === "score" && !!offer} onClose={close} title="چرا پیشنهاد ترب؟">
        {offer && <ScorePane />}
      </BottomSheet>
      <BottomSheet open={sheet === "design"} onClose={close} title="اصول طراحی" height="full">
        <DesignNotes />
      </BottomSheet>
    </>
  );
}

function GaragePicker() {
  const vehicle = useApp((s) => s.vehicle);
  const setVehicle = useApp((s) => s.setVehicle);
  return (
    <div className="space-y-2 pt-1">
      {VEHICLES.map((v) => (
        <button
          key={v.id}
          type="button"
          onClick={() => setVehicle(v)}
          className={cn(
            "flex w-full items-center justify-between rounded-md bg-background px-3 py-3 text-sm",
            vehicle.id === v.id && "ring-1 ring-primary",
          )}
        >
          <span>
            {v.make} {v.model} {v.trim}
            <span className="mr-2 text-[11px] text-muted">
              {v.year} · {v.engine}
            </span>
          </span>
          {vehicle.id === v.id && <Check className="size-4 text-primary" />}
        </button>
      ))}
    </div>
  );
}

function SortList() {
  const sort = useApp((s) => s.sort);
  const setSort = useApp((s) => s.setSort);
  const rows = [
    { id: "best" as const, t: "بهترین", d: "قیمت، فاصله، امتیاز، سرعت و ضمانت ترب" },
    { id: "price" as const, t: "ارزان‌ترین", d: "فقط قیمت نهایی" },
    { id: "distance" as const, t: "نزدیک‌ترین", d: "اولویت فروشگاه حضوری نزدیک" },
    { id: "speed" as const, t: "سریع‌ترین", d: "موجودی فوری یا ارسال کوتاه" },
  ];
  return (
    <div className="space-y-2 pt-1">
      {rows.map((r) => (
        <button
          key={r.id}
          type="button"
          onClick={() => setSort(r.id)}
          className={cn(
            "w-full rounded-md bg-background px-3 py-3 text-right",
            sort === r.id && "ring-1 ring-primary",
          )}
        >
          <p className="text-sm font-medium">{r.t}</p>
          <p className="mt-0.5 text-xs text-muted">{r.d}</p>
        </button>
      ))}
    </div>
  );
}

function MoreFilters() {
  const filters = useApp((s) => s.filters);
  const setOrigin = useApp((s) => s.setOrigin);
  const toggle = useApp((s) => s.toggleFilter);
  const reset = useApp((s) => s.resetFilters);
  return (
    <div className="space-y-4 pt-1">
      <div>
        <p className="mb-2 text-xs font-medium text-muted">مبدأ قطعه</p>
        <div className="flex gap-1.5">
          {(
            [
              ["all", "همه"],
              ["oem", "اصلی"],
              ["aftermarket", "طرح"],
              ["unknown", "نامشخص"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setOrigin(id)}
              className={cn(
                "h-9 rounded-full px-3 text-xs",
                filters.origin === id ? "bg-primary text-primary-foreground" : "bg-background",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <label className="flex items-center justify-between rounded-md bg-background px-3 py-3 text-sm">
        پنهان کردن آگهی‌ها
        <input
          type="checkbox"
          checked={filters.hideAds}
          onChange={() => toggle("hideAds")}
          className="size-4 accent-primary"
        />
      </label>
      <label className="flex items-center justify-between rounded-md bg-background px-3 py-3 text-sm">
        فقط سازگاری تأییدشده
        <input
          type="checkbox"
          checked={filters.confirmedOnly}
          onChange={() => toggle("confirmedOnly")}
          className="size-4 accent-primary"
        />
      </label>
      <button type="button" onClick={reset} className="h-10 w-full text-sm text-muted">
        بازنشانی فیلترها
      </button>
    </div>
  );
}

function OfferDetail() {
  const offer = useActiveOffer()!;
  const vehicle = useApp((s) => s.vehicle);
  const openSheet = useApp((s) => s.openSheet);
  const extra = useApp((s) => s.confirmedIds.includes(offer.id));
  const fit = extra ? "confirmed" : fitmentFor(offer, vehicle);
  return (
    <div className="pt-2 pb-4">
      <div className="overflow-hidden rounded-md bg-background">
        {offer.image ? (
          <img
            src={offer.image}
            alt=""
            className="aspect-square w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
          />
        ) : (
          <div className="flex aspect-square items-center justify-center text-sm text-muted">
            تصویر موجود نیست
          </div>
        )}
      </div>
      <h2 className="mt-3 text-base font-semibold">{offer.title}</h2>
      <p className="mt-1 text-xs text-muted">
        {offer.brand}
        {offer.oemCode ? ` · ${offer.oemCode}` : ""}
      </p>
      <p className="mt-2 text-xl font-semibold tabular-nums">{faPrice(offer.price)}</p>
      <p className="mt-2 text-xs text-muted">{fitmentLabel(fit, vehicle)}</p>
      {fit !== "confirmed" && (
        <button
          type="button"
          onClick={() => openSheet("fitment", offer.id)}
          className="mt-2 h-10 w-full rounded-md bg-caution-fg text-sm font-medium text-caution"
        >
          تأیید سازگاری با خودروی من
        </button>
      )}
      <div className="mt-4 rounded-md bg-background p-3">
        <p className="text-sm font-medium">{offer.seller.name}</p>
        <p className="mt-1 flex items-center gap-1 text-xs text-muted">
          {offer.seller.rating != null && (
            <>
              <Star className="size-3 fill-caution text-caution" />
              {faRating(offer.seller.rating)}
            </>
          )}
          {offer.seller.distanceKm != null && (
            <>
              <MapPin className="size-3" />
              {faKm(offer.seller.distanceKm)}
            </>
          )}
        </p>
        {offer.seller.torobGuarantee && (
          <p className="mt-2 inline-flex items-center gap-1 text-xs text-trust">
            <ShieldCheck className="size-3.5" />
            ضمانت ترب فعال است
          </p>
        )}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {offer.actions.includes("buy") && (
          <button
            type="button"
            onClick={() => openSheet("buy", offer.id)}
            className="h-12 rounded-md bg-primary text-sm font-medium text-primary-foreground"
          >
            خرید اینترنتی
          </button>
        )}
        {offer.actions.includes("call") && (
          <button
            type="button"
            onClick={() => openSheet("call", offer.id)}
            className="h-12 rounded-md bg-foreground text-sm font-medium text-card"
          >
            تماس تلفنی
          </button>
        )}
        {offer.actions.includes("nav") && (
          <button
            type="button"
            onClick={() => openSheet("map", offer.id)}
            className="h-12 rounded-md bg-background text-sm font-medium"
          >
            مسیریابی
          </button>
        )}
        {offer.actions.includes("chat") && (
          <button
            type="button"
            onClick={() => openSheet("chat", offer.id)}
            className="h-12 rounded-md bg-background text-sm font-medium"
          >
            پیام‌رسان
          </button>
        )}
      </div>
      <button
        type="button"
        onClick={() => openSheet("score", offer.id)}
        className="mt-3 h-10 w-full text-xs text-muted"
      >
        جزئیات امتیاز «بهترین»
      </button>
    </div>
  );
}

function MapPane() {
  const offer = useActiveOffer()!;
  const showToast = useApp((s) => s.showToast);
  const close = useApp((s) => s.closeSheet);
  return (
    <div className="pt-2">
      <div className="relative h-48 overflow-hidden rounded-md bg-[#d7e4d4]">
        <svg viewBox="0 0 320 180" className="size-full">
          <path d="M0 90h320" stroke="#c4d0c2" strokeWidth="8" />
          <path d="M40 0v180" stroke="#c4d0c2" strokeWidth="6" />
          <path d="M180 0v180" stroke="#b9c8b8" strokeWidth="10" />
          <path d="M0 40h320" stroke="#c9d5c8" strokeWidth="5" />
          <circle cx="210" cy="88" r="9" fill="#E91E33" />
          <circle cx="210" cy="88" r="16" fill="none" stroke="#E91E33" strokeWidth="2" opacity="0.4" />
        </svg>
        <div className="absolute bottom-2 right-2 rounded-sm bg-card/95 px-2 py-1 text-[11px]">
          {offer.seller.neighborhood} ·{" "}
          {offer.seller.distanceKm != null ? faKm(offer.seller.distanceKm) : "فاصله نامشخص"}
        </div>
      </div>
      <p className="mt-3 text-sm font-medium">{offer.seller.name}</p>
      <p className="mt-1 text-xs text-muted">
        {offer.seller.hours ? `ساعت کار ${offer.seller.hours}` : "ساعت کار نامشخص"}
      </p>
      <button
        type="button"
        onClick={() => {
          showToast("مسیر تا فروشگاه روی نقشه باز شد");
          close();
        }}
        className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-medium text-primary-foreground"
      >
        <Navigation className="size-4" />
        شروع مسیریابی
      </button>
    </div>
  );
}

function CallPane() {
  const offer = useActiveOffer()!;
  const showToast = useApp((s) => s.showToast);
  const close = useApp((s) => s.closeSheet);
  return (
    <div className="pt-2 text-center">
      <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-trust-fg text-trust">
        <Phone className="size-6" />
      </div>
      <p className="mt-3 text-sm font-medium">{offer.seller.name}</p>
      <p className="mt-1 font-semibold tabular-nums" dir="ltr">
        {offer.seller.phone ?? "شماره ثبت نشده"}
      </p>
      <p className="mt-2 text-xs text-muted">
        {offer.seller.hours ?? "ساعت پاسخگویی نامشخص"}
        {offer.seller.responseMins
          ? ` · میانگین پاسخ ${faNum(offer.seller.responseMins)} دقیقه`
          : ""}
      </p>
      <button
        type="button"
        disabled={!offer.seller.phone}
        onClick={() => {
          showToast("در حال تماس با فروشنده");
          close();
        }}
        className="mt-5 h-12 w-full rounded-md bg-trust text-sm font-medium text-primary-foreground disabled:opacity-40"
      >
        تماس حالا
      </button>
    </div>
  );
}

function ChatPane() {
  const offer = useActiveOffer()!;
  const vehicle = useApp((s) => s.vehicle);
  const showToast = useApp((s) => s.showToast);
  const close = useApp((s) => s.closeSheet);
  const [text, setText] = useState(
    `سلام، دیسک صفحه برای ${vehicle.make} ${vehicle.model} ${vehicle.trim} موجود است؟`,
  );
  return (
    <div className="pt-2">
      <div className="rounded-md bg-background p-3 text-xs text-muted">
        پیام با سازگاری خودرو از قبل پر می‌شود تا فروشنده حدس نزند.
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mt-3 h-28 w-full rounded-md bg-background p-3 text-sm outline-none"
      />
      <button
        type="button"
        onClick={() => {
          showToast("پیام برای فروشنده ارسال شد");
          close();
        }}
        className="mt-3 h-12 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground"
      >
        ارسال پیام
      </button>
      <p className="mt-2 text-center text-[11px] text-subtle">{offer.seller.name}</p>
    </div>
  );
}

function BuyPane() {
  const offer = useActiveOffer()!;
  const showToast = useApp((s) => s.showToast);
  const close = useApp((s) => s.closeSheet);
  return (
    <div className="pt-2">
      <p className="text-sm">{offer.title}</p>
      <p className="mt-1 text-lg font-semibold tabular-nums">{faPrice(offer.price)}</p>
      {offer.seller.hasInstallments && (
        <p className="mt-2 rounded-md bg-trust-fg px-3 py-2 text-xs text-trust">
          امکان خرید قسطی از اعتبار ترب‌پی
        </p>
      )}
      {offer.seller.torobGuarantee && (
        <p className="mt-2 flex items-center gap-1 text-xs text-trust">
          <ShieldCheck className="size-3.5" />
          شامل ضمانت ترب
        </p>
      )}
      <button
        type="button"
        onClick={() => {
          showToast("سفارش با موفقیت ثبت شد");
          close();
        }}
        className="mt-5 h-12 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground"
      >
        تأیید و ادامه خرید
      </button>
    </div>
  );
}

function CameraPane() {
  const setQuery = useApp((s) => s.setQuery);
  const showToast = useApp((s) => s.showToast);
  const close = useApp((s) => s.closeSheet);
  return (
    <div className="pt-2">
      <div className="relative overflow-hidden rounded-md bg-ink">
        <img src="/parts/disc.jpg" alt="" className="h-52 w-full object-cover opacity-80" />
        <div className="absolute inset-8 rounded-md border border-card/80" />
      </div>
      <p className="mt-3 text-sm">قطعه به‌عنوان دیسک کلاچ پژو ۲۰۶ تشخیص داده شد.</p>
      <p className="mt-1 text-xs text-muted">کد فنی پیشنهادی: ۸۲۶۲۱۱</p>
      <button
        type="button"
        onClick={() => {
          setQuery("دیسک صفحه ۲۰۶ تیپ ۵");
          showToast("پژو ۲۰۶ تیپ ۵ در گاراژ ذخیره شد");
          close();
        }}
        className="mt-4 h-12 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground"
      >
        دیدن پیشنهادها
      </button>
    </div>
  );
}

function VoicePane() {
  const setQuery = useApp((s) => s.setQuery);
  const showToast = useApp((s) => s.showToast);
  const close = useApp((s) => s.closeSheet);
  const [listening, setListening] = useState(true);
  useEffect(() => {
    const t = window.setTimeout(() => setListening(false), 1600);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <div className="pt-4 text-center">
      <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Mic className="size-7" />
      </div>
      <p className="mt-3 text-sm font-medium">
        {listening ? "در حال شنیدن…" : "دیسک صفحه ۲۰۶ تیپ ۵"}
      </p>
      <div className="mx-auto mt-4 flex h-8 items-end justify-center gap-1">
        {[8, 16, 24, 12, 20, 10, 18].map((h, i) => (
          <span
            key={i}
            className="w-1 rounded-full bg-primary"
            style={{ height: listening ? h : 6 }}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          setQuery("دیسک صفحه ۲۰۶ تیپ ۵");
          showToast("پژو ۲۰۶ تیپ ۵ در گاراژ ذخیره شد");
          close();
        }}
        className="mt-5 h-12 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground"
      >
        جستجو با این عبارت
      </button>
    </div>
  );
}

function FitmentPane() {
  const offer = useActiveOffer()!;
  const confirmFitment = useApp((s) => s.confirmFitment);
  const showToast = useApp((s) => s.showToast);
  const close = useApp((s) => s.closeSheet);
  const vehicle = useApp((s) => s.vehicle);
  const [yearOk, setYearOk] = useState(true);
  const [engineOk, setEngineOk] = useState(true);
  return (
    <div className="pt-2">
      <p className="text-sm text-muted">
        داده سازگاری این آگهی ناقص است. با سه سؤال کوتاه می‌توانید خودتان تأیید کنید.
      </p>
      <label className="mt-3 flex items-center justify-between rounded-md bg-background px-3 py-3 text-sm">
        سال ساخت {vehicle.year} است
        <input
          type="checkbox"
          checked={yearOk}
          onChange={(e) => setYearOk(e.target.checked)}
          className="size-4 accent-primary"
        />
      </label>
      <label className="mt-2 flex items-center justify-between rounded-md bg-background px-3 py-3 text-sm">
        موتور {vehicle.engine} است
        <input
          type="checkbox"
          checked={engineOk}
          onChange={(e) => setEngineOk(e.target.checked)}
          className="size-4 accent-primary"
        />
      </label>
      <button
        type="button"
        disabled={!yearOk || !engineOk}
        onClick={() => {
          confirmFitment(offer.id);
          showToast("سازگاری برای این پیشنهاد تأیید شد");
          close();
        }}
        className="mt-4 h-12 w-full rounded-md bg-trust text-sm font-medium text-primary-foreground disabled:opacity-40"
      >
        تأیید سازگاری
      </button>
    </div>
  );
}

function ScorePane() {
  const offer = useActiveOffer()!;
  const vehicle = useApp((s) => s.vehicle);
  const b = scoreBreakdown(offer, vehicle, OFFERS);
  const rows = [
    { t: "قیمت", v: b.price },
    { t: "نزدیکی", v: b.proximity },
    { t: "امتیاز فروشنده", v: b.rating },
    { t: "سرعت تأمین", v: b.speed },
    { t: "ضمانت ترب", v: b.guarantee },
    { t: "سازگاری", v: b.fitment },
  ];
  return (
    <div className="space-y-3 pt-2">
      {rows.map((r) => (
        <div key={r.t}>
          <div className="flex justify-between text-xs">
            <span>{r.t}</span>
            <span className="tabular-nums">{faNum(Math.round(r.v * 100))}٪</span>
          </div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-background">
            <div className="h-full bg-foreground" style={{ width: `${Math.round(r.v * 100)}%` }} />
          </div>
        </div>
      ))}
      <p className="text-xs text-muted">
        امتیاز ترکیبی پیش‌فرض «بهترین» است و وزن‌ها شفاف نمایش داده می‌شوند تا رتبه‌بندی جعبه سیاه نباشد.
      </p>
    </div>
  );
}

function DesignNotes() {
  return (
    <div className="space-y-5 pt-1 text-sm leading-relaxed">
      <section>
        <h3 className="font-semibold">تشخیص مسئله</h3>
        <p className="mt-1 text-muted">
          PLP فعلی کالا‌محور است و فروشنده‌ها را در یک کارت ادغام می‌کند. در لوازم یدکی داده ادغام‌شده
          ناقص است؛ کاربر قطعه سازگار از فروشنده قابل اعتماد می‌خواهد، نه برند تجمیع‌شده.
        </p>
      </section>
      <section>
        <h3 className="font-semibold">معماری</h3>
        <p className="mt-1 text-muted">
          هیبرید فروشنده‌محور: هر کارت یک پیشنهاد است (قیمت + مسافت + اعتماد + اقدام). گاراژ، فیلتر
          فاصله و نشان ضمانت، تصمیم را روی کارت تمام می‌کنند.
        </p>
      </section>
      <section>
        <h3 className="font-semibold">امکان‌سنجی داده</h3>
        <ul className="mt-1 list-disc pr-4 text-muted">
          <li>سازگاری سه‌حالته: تأیید، حدسی، نامشخص — هیچ ردیفی به‌خاطر نقص متادیتا حذف نمی‌شود.</li>
          <li>عکس فروشنده از کاتالوگ جدا شده تا تقلبی بودن تصویر پنهان نماند.</li>
          <li>فاصله null برای آنلاین؛ موقعیت سه‌لایه GPS / دستی / IP.</li>
          <li>رتبه «بهترین» روی فیلدهای موجود نرمال می‌شود، نه داده خیالی.</li>
        </ul>
      </section>
      <section>
        <h3 className="font-semibold">داوری محصول</h3>
        <p className="mt-1 text-muted">
          چهار اقدام تبدیل (خرید، تماس، مسیر، پیام) روی کارت است. موفقیت طرح یعنی کاهش مسیر تا تماس
          یا خرید، نه زیبایی شبکه دوتایی کالا.
        </p>
      </section>
    </div>
  );
}
