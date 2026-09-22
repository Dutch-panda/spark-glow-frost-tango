export function faNum(value: string | number): string {
  return String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)] ?? d);
}

export function faPrice(toman: number): string {
  return `${faNum(Math.round(toman).toLocaleString("en-US"))} تومان`;
}

export function faCompactPrice(toman: number): string {
  if (toman >= 1_000_000) {
    const m = toman / 1_000_000;
    const body = m >= 10 ? m.toFixed(1) : m.toFixed(1);
    return `${faNum(body)} میلیون`;
  }
  return faPrice(toman);
}

export function faKm(km: number): string {
  if (km < 1) return `${faNum(Math.round(km * 1000))} متر`;
  const n = km < 10 ? km.toFixed(1) : Math.round(km).toString();
  return `${faNum(n)} کیلومتر`;
}

export function faCount(n: number): string {
  return faNum(n.toLocaleString("en-US"));
}

export function faRating(n: number): string {
  return faNum(n.toFixed(1));
}
