import { ReactNode, useRef } from "react";

type HorizontalScrollerProps = {
  children: ReactNode;
};

export default function HorizontalScroller({ children }: HorizontalScrollerProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative">
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory">
        {children}
      </div>
      <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/70">→</div>
    </div>
  );
}
