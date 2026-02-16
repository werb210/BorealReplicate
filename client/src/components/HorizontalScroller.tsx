import { ReactNode } from "react";

type HorizontalScrollerProps = {
  children: ReactNode;
};

export default function HorizontalScroller({ children }: HorizontalScrollerProps) {
  return (
    <div className="relative">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scroll-smooth">{children}</div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#020617] to-transparent" />
      <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-white opacity-60">→</div>
    </div>
  );
}
