import { Car, Grid2x2, Search, User } from "lucide-react";
import { useApp } from "@/lib/store";
import { cn } from "@/lib/utils";
import { CategoriesScreen, PlpScreen } from "./plp-screen";
import { GarageScreen, ProfileScreen } from "./garage-profile";
import { AppSheets } from "./sheets";
import { DesignLab } from "./design-lab";
import type { AppTab } from "@/lib/types";

const TABS: { id: AppTab; label: string; icon: typeof Search }[] = [
  { id: "search", label: "جستجو", icon: Search },
  { id: "categories", label: "دسته‌بندی", icon: Grid2x2 },
  { id: "garage", label: "گاراژ", icon: Car },
  { id: "me", label: "ترب من", icon: User },
];

function PhoneApp() {
  const tab = useApp((s) => s.tab);
  const setTab = useApp((s) => s.setTab);
  const toast = useApp((s) => s.toast);
  const dismissToast = useApp((s) => s.dismissToast);

  return (
    <div className="relative flex h-full min-h-0 flex-col bg-background text-foreground" dir="rtl">
      {tab === "search" && <PlpScreen />}
      {tab === "categories" && <CategoriesScreen />}
      {tab === "garage" && <GarageScreen />}
      {tab === "me" && <ProfileScreen />}

      <nav className="absolute inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm">
        <div className="grid grid-cols-4">
          {TABS.map((t) => {
            const Icon = t.icon;
            const on = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "flex h-[3.75rem] flex-col items-center justify-center gap-0.5 text-[11px]",
                  on ? "text-primary" : "text-muted",
                )}
              >
                <Icon className="size-5" strokeWidth={on ? 2.4 : 2} />
                {t.label}
              </button>
            );
          })}
        </div>
      </nav>

      {toast && (
        <button
          type="button"
          onClick={dismissToast}
          className="absolute inset-x-3 bottom-20 z-40 rounded-md bg-foreground px-3 py-2.5 text-right text-xs leading-relaxed text-card shadow-[var(--shadow-float)]"
        >
          {toast.text}
        </button>
      )}

      <AppSheets />
    </div>
  );
}

export function TorobApp() {
  return (
    <div className="min-h-dvh bg-studio text-card" dir="ltr">
      <div className="mx-auto flex min-h-dvh max-w-[1180px] justify-center gap-10 px-4 lg:items-stretch">
        <DesignLab />
        <div className="flex h-dvh w-full max-w-[430px] flex-col">
          <div className="hidden shrink-0 pb-3 pt-4 lg:block">
            <p className="text-[11px] tracking-wide text-card/50">نمونه تعاملی · ترب</p>
            <h1 className="mt-1 text-lg font-semibold">تصمیم خرید قطعه در یک نگاه</h1>
          </div>
          <div className="min-h-0 flex-1 overflow-hidden bg-background text-foreground lg:rounded-2xl lg:shadow-[var(--shadow-float)]">
            <PhoneApp />
          </div>
        </div>
      </div>
    </div>
  );
}
