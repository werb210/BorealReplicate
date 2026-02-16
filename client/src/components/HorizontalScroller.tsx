import { ReactNode } from "react";

type HorizontalScrollerProps = {
  children: ReactNode;
};

export default function HorizontalScroller({ children }: HorizontalScrollerProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 opacity-60 animate-pulse">
        <svg width="28" height="28" fill="white" viewBox="0 0 28 28" aria-hidden="true">
          <path d="M8 4l8 10-8 10" />
        </svg>
      </div>
      <div className="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory pb-4">{children}</div>
    </div>
  );
}
