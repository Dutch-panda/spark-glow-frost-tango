import { create } from "zustand";
import { LOCATIONS, OFFERS, SEARCH_QUERY, VEHICLES } from "./data";
import type {
  AppTab,
  Filters,
  GeoLocation,
  SheetName,
  SortKey,
  Vehicle,
} from "./types";

const defaultFilters = (): Filters => ({
  nearby: false,
  inStock: false,
  guarantee: false,
  installments: false,
  origin: "all",
  confirmedOnly: false,
  hideAds: false,
});

type Toast = { id: number; text: string } | null;

type AppState = {
  tab: AppTab;
  query: string;
  vehicle: Vehicle;
  location: GeoLocation;
  filters: Filters;
  sort: SortKey;
  sheet: SheetName | null;
  activeOfferId: string | null;
  savedIds: string[];
  confirmedIds: string[];
  garageNoteSeen: boolean;
  toast: Toast;
  chatSeed: string;
  setTab: (tab: AppTab) => void;
  setQuery: (q: string) => void;
  setVehicle: (v: Vehicle) => void;
  setLocation: (l: GeoLocation) => void;
  toggleFilter: (key: keyof Omit<Filters, "origin">) => void;
  setOrigin: (o: Filters["origin"]) => void;
  resetFilters: () => void;
  setSort: (s: SortKey) => void;
  openSheet: (sheet: SheetName, offerId?: string) => void;
  closeSheet: () => void;
  toggleSaved: (id: string) => void;
  confirmFitment: (id: string) => void;
  showToast: (text: string) => void;
  dismissToast: () => void;
};

let toastSeq = 1;

export const useApp = create<AppState>((set, get) => ({
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
  setTab: (tab) => set({ tab, sheet: null }),
  setQuery: (query) => set({ query, tab: "search" }),
  setVehicle: (vehicle) => set({ vehicle, sheet: null }),
  setLocation: (location) => set({ location, sheet: null }),
  toggleFilter: (key) =>
    set({ filters: { ...get().filters, [key]: !get().filters[key] } }),
  setOrigin: (origin) => set({ filters: { ...get().filters, origin } }),
  resetFilters: () => set({ filters: defaultFilters() }),
  setSort: (sort) => set({ sort, sheet: null }),
  openSheet: (sheet, offerId) =>
    set({
      sheet,
      activeOfferId: offerId ?? get().activeOfferId,
    }),
  closeSheet: () => set({ sheet: null }),
  toggleSaved: (id) =>
    set({
      savedIds: get().savedIds.includes(id)
        ? get().savedIds.filter((x) => x !== id)
        : [...get().savedIds, id],
    }),
  confirmFitment: (id) =>
    set({
      confirmedIds: get().confirmedIds.includes(id)
        ? get().confirmedIds
        : [...get().confirmedIds, id],
    }),
  showToast: (text) => {
    const id = toastSeq++;
    set({ toast: { id, text }, garageNoteSeen: true });
    window.setTimeout(() => {
      if (get().toast?.id === id) set({ toast: null });
    }, 4200);
  },
  dismissToast: () => set({ toast: null }),
}));

export function useActiveOffer() {
  const id = useApp((s) => s.activeOfferId);
  return OFFERS.find((o) => o.id === id) ?? null;
}
