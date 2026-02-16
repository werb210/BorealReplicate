import { ReactNode } from "react";

type HorizontalScrollerProps = {
  children: ReactNode;
};

export default function HorizontalScroller({ children }: HorizontalScrollerProps) {
  return (
    <div className="relative">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4">{children}</div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#020617] to-transparent" />
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-60">→</div>
    </div>
  );
}
