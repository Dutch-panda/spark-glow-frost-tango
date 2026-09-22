export type Fitment = "confirmed" | "inferred" | "unknown" | "mismatch";
export type PhotoKind = "seller" | "catalog" | "missing";
export type Channel = "physical" | "online" | "hybrid";
export type Origin = "oem" | "aftermarket" | "unknown";
export type Stock = "now" | "limited" | "unknown" | "out";
export type OfferAction = "buy" | "call" | "nav" | "chat";
export type SortKey = "best" | "price" | "distance" | "speed";
export type AppTab = "search" | "categories" | "garage" | "me";
export type SheetName =
  | "garage"
  | "location"
  | "sort"
  | "filters"
  | "detail"
  | "map"
  | "call"
  | "chat"
  | "buy"
  | "camera"
  | "voice"
  | "design"
  | "fitment"
  | "score";

export type Vehicle = {
  id: string;
  make: string;
  model: string;
  trim: string;
  year: string;
  engine: string;
};

export type GeoLocation = {
  id: string;
  label: string;
  city: string;
  neighborhood: string;
  source: "gps" | "manual" | "ip";
};

export type Offer = {
  id: string;
  title: string;
  brand: string;
  origin: Origin;
  oemCode?: string;
  price: number;
  image: string | null;
  photoKind: PhotoKind;
  vehicleIds: string[];
  seller: {
    id: string;
    name: string;
    rating: number | null;
    reviewCount: number;
    neighborhood: string;
    city: string;
    distanceKm: number | null;
    channel: Channel;
    hours?: string;
    phone?: string;
    hasInstallments: boolean;
    torobGuarantee: boolean;
    stock: Stock;
    responseMins?: number;
  };
  isAd?: boolean;
  deliveryHours?: number | null;
  actions: OfferAction[];
};

export type Filters = {
  nearby: boolean;
  inStock: boolean;
  guarantee: boolean;
  installments: boolean;
  origin: "all" | Origin;
  confirmedOnly: boolean;
  hideAds: boolean;
};
