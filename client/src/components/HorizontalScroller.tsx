import { ReactNode, useRef } from "react";

type HorizontalScrollerProps = {
  children: ReactNode;
};

export default function HorizontalScroller({ children }: HorizontalScrollerProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
      >
        {children}
      </div>

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0b1220] to-transparent" />

      {/* Arrow */}
      <button
        onClick={() => scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" })}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100"
      >
        →
      </button>
    </div>
  );
}
