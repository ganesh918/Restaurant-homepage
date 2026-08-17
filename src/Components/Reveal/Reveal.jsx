import { useReveal } from "../../hooks/useReveal";
import "./Reveal.css";

/**
 * Wraps any section/element to fade+slide in once it scrolls into view.
 * direction: "up" | "down" | "left" | "right" | "fade"
 * delay: ms, for staggering multiple Reveals
 */
const Reveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const [ref, isVisible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal reveal--${direction} ${isVisible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

export default Reveal;