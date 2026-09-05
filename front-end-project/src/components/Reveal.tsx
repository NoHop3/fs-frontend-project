import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger, in milliseconds, applied once the element enters the viewport. */
  delay?: number;
  className?: string;
};

/** Fades and lifts its children into view once, on first scroll into the viewport. */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? delay + "ms" : "0ms" }}
      className={
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none " +
        (shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0") +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
}
