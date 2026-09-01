"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

export function ParallaxBlob({
  speed = 0.2,
  className,
  style,
}: {
  speed?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const sectionTop = el.parentElement?.getBoundingClientRect().top ?? 0;
    const initialOffset = window.scrollY + sectionTop;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const delta = (window.scrollY - initialOffset) * speed;
        el.style.transform = `translateY(${delta}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return <div ref={ref} className={className} style={style} aria-hidden="true" />;
}
