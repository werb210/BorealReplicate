import { ReactNode, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HorizontalScrollerProps = {
  children: ReactNode;
};

export default function HorizontalScroller({ children }: HorizontalScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir === "right" ? 400 : -400,
      behavior: "smooth",
    });
  };

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 opacity-0 transition hover:bg-black group-hover:opacity-100"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>

      <div ref={ref} className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory">
        {children}
      </div>

      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 opacity-0 transition hover:bg-black group-hover:opacity-100"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
