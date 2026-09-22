export function DesignLab() {
  return (
    <aside className="hidden w-[340px] shrink-0 flex-col justify-center py-4 text-right lg:flex">
      <p className="text-[11px] text-card/45">نظام طراحی · لوازم یدکی</p>
      <h2 className="mt-2 text-2xl font-semibold leading-snug text-card">ترب قطعات</h2>
      <p className="mt-3 text-sm leading-relaxed text-card/70">
        از شبکه کالامحور به پیشنهاد فروشنده‌محور. سازگاری خودرو، اعتماد و اقدام تبدیل روی خود کارت تمام می‌شود.
      </p>

      <dl className="mt-8 space-y-4 text-sm">
        <div>
          <dt className="text-[11px] text-card/45">رنگ</dt>
          <dd className="mt-2 flex gap-2">
            <span className="size-7 rounded-full bg-primary" title="#E91E33" />
            <span className="size-7 rounded-full bg-card" title="surface" />
            <span className="size-7 rounded-full bg-muted" title="slate" />
            <span className="size-7 rounded-full bg-trust" title="trust" />
            <span className="size-7 rounded-full bg-foreground ring-1 ring-card/20" title="ink" />
          </dd>
        </div>
        <div>
          <dt className="text-[11px] text-card/45">تایپ</dt>
          <dd className="mt-1 text-card/80">Vazirmatn · وزن ۴۰۰–۷۰۰ · RTL</dd>
        </div>
        <div>
          <dt className="text-[11px] text-card/45">فضا</dt>
          <dd className="mt-1 text-card/80">شبکه ۸تایی · کارت ۱۸px · هدف لمس ۴۴px</dd>
        </div>
      </dl>

      <ol className="mt-8 space-y-3 text-sm text-card/75">
        <li>
          <span className="text-primary">۱. </span>
          گاراژ هوشمند سازگاری را از جستجو به خاطر می‌سپارد.
        </li>
        <li>
          <span className="text-primary">۲. </span>
          کارت پیشنهاد: عکس واقعی، مسافت، ضمانت، قیمت.
        </li>
        <li>
          <span className="text-primary">۳. </span>
          چهار اقدام: خرید، تماس، مسیر، پیام.
        </li>
        <li>
          <span className="text-primary">۴. </span>
          داده ناقص پنهان نمی‌شود؛ با نشان زرد/خاکستری درخواست تأیید می‌کند.
        </li>
      </ol>
    </aside>
  );
}
