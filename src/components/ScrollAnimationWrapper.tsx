import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "blur-in";
  delay?: number;
  duration?: number;
  threshold?: number;
}

const ScrollAnimationWrapper = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: ScrollAnimationWrapperProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const animationStyles = {
    "fade-up": {
      initial: "opacity-0 translate-y-10",
      animate: "opacity-100 translate-y-0",
    },
    "fade-down": {
      initial: "opacity-0 -translate-y-10",
      animate: "opacity-100 translate-y-0",
    },
    "fade-left": {
      initial: "opacity-0 translate-x-10",
      animate: "opacity-100 translate-x-0",
    },
    "fade-right": {
      initial: "opacity-0 -translate-x-10",
      animate: "opacity-100 translate-x-0",
    },
    "zoom-in": {
      initial: "opacity-0 scale-95",
      animate: "opacity-100 scale-100",
    },
    "blur-in": {
      initial: "opacity-0 blur-sm",
      animate: "opacity-100 blur-0",
    },
  };

  const { initial, animate } = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isVisible ? animate : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
