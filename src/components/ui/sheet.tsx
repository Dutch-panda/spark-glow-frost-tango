import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  height?: "auto" | "full";
};

export function BottomSheet({ open, onClose, title, children, height = "auto" }: Props) {
  if (!open) return null;
  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end">
      <button
        type="button"
        aria-label="بستن"
        className="absolute inset-0 bg-ink/45"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-10 flex w-full flex-col rounded-t-2xl bg-card shadow-[var(--shadow-float)]",
          height === "full" ? "h-[92%]" : "max-h-[88%]",
        )}
      >
        <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-border" />
        {title ? (
          <h2 className="px-4 pt-3 pb-1 text-base font-semibold">{title}</h2>
        ) : (
          <h2 className="sr-only">پنل</h2>
        )}
        <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-6">{children}</div>
      </div>
    </div>
  );
}
