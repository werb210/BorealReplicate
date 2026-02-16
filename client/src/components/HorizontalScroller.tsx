import { ReactNode, useRef } from "react";

type HorizontalScrollerProps = {
  children: ReactNode;
};

export default function HorizontalScroller({ children }: HorizontalScrollerProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {children}
      </div>

      {/* Arrow */}
      <button
        onClick={() => scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" })}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2"
      >
        →
      </button>
    </div>
  );
}
