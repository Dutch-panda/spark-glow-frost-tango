import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Camera, S as Car, _ as ImageOff, a as Sparkles, b as ChevronDown, c as ShieldCheck, d as Phone, f as Navigation, g as Info, h as MapPin, i as Star, l as Search, m as MessageCircle, n as User, o as SlidersHorizontal, p as Mic, s as ShoppingBag, t as X, u as Plus, v as Heart, x as Check, y as Grid2x2 } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-PwXV0Yw9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var VEHICLES = [
	{
		id: "206-t5",
		make: "پژو",
		model: "۲۰۶",
		trim: "تیپ ۵",
		year: "۱۳۸۹",
		engine: "TU5"
	},
	{
		id: "206-t2",
		make: "پژو",
		model: "۲۰۶",
		trim: "تیپ ۲",
		year: "۱۳۸۶",
		engine: "TU3"
	},
	{
		id: "pride-131",
		make: "پراید",
		model: "۱۳۱",
		trim: "SE",
		year: "۱۳۹۲",
		engine: "M13"
	},
	{
		id: "samand-lx",
		make: "سمند",
		model: "LX",
		trim: "EF7",
		year: "۱۳۹۴",
		engine: "EF7"
	}
];
var LOCATIONS = [
	{
		id: "punak",
		label: "تهران، پونک",
		city: "تهران",
		neighborhood: "پونک",
		source: "gps"
	},
	{
		id: "valiasr",
		label: "تهران، ولیعصر",
		city: "تهران",
		neighborhood: "ولیعصر",
		source: "manual"
	},
	{
		id: "enghelab",
		label: "تهران، انقلاب",
		city: "تهران",
		neighborhood: "انقلاب",
		source: "manual"
	},
	{
		id: "karaj",
		label: "کرج، گوهردشت",
		city: "کرج",
		neighborhood: "گوهردشت",
		source: "ip"
	}
];
var SEARCH_QUERY = "دیسک صفحه ۲۰۶ تیپ ۵";
var OFFERS = [
	{
		id: "o1",
		title: "کیت کلاچ والئو PHC با بلبرینگ",
		brand: "Valeo PHC",
		origin: "oem",
		oemCode: "۸۲۶۲۱۱",
		price: 145e5,
		image: "/parts/workshop.jpg",
		photoKind: "seller",
		vehicleIds: ["206-t5"],
		seller: {
			id: "s-arya",
			name: "آریا یدکی پونک",
			rating: 4.8,
			reviewCount: 214,
			neighborhood: "پونک",
			city: "تهران",
			distanceKm: 1.2,
			channel: "hybrid",
			hours: "۹ تا ۲۱",
			phone: "۰۲۱۴۴۳۲۱۸۹۰",
			hasInstallments: true,
			torobGuarantee: true,
			stock: "now",
			responseMins: 8
		},
		deliveryHours: 2,
		actions: [
			"buy",
			"call",
			"nav",
			"chat"
		]
	},
	{
		id: "o2",
		title: "دیسک و صفحه والئو مناسب تیپ ۵",
		brand: "Valeo",
		origin: "oem",
		oemCode: "۸۲۶۲۱۱",
		price: 161e5,
		image: "/parts/shop-shelf.jpg",
		photoKind: "seller",
		vehicleIds: ["206-t5"],
		seller: {
			id: "s-valiasr",
			name: "اتوپارت ولیعصر",
			rating: 4.9,
			reviewCount: 88,
			neighborhood: "ولیعصر",
			city: "تهران",
			distanceKm: .8,
			channel: "physical",
			hours: "۱۰ تا ۲۰",
			phone: "۰۲۱۸۸۹۹۱۲۰۰",
			hasInstallments: false,
			torobGuarantee: true,
			stock: "now",
			responseMins: 4
		},
		deliveryHours: 0,
		actions: [
			"call",
			"nav",
			"chat"
		]
	},
	{
		id: "o3",
		title: "دیسک و صفحه پژو ۲۰۶ تیپ ۵ والئو آبی",
		brand: "Valeo PHC",
		origin: "oem",
		price: 148e5,
		image: "/parts/valeo-box.jpg",
		photoKind: "catalog",
		vehicleIds: ["206-t5", "206-t2"],
		seller: {
			id: "s-hami",
			name: "طهران حامی پارت",
			rating: 4.6,
			reviewCount: 51,
			neighborhood: "صادقیه",
			city: "تهران",
			distanceKm: 5.1,
			channel: "hybrid",
			hours: "۹ تا ۱۸",
			phone: "۰۲۱۴۴۰۰۷۷۱۱",
			hasInstallments: true,
			torobGuarantee: false,
			stock: "now",
			responseMins: 25
		},
		deliveryHours: 6,
		actions: [
			"buy",
			"call",
			"nav"
		]
	},
	{
		id: "o4",
		title: "کیت کلاچ کامل ۲۰۶",
		brand: "Valeo",
		origin: "oem",
		price: 152e5,
		image: "/parts/kit-open.jpg",
		photoKind: "catalog",
		vehicleIds: ["206-t5"],
		seller: {
			id: "s-clutch",
			name: "کلاچ سنتر صادقیه",
			rating: 4.7,
			reviewCount: 120,
			neighborhood: "صادقیه",
			city: "تهران",
			distanceKm: 2.1,
			channel: "physical",
			hours: "۸ تا ۱۹",
			phone: "۰۲۱۴۴۲۲۶۶۵۵",
			hasInstallments: false,
			torobGuarantee: false,
			stock: "now",
			responseMins: 12
		},
		actions: [
			"call",
			"nav",
			"chat"
		]
	},
	{
		id: "o5",
		title: "دیسک و صفحه طرح اقتصادی ۲۰۶",
		brand: "متفرقه",
		origin: "aftermarket",
		price: 122e5,
		image: "/parts/aftermarket.jpg",
		photoKind: "catalog",
		vehicleIds: ["206-t5", "206-t2"],
		seller: {
			id: "s-pars",
			name: "یدکی آنلاین پارس",
			rating: 4.1,
			reviewCount: 890,
			neighborhood: "انبار مرکزی",
			city: "تهران",
			distanceKm: null,
			channel: "online",
			hasInstallments: false,
			torobGuarantee: false,
			stock: "now",
			responseMins: 40
		},
		deliveryHours: 36,
		actions: ["buy", "chat"]
	},
	{
		id: "o6",
		title: "دیسک و صفحه کلاچ والئو مناسب پژو ۲۰۶ تیپ ۵",
		brand: "Valeo",
		origin: "oem",
		oemCode: "۸۲۶۲۱۱",
		price: 189e5,
		image: "/parts/green-kit.jpg",
		photoKind: "catalog",
		vehicleIds: ["206-t5"],
		isAd: true,
		seller: {
			id: "s-rad",
			name: "مستر باک راد",
			rating: 4.2,
			reviewCount: 19,
			neighborhood: "تهرانپارس",
			city: "تهران",
			distanceKm: 14.6,
			channel: "online",
			hasInstallments: true,
			torobGuarantee: false,
			stock: "limited",
			responseMins: 90
		},
		deliveryHours: 48,
		actions: ["buy"]
	},
	{
		id: "o7",
		title: "کیت کلاچ ۲۰۶ با گارانتی تعویض",
		brand: "ISC",
		origin: "aftermarket",
		price: 139e5,
		image: "/parts/disc.jpg",
		photoKind: "catalog",
		vehicleIds: ["206-t5", "206-t2"],
		seller: {
			id: "s-eng",
			name: "قطعه گارانتی انقلاب",
			rating: 4.3,
			reviewCount: 64,
			neighborhood: "انقلاب",
			city: "تهران",
			distanceKm: 12.4,
			channel: "hybrid",
			hours: "۱۰ تا ۲۱",
			phone: "۰۲۱۶۶۴۴۰۰۱۲",
			hasInstallments: true,
			torobGuarantee: false,
			stock: "unknown",
			responseMins: 30
		},
		deliveryHours: 24,
		actions: ["buy", "call"]
	},
	{
		id: "o8",
		title: "دیسک صفحه ۲۰۶ ارزان",
		brand: "بدون برند",
		origin: "aftermarket",
		price: 118e5,
		image: null,
		photoKind: "missing",
		vehicleIds: [],
		seller: {
			id: "s-digi",
			name: "دیجی‌یدک",
			rating: 3.9,
			reviewCount: 2104,
			neighborhood: "ارسال سراسری",
			city: "ایران",
			distanceKm: null,
			channel: "online",
			hasInstallments: true,
			torobGuarantee: false,
			stock: "now",
			responseMins: 120
		},
		deliveryHours: 72,
		actions: ["buy"]
	},
	{
		id: "o9",
		title: "کیت کلاچ اصلی والئو جعبه‌دار",
		brand: "Valeo",
		origin: "oem",
		oemCode: "۸۲۶۲۱۱",
		price: 142e5,
		image: "/parts/oem-box.jpg",
		photoKind: "seller",
		vehicleIds: ["206-t5"],
		seller: {
			id: "s-coop",
			name: "تعاونی مکانیک پونک",
			rating: 4.5,
			reviewCount: 67,
			neighborhood: "پونک",
			city: "تهران",
			distanceKm: 1.5,
			channel: "hybrid",
			hours: "۸ تا ۱۷",
			phone: "۰۹۱۲۳۴۵۶۷۸۰",
			hasInstallments: true,
			torobGuarantee: true,
			stock: "limited",
			responseMins: 15
		},
		deliveryHours: 4,
		actions: [
			"buy",
			"call",
			"nav",
			"chat"
		]
	},
	{
		id: "o10",
		title: "دیسک و صفحه کلاچ ۲۰۶",
		brand: "نامشخص",
		origin: "unknown",
		price: 155e5,
		image: null,
		photoKind: "missing",
		vehicleIds: [],
		seller: {
			id: "s-unknown",
			name: "یدکی برادران رضایی",
			rating: null,
			reviewCount: 0,
			neighborhood: "جنت‌آباد",
			city: "تهران",
			distanceKm: 8.2,
			channel: "physical",
			hours: "۹ تا ۱۸",
			phone: "۰۲۱۴۴۷۷۰۰۳۳",
			hasInstallments: false,
			torobGuarantee: false,
			stock: "unknown"
		},
		actions: ["call", "nav"]
	},
	{
		id: "o11",
		title: "کیت کلاچ والئو ۲۰۶ تیپ ۵",
		brand: "Valeo PHC",
		origin: "oem",
		price: 141e5,
		image: "/parts/valeo-box.jpg",
		photoKind: "catalog",
		vehicleIds: ["206-t5"],
		seller: {
			id: "s-karaj",
			name: "اتویدک گوهردشت",
			rating: 4.4,
			reviewCount: 41,
			neighborhood: "گوهردشت",
			city: "کرج",
			distanceKm: 32,
			channel: "hybrid",
			hours: "۹ تا ۲۰",
			phone: "۰۲۶۳۴۴۴۱۲۱۲",
			hasInstallments: false,
			torobGuarantee: true,
			stock: "now",
			responseMins: 20
		},
		deliveryHours: 8,
		actions: ["buy", "call"]
	},
	{
		id: "o12",
		title: "دیسک و صفحه پراید ۱۳۱",
		brand: "ISKRA",
		origin: "aftermarket",
		price: 74e5,
		image: "/parts/aftermarket.jpg",
		photoKind: "catalog",
		vehicleIds: ["pride-131"],
		seller: {
			id: "s-pride",
			name: "پراید پارت تهران",
			rating: 4.4,
			reviewCount: 33,
			neighborhood: "شوش",
			city: "تهران",
			distanceKm: 18,
			channel: "physical",
			hours: "۹ تا ۱۸",
			phone: "۰۲۱۵۵۳۳۱۱۲۰",
			hasInstallments: false,
			torobGuarantee: false,
			stock: "now"
		},
		actions: ["call", "nav"]
	}
];
var CATEGORIES = [
	{
		id: "clutch",
		label: "دیسک و صفحه",
		query: "دیسک صفحه ۲۰۶ تیپ ۵"
	},
	{
		id: "pads",
		label: "لنت ترمز",
		query: "لنت ترمز جلو ۲۰۶ تیپ ۵"
	},
	{
		id: "oil",
		label: "فیلتر روغن",
		query: "فیلتر روغن ۲۰۶ تیپ ۵"
	},
	{
		id: "spark",
		label: "شمع",
		query: "شمع TU5"
	},
	{
		id: "shock",
		label: "کمک فنر",
		query: "کمک فنر جلو ۲۰۶"
	},
	{
		id: "alt",
		label: "دینام",
		query: "دینام پژو ۲۰۶"
	},
	{
		id: "rad",
		label: "رادیاتور",
		query: "رادیاتور ۲۰۶ تیپ ۵"
	},
	{
		id: "timing",
		label: "تسمه تایم",
		query: "تسمه تایم TU5"
	}
];
var defaultFilters = () => ({
	nearby: false,
	inStock: false,
	guarantee: false,
	installments: false,
	origin: "all",
	confirmedOnly: false,
	hideAds: false
});
var toastSeq = 1;
var useApp = create((set, get) => ({
	tab: "search",
	query: SEARCH_QUERY,
	vehicle: VEHICLES[0],
	location: LOCATIONS[0],
	filters: defaultFilters(),
	sort: "best",
	sheet: null,
	activeOfferId: null,
	savedIds: [],
	confirmedIds: [],
	garageNoteSeen: false,
	toast: null,
	chatSeed: "",
	setTab: (tab) => set({
		tab,
		sheet: null
	}),
	setQuery: (query) => set({
		query,
		tab: "search"
	}),
	setVehicle: (vehicle) => set({
		vehicle,
		sheet: null
	}),
	setLocation: (location) => set({
		location,
		sheet: null
	}),
	toggleFilter: (key) => set({ filters: {
		...get().filters,
		[key]: !get().filters[key]
	} }),
	setOrigin: (origin) => set({ filters: {
		...get().filters,
		origin
	} }),
	resetFilters: () => set({ filters: defaultFilters() }),
	setSort: (sort) => set({
		sort,
		sheet: null
	}),
	openSheet: (sheet, offerId) => set({
		sheet,
		activeOfferId: offerId ?? get().activeOfferId
	}),
	closeSheet: () => set({ sheet: null }),
	toggleSaved: (id) => set({ savedIds: get().savedIds.includes(id) ? get().savedIds.filter((x) => x !== id) : [...get().savedIds, id] }),
	confirmFitment: (id) => set({ confirmedIds: get().confirmedIds.includes(id) ? get().confirmedIds : [...get().confirmedIds, id] }),
	showToast: (text) => {
		const id = toastSeq++;
		set({
			toast: {
				id,
				text
			},
			garageNoteSeen: true
		});
		window.setTimeout(() => {
			if (get().toast?.id === id) set({ toast: null });
		}, 4200);
	},
	dismissToast: () => set({ toast: null })
}));
function useActiveOffer() {
	const id = useApp((s) => s.activeOfferId);
	return OFFERS.find((o) => o.id === id) ?? null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function faNum(value) {
	return String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)] ?? d);
}
function faPrice(toman) {
	return `${faNum(Math.round(toman).toLocaleString("en-US"))} تومان`;
}
function faCompactPrice(toman) {
	if (toman >= 1e6) {
		const m = toman / 1e6;
		return `${faNum(m >= 10 ? m.toFixed(1) : m.toFixed(1))} میلیون`;
	}
	return faPrice(toman);
}
function faKm(km) {
	if (km < 1) return `${faNum(Math.round(km * 1e3))} متر`;
	return `${faNum(km < 10 ? km.toFixed(1) : Math.round(km).toString())} کیلومتر`;
}
function faCount(n) {
	return faNum(n.toLocaleString("en-US"));
}
function faRating(n) {
	return faNum(n.toFixed(1));
}
function fitmentFor(offer, vehicle) {
	if (!vehicle) return offer.vehicleIds.length ? "inferred" : "unknown";
	if (offer.vehicleIds.includes(vehicle.id)) return "confirmed";
	if (offer.vehicleIds.length === 0) return "unknown";
	return "mismatch";
}
function fitmentLabel(fit, vehicle) {
	const car = vehicle ? `${vehicle.make} ${vehicle.model} ${vehicle.trim}` : "خودروی شما";
	switch (fit) {
		case "confirmed": return `مناسب برای ${car}`;
		case "inferred": return "احتمالاً مناسب · نیاز به تأیید";
		case "unknown": return "سازگاری نامشخص";
		case "mismatch": return "نامناسب برای خودروی شما";
	}
}
function bestScore(offer, vehicle, all) {
	const prices = all.map((o) => o.price);
	const min = Math.min(...prices);
	const max = Math.max(...prices);
	const priceNorm = max === min ? 1 : 1 - (offer.price - min) / (max - min);
	const d = offer.seller.distanceKm;
	const proximity = d == null ? offer.seller.channel === "online" ? .28 : .4 : 1 - Math.min(d, 25) / 25;
	const rating = offer.seller.rating == null ? .45 : offer.seller.rating / 5;
	const speed = offer.seller.stock === "now" ? offer.seller.channel === "physical" || offer.seller.channel === "hybrid" ? 1 : offer.deliveryHours != null ? 1 - Math.min(offer.deliveryHours, 72) / 72 : .7 : offer.seller.stock === "limited" ? .65 : .35;
	const guarantee = offer.seller.torobGuarantee ? 1 : 0;
	const fit = fitmentFor(offer, vehicle);
	const fitScore = fit === "confirmed" ? 1 : fit === "inferred" ? .55 : fit === "unknown" ? .28 : 0;
	const adPenalty = offer.isAd ? .12 : 0;
	return .26 * priceNorm + .22 * proximity + .18 * rating + .12 * speed + .12 * guarantee + .1 * fitScore - adPenalty;
}
function scoreBreakdown(offer, vehicle, all) {
	const prices = all.map((o) => o.price);
	const min = Math.min(...prices);
	const max = Math.max(...prices);
	return {
		price: max === min ? 1 : 1 - (offer.price - min) / (max - min),
		proximity: offer.seller.distanceKm == null ? .28 : 1 - Math.min(offer.seller.distanceKm, 25) / 25,
		rating: offer.seller.rating == null ? .45 : offer.seller.rating / 5,
		speed: offer.seller.stock === "now" ? .95 : .45,
		guarantee: offer.seller.torobGuarantee ? 1 : 0,
		fitment: {
			confirmed: 1,
			inferred: .55,
			unknown: .28,
			mismatch: 0
		}[fitmentFor(offer, vehicle)],
		total: bestScore(offer, vehicle, all)
	};
}
function matchesFilters(offer, vehicle, filters) {
	const fit = fitmentFor(offer, vehicle);
	if (fit === "mismatch") return false;
	if (filters.nearby) {
		if (offer.seller.distanceKm == null || offer.seller.distanceKm > 5) return false;
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
function sortOffers(offers, sort, vehicle, pool) {
	const copy = [...offers];
	copy.sort((a, b) => {
		if (sort === "price") return a.price - b.price;
		if (sort === "distance") return (a.seller.distanceKm ?? 999) - (b.seller.distanceKm ?? 999);
		if (sort === "speed") return (a.seller.stock === "now" ? 0 : a.deliveryHours ?? 80) - (b.seller.stock === "now" ? 0 : b.deliveryHours ?? 80);
		return bestScore(b, vehicle, pool) - bestScore(a, vehicle, pool);
	});
	return copy;
}
function marketAverages(offers) {
	const oem = offers.filter((o) => o.origin === "oem");
	const alt = offers.filter((o) => o.origin === "aftermarket");
	const avg = (list) => list.length ? Math.round(list.reduce((s, o) => s + o.price, 0) / list.length) : 0;
	return {
		oem: avg(oem),
		aftermarket: avg(alt),
		all: avg(offers)
	};
}
function FitBadge({ fit, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex max-w-full items-center truncate rounded-full px-2 py-0.5 text-[11px] font-medium", fit === "confirmed" && "bg-trust-fg text-trust", fit === "inferred" && "bg-caution-fg text-caution", fit === "unknown" && "bg-background text-muted", fit === "mismatch" && "bg-primary/10 text-primary"),
		children: label
	});
}
function ActionBtn({ action, onClick }) {
	const item = {
		buy: {
			label: "خرید",
			icon: ShoppingBag,
			primary: true
		},
		call: {
			label: "تماس",
			icon: Phone
		},
		nav: {
			label: "مسیر",
			icon: Navigation
		},
		chat: {
			label: "پیام",
			icon: MessageCircle
		}
	}[action];
	const Icon = item.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: (e) => {
			e.stopPropagation();
			onClick();
		},
		className: cn("pressable flex h-10 min-w-0 flex-1 items-center justify-center gap-1 rounded-sm text-xs font-medium", item.primary ? "bg-primary text-primary-foreground" : "bg-background text-foreground"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-3.5",
			strokeWidth: 2
		}), item.label]
	});
}
function OfferCard({ offer, rank, isBest }) {
	const vehicle = useApp((s) => s.vehicle);
	const openSheet = useApp((s) => s.openSheet);
	const toggleSaved = useApp((s) => s.toggleSaved);
	const saved = useApp((s) => s.savedIds.includes(offer.id));
	const extraConfirmed = useApp((s) => s.confirmedIds.includes(offer.id));
	const fit = extraConfirmed ? "confirmed" : fitmentFor(offer, vehicle);
	const label = extraConfirmed ? `تأیید شد · ${vehicle.make} ${vehicle.model} ${vehicle.trim}` : fitmentLabel(fit, vehicle);
	const channelLabel = offer.seller.channel === "hybrid" ? "حضوری و آنلاین" : offer.seller.channel === "physical" ? "فروشگاه حضوری" : "فقط آنلاین";
	const stockLabel = offer.seller.stock === "now" ? "موجودی فوری" : offer.seller.stock === "limited" ? "تعداد محدود" : offer.seller.stock === "unknown" ? "موجودی نامشخص" : "ناموجود";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("relative overflow-hidden rounded-lg bg-card p-2.5 shadow-[var(--shadow-card)]", isBest && "ring-1 ring-trust/35"),
		children: [
			isBest && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation();
					openSheet("score", offer.id);
				},
				className: "mb-2 flex w-full items-center justify-between rounded-sm bg-trust-fg px-2 py-1 text-[11px] font-medium text-trust",
				children: ["پیشنهاد ترب · بهترین توازن قیمت، فاصله و اعتماد", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px]",
					children: "چرا؟"
				})]
			}),
			offer.isAd && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-[10px] font-medium text-muted",
				children: "آگهی اسپانسر"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => openSheet("detail", offer.id),
				className: "flex w-full gap-3 text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative size-[108px] shrink-0 overflow-hidden rounded-md bg-background",
					children: [offer.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: offer.image,
						alt: offer.title,
						className: "size-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex size-full flex-col items-center justify-center gap-1 text-subtle",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageOff, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-1 text-center text-[10px] leading-tight",
							children: "فروشنده عکس نداده"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute bottom-1 right-1 inline-flex items-center gap-0.5 rounded-full bg-card/95 px-1.5 py-0.5 text-[10px] text-muted",
						children: offer.photoKind === "seller" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-2.5" }), "عکس فروشنده"] }) : offer.photoKind === "catalog" ? "کاتالوگ" : "بدون تصویر"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "line-clamp-2 text-[13px] font-semibold leading-snug text-foreground",
								children: offer.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 shrink-0 text-[10px] text-subtle",
								children: faNum(rank)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 text-[11px] text-muted",
							children: [
								offer.brand,
								offer.oemCode ? ` · کد ${offer.oemCode}` : "",
								offer.origin === "oem" ? " · اصلی" : offer.origin === "aftermarket" ? " · طرح" : " · مبدأ نامشخص"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FitBadge, {
								fit,
								label
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex items-center justify-between gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[15px] font-semibold tabular-nums tracking-tight",
								children: faPrice(offer.price)
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2.5 flex items-center justify-between gap-2 border-t border-border pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[12px] font-medium",
						children: offer.seller.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 flex items-center gap-1 text-[11px] text-muted",
						children: [
							offer.seller.rating != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-caution text-caution" }),
								faRating(offer.seller.rating),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-subtle",
									children: [
										"(",
										faCount(offer.seller.reviewCount),
										")"
									]
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "بدون امتیاز" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-subtle",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }),
							offer.seller.distanceKm != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: faKm(offer.seller.distanceKm) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "فاصله نامشخص" })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "ذخیره",
					onClick: () => toggleSaved(offer.id),
					className: "flex size-10 items-center justify-center rounded-sm text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						className: cn("size-4", saved && "fill-primary text-primary"),
						strokeWidth: 2
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-background px-2 py-0.5 text-[10px] text-muted",
						children: channelLabel
					}),
					offer.seller.torobGuarantee && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-0.5 rounded-full bg-trust-fg px-2 py-0.5 text-[10px] font-medium text-trust",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3" }), "ضمانت ترب"]
					}),
					offer.seller.hasInstallments && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-background px-2 py-0.5 text-[10px] text-muted",
						children: "خرید قسطی"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-background px-2 py-0.5 text-[10px] text-muted",
						children: stockLabel
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2.5 flex gap-1.5",
				children: offer.actions.map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
					action,
					onClick: () => {
						if (action === "nav") openSheet("map", offer.id);
						else if (action === "call") openSheet("call", offer.id);
						else if (action === "chat") openSheet("chat", offer.id);
						else openSheet("buy", offer.id);
					}
				}, action))
			})
		]
	});
}
function bestOfferId(offers, vehicle) {
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
var SORT_LABEL = {
	best: "بهترین",
	price: "ارزان‌ترین",
	distance: "نزدیک‌ترین",
	speed: "سریع‌ترین"
};
function PlpScreen() {
	const query = useApp((s) => s.query);
	const setQuery = useApp((s) => s.setQuery);
	const vehicle = useApp((s) => s.vehicle);
	const location = useApp((s) => s.location);
	const filters = useApp((s) => s.filters);
	const toggleFilter = useApp((s) => s.toggleFilter);
	const sort = useApp((s) => s.sort);
	const openSheet = useApp((s) => s.openSheet);
	const garageNoteSeen = useApp((s) => s.garageNoteSeen);
	const listed = (0, import_react.useMemo)(() => {
		return sortOffers(OFFERS.filter((o) => matchesFilters(o, vehicle, filters)), sort, vehicle, OFFERS);
	}, [
		vehicle,
		filters,
		sort
	]);
	const avgs = (0, import_react.useMemo)(() => marketAverages(listed.length ? listed : OFFERS), [listed]);
	const bestId = listed.length && sort === "best" ? bestOfferId(listed, vehicle) : listed[0]?.id;
	const oemMax = Math.max(avgs.oem, avgs.aftermarket, 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-20 bg-card/95 backdrop-blur-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-3 pt-3 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "اصول طراحی",
						onClick: () => openSheet("design"),
						className: "flex size-11 shrink-0 items-center justify-center rounded-md text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						dir: "ltr",
						className: "flex h-11 min-w-0 flex-1 items-center gap-0.5 rounded-md bg-background pl-1.5 pr-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "جستجوی تصویری",
								onClick: () => openSheet("camera"),
								className: "flex size-9 shrink-0 items-center justify-center text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "جستجوی صوتی",
								onClick: () => openSheet("voice"),
								className: "flex size-9 shrink-0 items-center justify-center text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								dir: "rtl",
								value: query,
								onChange: (e) => setQuery(e.target.value),
								className: "min-w-0 flex-1 bg-transparent px-1 text-right text-sm outline-none placeholder:text-subtle",
								placeholder: "قطعه، برند یا کد فنی"
							}),
							query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "پاک کردن",
								onClick: () => setQuery(""),
								className: "flex size-8 shrink-0 items-center justify-center text-subtle",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-9 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => openSheet("garage"),
					className: "mx-3 mb-2 flex w-[calc(100%-1.5rem)] items-center justify-between rounded-md bg-foreground px-3 py-2.5 text-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-card/70",
							children: "خودروی شما"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-semibold",
							children: [
								vehicle.make,
								" ",
								vehicle.model,
								" ",
								vehicle.trim,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mr-2 text-[11px] font-normal text-card/70",
									children: [
										vehicle.year,
										" · ",
										vehicle.engine
									]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-card/80",
						children: "تغییر"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-3 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => openSheet("location"),
						className: "flex h-9 items-center gap-1 text-xs text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-primary" }),
							location.label,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-subtle",
								children: location.source === "gps" ? "موقعیت دقیق" : location.source === "ip" ? "تقریبی" : "انتخاب‌شده"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => openSheet("sort"),
							className: "flex h-9 items-center gap-1 rounded-full bg-background px-3 text-xs font-medium",
							children: [SORT_LABEL[sort], /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => openSheet("filters"),
							className: "flex size-9 items-center justify-center rounded-full bg-background",
							"aria-label": "فیلترها",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "no-scrollbar flex gap-1.5 overflow-x-auto px-3 pb-3",
					children: [
						{
							key: "nearby",
							label: "فروشگاه‌های نزدیک"
						},
						{
							key: "inStock",
							label: "موجودی فوری"
						},
						{
							key: "guarantee",
							label: "ضمانت ترب"
						},
						{
							key: "installments",
							label: "خرید قسطی"
						},
						{
							key: "confirmedOnly",
							label: "فقط سازگار"
						}
					].map((c) => {
						const on = filters[c.key];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toggleFilter(c.key),
							className: cn("h-8 shrink-0 rounded-full px-3 text-xs font-medium", on ? "bg-primary text-primary-foreground" : "bg-background text-muted"),
							children: c.label
						}, c.key);
					})
				}),
				!garageNoteSeen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-3 mb-3 flex items-center gap-2 rounded-md bg-trust-fg px-2 py-1.5 text-trust",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => useApp.setState({
							garageNoteSeen: true,
							tab: "garage"
						}),
						className: "min-w-0 flex-1 px-1 text-right text-[11px] leading-relaxed",
						children: "پژو ۲۰۶ تیپ ۵ از روی جستجو به گاراژ اضافه شد. برای ویرایش بزنید."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "بستن",
						onClick: () => useApp.setState({ garageNoteSeen: true }),
						className: "flex size-8 shrink-0 items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 space-y-3 overflow-y-auto px-3 pt-3 pb-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						faCount(listed.length),
						" پیشنهاد برای «",
						query || "قطعه",
						"»"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["مرتب‌سازی: ", SORT_LABEL[sort]] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "no-scrollbar flex gap-1.5 overflow-x-auto",
					children: [
						{
							t: "اصلی والئو یا طرح؟",
							k: () => useApp.getState().setOrigin(filters.origin === "oem" ? "all" : "oem")
						},
						{
							t: "تحویل امروز اطراف من",
							k: () => {
								toggleFilter("nearby");
								if (!filters.inStock) toggleFilter("inStock");
							}
						},
						{
							t: "فقط ضمانت ترب",
							k: () => {
								if (!filters.guarantee) toggleFilter("guarantee");
							}
						}
					].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: p.k,
						className: "inline-flex h-8 shrink-0 items-center gap-1 rounded-full bg-card px-3 text-[11px] text-foreground shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-primary" }), p.t]
					}, p.t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-lg bg-card p-3 shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium",
							children: "میانگین بازار تهران"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvgRow, {
								label: "اصلی / OEM",
								value: avgs.oem,
								max: oemMax,
								tone: "trust"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvgRow, {
								label: "طرح / افترمارکت",
								value: avgs.aftermarket,
								max: oemMax,
								tone: "muted"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] text-muted",
							children: "قیمت پایین‌تر از طرح لزوماً ارزان‌تر نیست — مبدأ و ضمانت را ببینید."
						})
					]
				}),
				listed.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-card px-4 py-10 text-center shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "نتیجه‌ای با این فیلترها نیست"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: "فیلترها را کمتر کنید یا خودرو را بررسی کنید."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => useApp.getState().resetFilters(),
							className: "mt-4 h-10 rounded-md bg-primary px-4 text-sm text-primary-foreground",
							children: "حذف فیلترها"
						})
					]
				}) : listed.map((offer, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferCard, {
					offer,
					rank: i + 1,
					isBest: offer.id === bestId && !offer.isAd
				}, offer.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-2 pb-4 text-center text-[11px] leading-relaxed text-subtle",
					children: "سازگاری بر اساس گاراژ شما فیلتر شده. پیشنهادهایی بدون متادیتا با نشان «نامشخص» دیده می‌شوند تا داده ناقص پنهان نشود."
				})
			]
		})]
	});
}
function AvgRow({ label, value, max, tone }) {
	const w = Math.round(value / max * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between text-[11px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium tabular-nums",
			children: value ? faCompactPrice(value) : "—"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 h-1.5 overflow-hidden rounded-full bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full rounded-full", tone === "trust" ? "bg-trust" : "bg-subtle"),
			style: { width: `${w}%` }
		})
	})] });
}
function CategoriesScreen() {
	const setQuery = useApp((s) => s.setQuery);
	const vehicle = useApp((s) => s.vehicle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex-1 overflow-y-auto px-4 pt-6 pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "دسته‌بندی قطعات"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					"نتایج روی ",
					vehicle.make,
					" ",
					vehicle.model,
					" ",
					vehicle.trim,
					" فیلتر می‌شود."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-2 gap-2.5",
				children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setQuery(c.query),
					className: "pressable rounded-lg bg-card px-3 py-5 text-sm font-medium shadow-[var(--shadow-card)]",
					children: c.label
				}, c.id))
			})
		]
	});
}
function GarageScreen() {
	const vehicle = useApp((s) => s.vehicle);
	const setVehicle = useApp((s) => s.setVehicle);
	const openSheet = useApp((s) => s.openSheet);
	const savedIds = useApp((s) => s.savedIds);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex-1 overflow-y-auto px-4 pt-6 pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "گاراژ من"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "سازگاری هر پیشنهاد با خودروی فعال سنجیده می‌شود. خودرو می‌تواند از روی متن جستجو هم ذخیره شود."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2",
				children: [VEHICLES.map((v) => {
					const on = v.id === vehicle.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setVehicle(v),
						className: cn("flex w-full items-center justify-between rounded-lg bg-card px-3 py-3 text-right shadow-[var(--shadow-card)]", on && "ring-1 ring-primary"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-semibold",
							children: [
								v.make,
								" ",
								v.model,
								" ",
								v.trim
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 text-xs text-muted",
							children: [
								v.year,
								" · موتور ",
								v.engine
							]
						})] }), on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
						})]
					}, v.id);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => openSheet("garage"),
					className: "flex h-12 w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-border text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "افزودن خودرو"]
				})]
			}),
			savedIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "ذخیره‌شده‌ها"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-2",
					children: OFFERS.filter((o) => savedIds.includes(o.id)).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-card px-3 py-2.5 text-sm shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: o.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 text-xs text-muted",
							children: [
								o.seller.name,
								" · ",
								faPrice(o.price)
							]
						})]
					}, o.id))
				})]
			})
		]
	});
}
function ProfileScreen() {
	const location = useApp((s) => s.location);
	const openSheet = useApp((s) => s.openSheet);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex-1 overflow-y-auto px-4 pt-6 pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "ترب من"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "موقعیت، اعتماد و مسیرهای تبدیل — بدون حساب کاربری."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => openSheet("location"),
				className: "mt-5 flex w-full items-center justify-between rounded-lg bg-card px-3 py-3 shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-primary" }), location.label]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted",
					children: "تغییر"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 divide-y divide-border overflow-hidden rounded-lg bg-card shadow-[var(--shadow-card)]",
				children: [
					{
						t: "ضمانت ترب",
						d: "مرجوعی و اصالت روی پیشنهادهای نشان‌دار"
					},
					{
						t: "خرید قسطی",
						d: "اقساط از اعتبار ترب‌پی روی فروشنده‌های واجد شرایط"
					},
					{
						t: "تماس و مسیریابی",
						d: "اقدام مستقیم از روی کارت، بدون صفحه جزئیات اجباری"
					}
				].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-1.5 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-trust" }), row.t]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted",
						children: row.d
					})]
				}, row.t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => openSheet("design"),
				className: "mt-6 h-12 w-full rounded-md bg-foreground text-sm font-medium text-card",
				children: "اصول طراحی و داوری طرح"
			})
		]
	});
}
function LocationList({ onPick }) {
	const current = useApp((s) => s.location);
	const setLocation = useApp((s) => s.setLocation);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2 pt-1",
		children: LOCATIONS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => {
				setLocation(l);
				onPick?.();
			},
			className: cn("flex w-full items-center justify-between rounded-md bg-background px-3 py-3 text-sm", current.id === l.id && "ring-1 ring-primary"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mr-2 text-[11px] text-muted",
				children: l.source === "gps" ? "GPS" : l.source === "ip" ? "تقریبی IP" : "دستی"
			})] }), current.id === l.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-primary" })]
		}, l.id))
	});
}
function BottomSheet({ open, onClose, title, children, height = "auto" }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-50 flex flex-col justify-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "بستن",
			className: "absolute inset-0 bg-ink/45",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			className: cn("relative z-10 flex w-full flex-col rounded-t-2xl bg-card shadow-[var(--shadow-float)]", height === "full" ? "h-[92%]" : "max-h-[88%]"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-2 h-1 w-10 rounded-full bg-border" }),
				title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "px-4 pt-3 pb-1 text-base font-semibold",
					children: title
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "sr-only",
					children: "پنل"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-4 pb-6",
					children
				})
			]
		})]
	});
}
function AppSheets() {
	const sheet = useApp((s) => s.sheet);
	const close = useApp((s) => s.closeSheet);
	const offer = useActiveOffer();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
			open: sheet === "garage",
			onClose: close,
			title: "گاراژ مجازی",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GaragePicker, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BottomSheet, {
			open: sheet === "location",
			onClose: close,
			title: "موقعیت شما",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs text-muted",
				children: "ترتیب دقت: GPS دستگاه، انتخاب دستی، سپس موقعیت تقریبی از شبکه."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationList, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
			open: sheet === "sort",
			onClose: close,
			title: "مرتب‌سازی",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortList, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
			open: sheet === "filters",
			onClose: close,
			title: "فیلترهای بیشتر",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreFilters, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
			open: sheet === "detail" && !!offer,
			onClose: close,
			height: "full",
			children: offer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferDetail, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
			open: sheet === "map" && !!offer,
			onClose: close,
			title: "مسیریابی",
			children: offer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPane, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
			open: sheet === "call" && !!offer,
			onClose: close,
			title: "تماس با فروشنده",
			children: offer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallPane, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
			open: sheet === "chat" && !!offer,
			onClose: close,
			title: "پیام به فروشنده",
			children: offer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatPane, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
			open: sheet === "buy" && !!offer,
			onClose: close,
			title: "خرید اینترنتی",
			children: offer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyPane, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
			open: sheet === "camera",
			onClose: close,
			title: "جستجوی تصویری",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraPane, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
			open: sheet === "voice",
			onClose: close,
			title: "جستجوی صوتی",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoicePane, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
			open: sheet === "fitment" && !!offer,
			onClose: close,
			title: "تأیید سازگاری",
			children: offer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FitmentPane, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
			open: sheet === "score" && !!offer,
			onClose: close,
			title: "چرا پیشنهاد ترب؟",
			children: offer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScorePane, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
			open: sheet === "design",
			onClose: close,
			title: "اصول طراحی",
			height: "full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignNotes, {})
		})
	] });
}
function GaragePicker() {
	const vehicle = useApp((s) => s.vehicle);
	const setVehicle = useApp((s) => s.setVehicle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2 pt-1",
		children: VEHICLES.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setVehicle(v),
			className: cn("flex w-full items-center justify-between rounded-md bg-background px-3 py-3 text-sm", vehicle.id === v.id && "ring-1 ring-primary"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				v.make,
				" ",
				v.model,
				" ",
				v.trim,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mr-2 text-[11px] text-muted",
					children: [
						v.year,
						" · ",
						v.engine
					]
				})
			] }), vehicle.id === v.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-primary" })]
		}, v.id))
	});
}
function SortList() {
	const sort = useApp((s) => s.sort);
	const setSort = useApp((s) => s.setSort);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2 pt-1",
		children: [
			{
				id: "best",
				t: "بهترین",
				d: "قیمت، فاصله، امتیاز، سرعت و ضمانت ترب"
			},
			{
				id: "price",
				t: "ارزان‌ترین",
				d: "فقط قیمت نهایی"
			},
			{
				id: "distance",
				t: "نزدیک‌ترین",
				d: "اولویت فروشگاه حضوری نزدیک"
			},
			{
				id: "speed",
				t: "سریع‌ترین",
				d: "موجودی فوری یا ارسال کوتاه"
			}
		].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setSort(r.id),
			className: cn("w-full rounded-md bg-background px-3 py-3 text-right", sort === r.id && "ring-1 ring-primary"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: r.t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-xs text-muted",
				children: r.d
			})]
		}, r.id))
	});
}
function MoreFilters() {
	const filters = useApp((s) => s.filters);
	const setOrigin = useApp((s) => s.setOrigin);
	const toggle = useApp((s) => s.toggleFilter);
	const reset = useApp((s) => s.resetFilters);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 pt-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-medium text-muted",
				children: "مبدأ قطعه"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1.5",
				children: [
					["all", "همه"],
					["oem", "اصلی"],
					["aftermarket", "طرح"],
					["unknown", "نامشخص"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOrigin(id),
					className: cn("h-9 rounded-full px-3 text-xs", filters.origin === id ? "bg-primary text-primary-foreground" : "bg-background"),
					children: label
				}, id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center justify-between rounded-md bg-background px-3 py-3 text-sm",
				children: ["پنهان کردن آگهی‌ها", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: filters.hideAds,
					onChange: () => toggle("hideAds"),
					className: "size-4 accent-primary"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center justify-between rounded-md bg-background px-3 py-3 text-sm",
				children: ["فقط سازگاری تأییدشده", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: filters.confirmedOnly,
					onChange: () => toggle("confirmedOnly"),
					className: "size-4 accent-primary"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: reset,
				className: "h-10 w-full text-sm text-muted",
				children: "بازنشانی فیلترها"
			})
		]
	});
}
function OfferDetail() {
	const offer = useActiveOffer();
	const vehicle = useApp((s) => s.vehicle);
	const openSheet = useApp((s) => s.openSheet);
	const fit = useApp((s) => s.confirmedIds.includes(offer.id)) ? "confirmed" : fitmentFor(offer, vehicle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-2 pb-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-md bg-background",
				children: offer.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: offer.image,
					alt: "",
					className: "aspect-square w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex aspect-square items-center justify-center text-sm text-muted",
					children: "تصویر موجود نیست"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-base font-semibold",
				children: offer.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted",
				children: [offer.brand, offer.oemCode ? ` · ${offer.oemCode}` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xl font-semibold tabular-nums",
				children: faPrice(offer.price)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: fitmentLabel(fit, vehicle)
			}),
			fit !== "confirmed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => openSheet("fitment", offer.id),
				className: "mt-2 h-10 w-full rounded-md bg-caution-fg text-sm font-medium text-caution",
				children: "تأیید سازگاری با خودروی من"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-md bg-background p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: offer.seller.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 flex items-center gap-1 text-xs text-muted",
						children: [offer.seller.rating != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-caution text-caution" }), faRating(offer.seller.rating)] }), offer.seller.distanceKm != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }), faKm(offer.seller.distanceKm)] })]
					}),
					offer.seller.torobGuarantee && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 inline-flex items-center gap-1 text-xs text-trust",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), "ضمانت ترب فعال است"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-2 gap-2",
				children: [
					offer.actions.includes("buy") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => openSheet("buy", offer.id),
						className: "h-12 rounded-md bg-primary text-sm font-medium text-primary-foreground",
						children: "خرید اینترنتی"
					}),
					offer.actions.includes("call") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => openSheet("call", offer.id),
						className: "h-12 rounded-md bg-foreground text-sm font-medium text-card",
						children: "تماس تلفنی"
					}),
					offer.actions.includes("nav") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => openSheet("map", offer.id),
						className: "h-12 rounded-md bg-background text-sm font-medium",
						children: "مسیریابی"
					}),
					offer.actions.includes("chat") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => openSheet("chat", offer.id),
						className: "h-12 rounded-md bg-background text-sm font-medium",
						children: "پیام‌رسان"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => openSheet("score", offer.id),
				className: "mt-3 h-10 w-full text-xs text-muted",
				children: "جزئیات امتیاز «بهترین»"
			})
		]
	});
}
function MapPane() {
	const offer = useActiveOffer();
	const showToast = useApp((s) => s.showToast);
	const close = useApp((s) => s.closeSheet);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-48 overflow-hidden rounded-md bg-[#d7e4d4]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 320 180",
					className: "size-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M0 90h320",
							stroke: "#c4d0c2",
							strokeWidth: "8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M40 0v180",
							stroke: "#c4d0c2",
							strokeWidth: "6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M180 0v180",
							stroke: "#b9c8b8",
							strokeWidth: "10"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M0 40h320",
							stroke: "#c9d5c8",
							strokeWidth: "5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "210",
							cy: "88",
							r: "9",
							fill: "#E91E33"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "210",
							cy: "88",
							r: "16",
							fill: "none",
							stroke: "#E91E33",
							strokeWidth: "2",
							opacity: "0.4"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-2 right-2 rounded-sm bg-card/95 px-2 py-1 text-[11px]",
					children: [
						offer.seller.neighborhood,
						" ·",
						" ",
						offer.seller.distanceKm != null ? faKm(offer.seller.distanceKm) : "فاصله نامشخص"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm font-medium",
				children: offer.seller.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: offer.seller.hours ? `ساعت کار ${offer.seller.hours}` : "ساعت کار نامشخص"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => {
					showToast("مسیر تا فروشگاه روی نقشه باز شد");
					close();
				},
				className: "mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-medium text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-4" }), "شروع مسیریابی"]
			})
		]
	});
}
function CallPane() {
	const offer = useActiveOffer();
	const showToast = useApp((s) => s.showToast);
	const close = useApp((s) => s.closeSheet);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-2 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex size-14 items-center justify-center rounded-full bg-trust-fg text-trust",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm font-medium",
				children: offer.seller.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-semibold tabular-nums",
				dir: "ltr",
				children: offer.seller.phone ?? "شماره ثبت نشده"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-muted",
				children: [offer.seller.hours ?? "ساعت پاسخگویی نامشخص", offer.seller.responseMins ? ` · میانگین پاسخ ${faNum(offer.seller.responseMins)} دقیقه` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: !offer.seller.phone,
				onClick: () => {
					showToast("در حال تماس با فروشنده");
					close();
				},
				className: "mt-5 h-12 w-full rounded-md bg-trust text-sm font-medium text-primary-foreground disabled:opacity-40",
				children: "تماس حالا"
			})
		]
	});
}
function ChatPane() {
	const offer = useActiveOffer();
	const vehicle = useApp((s) => s.vehicle);
	const showToast = useApp((s) => s.showToast);
	const close = useApp((s) => s.closeSheet);
	const [text, setText] = (0, import_react.useState)(`سلام، دیسک صفحه برای ${vehicle.make} ${vehicle.model} ${vehicle.trim} موجود است؟`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-md bg-background p-3 text-xs text-muted",
				children: "پیام با سازگاری خودرو از قبل پر می‌شود تا فروشنده حدس نزند."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: text,
				onChange: (e) => setText(e.target.value),
				className: "mt-3 h-28 w-full rounded-md bg-background p-3 text-sm outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					showToast("پیام برای فروشنده ارسال شد");
					close();
				},
				className: "mt-3 h-12 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground",
				children: "ارسال پیام"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-center text-[11px] text-subtle",
				children: offer.seller.name
			})
		]
	});
}
function BuyPane() {
	const offer = useActiveOffer();
	const showToast = useApp((s) => s.showToast);
	const close = useApp((s) => s.closeSheet);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: offer.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-lg font-semibold tabular-nums",
				children: faPrice(offer.price)
			}),
			offer.seller.hasInstallments && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 rounded-md bg-trust-fg px-3 py-2 text-xs text-trust",
				children: "امکان خرید قسطی از اعتبار ترب‌پی"
			}),
			offer.seller.torobGuarantee && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 flex items-center gap-1 text-xs text-trust",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), "شامل ضمانت ترب"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					showToast("سفارش با موفقیت ثبت شد");
					close();
				},
				className: "mt-5 h-12 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground",
				children: "تأیید و ادامه خرید"
			})
		]
	});
}
function CameraPane() {
	const setQuery = useApp((s) => s.setQuery);
	const showToast = useApp((s) => s.showToast);
	const close = useApp((s) => s.closeSheet);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-md bg-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/parts/disc.jpg",
					alt: "",
					className: "h-52 w-full object-cover opacity-80"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-8 rounded-md border border-card/80" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm",
				children: "قطعه به‌عنوان دیسک کلاچ پژو ۲۰۶ تشخیص داده شد."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: "کد فنی پیشنهادی: ۸۲۶۲۱۱"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					setQuery("دیسک صفحه ۲۰۶ تیپ ۵");
					showToast("پژو ۲۰۶ تیپ ۵ در گاراژ ذخیره شد");
					close();
				},
				className: "mt-4 h-12 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground",
				children: "دیدن پیشنهادها"
			})
		]
	});
}
function VoicePane() {
	const setQuery = useApp((s) => s.setQuery);
	const showToast = useApp((s) => s.showToast);
	const close = useApp((s) => s.closeSheet);
	const [listening, setListening] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const t = window.setTimeout(() => setListening(false), 1600);
		return () => window.clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-7" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm font-medium",
				children: listening ? "در حال شنیدن…" : "دیسک صفحه ۲۰۶ تیپ ۵"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-4 flex h-8 items-end justify-center gap-1",
				children: [
					8,
					16,
					24,
					12,
					20,
					10,
					18
				].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-1 rounded-full bg-primary",
					style: { height: listening ? h : 6 }
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					setQuery("دیسک صفحه ۲۰۶ تیپ ۵");
					showToast("پژو ۲۰۶ تیپ ۵ در گاراژ ذخیره شد");
					close();
				},
				className: "mt-5 h-12 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground",
				children: "جستجو با این عبارت"
			})
		]
	});
}
function FitmentPane() {
	const offer = useActiveOffer();
	const confirmFitment = useApp((s) => s.confirmFitment);
	const showToast = useApp((s) => s.showToast);
	const close = useApp((s) => s.closeSheet);
	const vehicle = useApp((s) => s.vehicle);
	const [yearOk, setYearOk] = (0, import_react.useState)(true);
	const [engineOk, setEngineOk] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "داده سازگاری این آگهی ناقص است. با سه سؤال کوتاه می‌توانید خودتان تأیید کنید."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 flex items-center justify-between rounded-md bg-background px-3 py-3 text-sm",
				children: [
					"سال ساخت ",
					vehicle.year,
					" است",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: yearOk,
						onChange: (e) => setYearOk(e.target.checked),
						className: "size-4 accent-primary"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-2 flex items-center justify-between rounded-md bg-background px-3 py-3 text-sm",
				children: [
					"موتور ",
					vehicle.engine,
					" است",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: engineOk,
						onChange: (e) => setEngineOk(e.target.checked),
						className: "size-4 accent-primary"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: !yearOk || !engineOk,
				onClick: () => {
					confirmFitment(offer.id);
					showToast("سازگاری برای این پیشنهاد تأیید شد");
					close();
				},
				className: "mt-4 h-12 w-full rounded-md bg-trust text-sm font-medium text-primary-foreground disabled:opacity-40",
				children: "تأیید سازگاری"
			})
		]
	});
}
function ScorePane() {
	const b = scoreBreakdown(useActiveOffer(), useApp((s) => s.vehicle), OFFERS);
	const rows = [
		{
			t: "قیمت",
			v: b.price
		},
		{
			t: "نزدیکی",
			v: b.proximity
		},
		{
			t: "امتیاز فروشنده",
			v: b.rating
		},
		{
			t: "سرعت تأمین",
			v: b.speed
		},
		{
			t: "ضمانت ترب",
			v: b.guarantee
		},
		{
			t: "سازگاری",
			v: b.fitment
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 pt-2",
		children: [rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.t }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums",
				children: [faNum(Math.round(r.v * 100)), "٪"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 h-1.5 overflow-hidden rounded-full bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full bg-foreground",
				style: { width: `${Math.round(r.v * 100)}%` }
			})
		})] }, r.t)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: "امتیاز ترکیبی پیش‌فرض «بهترین» است و وزن‌ها شفاف نمایش داده می‌شوند تا رتبه‌بندی جعبه سیاه نباشد."
		})]
	});
}
function DesignNotes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 pt-1 text-sm leading-relaxed",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold",
				children: "تشخیص مسئله"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted",
				children: "PLP فعلی کالا‌محور است و فروشنده‌ها را در یک کارت ادغام می‌کند. در لوازم یدکی داده ادغام‌شده ناقص است؛ کاربر قطعه سازگار از فروشنده قابل اعتماد می‌خواهد، نه برند تجمیع‌شده."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold",
				children: "معماری"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted",
				children: "هیبرید فروشنده‌محور: هر کارت یک پیشنهاد است (قیمت + مسافت + اعتماد + اقدام). گاراژ، فیلتر فاصله و نشان ضمانت، تصمیم را روی کارت تمام می‌کنند."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold",
				children: "امکان‌سنجی داده"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-1 list-disc pr-4 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "سازگاری سه‌حالته: تأیید، حدسی، نامشخص — هیچ ردیفی به‌خاطر نقص متادیتا حذف نمی‌شود." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "عکس فروشنده از کاتالوگ جدا شده تا تقلبی بودن تصویر پنهان نماند." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "فاصله null برای آنلاین؛ موقعیت سه‌لایه GPS / دستی / IP." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "رتبه «بهترین» روی فیلدهای موجود نرمال می‌شود، نه داده خیالی." })
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold",
				children: "داوری محصول"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted",
				children: "چهار اقدام تبدیل (خرید، تماس، مسیر، پیام) روی کارت است. موفقیت طرح یعنی کاهش مسیر تا تماس یا خرید، نه زیبایی شبکه دوتایی کالا."
			})] })
		]
	});
}
function DesignLab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "hidden w-[340px] shrink-0 flex-col justify-center py-4 text-right lg:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-card/45",
				children: "نظام طراحی · لوازم یدکی"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-2xl font-semibold leading-snug text-card",
				children: "ترب قطعات"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-card/70",
				children: "از شبکه کالامحور به پیشنهاد فروشنده‌محور. سازگاری خودرو، اعتماد و اقدام تبدیل روی خود کارت تمام می‌شود."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 space-y-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[11px] text-card/45",
						children: "رنگ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "mt-2 flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-7 rounded-full bg-primary",
								title: "#E91E33"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-7 rounded-full bg-card",
								title: "surface"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-7 rounded-full bg-muted",
								title: "slate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-7 rounded-full bg-trust",
								title: "trust"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-7 rounded-full bg-foreground ring-1 ring-card/20",
								title: "ink"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[11px] text-card/45",
						children: "تایپ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-card/80",
						children: "Vazirmatn · وزن ۴۰۰–۷۰۰ · RTL"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[11px] text-card/45",
						children: "فضا"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-card/80",
						children: "شبکه ۸تایی · کارت ۱۸px · هدف لمس ۴۴px"
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-8 space-y-3 text-sm text-card/75",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "۱. "
					}), "گاراژ هوشمند سازگاری را از جستجو به خاطر می‌سپارد."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "۲. "
					}), "کارت پیشنهاد: عکس واقعی، مسافت، ضمانت، قیمت."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "۳. "
					}), "چهار اقدام: خرید، تماس، مسیر، پیام."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "۴. "
					}), "داده ناقص پنهان نمی‌شود؛ با نشان زرد/خاکستری درخواست تأیید می‌کند."] })
				]
			})
		]
	});
}
var TABS = [
	{
		id: "search",
		label: "جستجو",
		icon: Search
	},
	{
		id: "categories",
		label: "دسته‌بندی",
		icon: Grid2x2
	},
	{
		id: "garage",
		label: "گاراژ",
		icon: Car
	},
	{
		id: "me",
		label: "ترب من",
		icon: User
	}
];
function PhoneApp() {
	const tab = useApp((s) => s.tab);
	const setTab = useApp((s) => s.setTab);
	const toast = useApp((s) => s.toast);
	const dismissToast = useApp((s) => s.dismissToast);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full min-h-0 flex-col bg-background text-foreground",
		dir: "rtl",
		children: [
			tab === "search" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlpScreen, {}),
			tab === "categories" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoriesScreen, {}),
			tab === "garage" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GarageScreen, {}),
			tab === "me" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileScreen, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "absolute inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-4",
					children: TABS.map((t) => {
						const Icon = t.icon;
						const on = tab === t.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab(t.id),
							className: cn("flex h-[3.75rem] flex-col items-center justify-center gap-0.5 text-[11px]", on ? "text-primary" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: on ? 2.4 : 2
							}), t.label]
						}, t.id);
					})
				})
			}),
			toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: dismissToast,
				className: "absolute inset-x-3 bottom-20 z-40 rounded-md bg-foreground px-3 py-2.5 text-right text-xs leading-relaxed text-card shadow-[var(--shadow-float)]",
				children: toast.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSheets, {})
		]
	});
}
function TorobApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-studio text-card",
		dir: "ltr",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-dvh max-w-[1180px] justify-center gap-10 px-4 lg:items-stretch",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignLab, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-dvh w-full max-w-[430px] flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden shrink-0 pb-3 pt-4 lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-wide text-card/50",
						children: "نمونه تعاملی · ترب"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-lg font-semibold",
						children: "تصمیم خرید قطعه در یک نگاه"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1 overflow-hidden bg-background text-foreground lg:rounded-2xl lg:shadow-[var(--shadow-float)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneApp, {})
				})]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TorobApp, {});
}
//#endregion
export { Home as component };
