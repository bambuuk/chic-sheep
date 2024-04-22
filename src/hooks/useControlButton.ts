import { useRef } from "react";

interface UseControlButtonProps {
  type: "normal" | "large";
}

const useControlButton = ({ type }: UseControlButtonProps) => {
  const ref = useRef<HTMLImageElement>(null);

  const scaleStar = () => {
    if (ref.current) {
      ref.current.style.animation = `${
        type === "large" ? "largePulse" : "normal" ? "pulse" : "pulse"
      } 0.5s alternate`;
      setTimeout(() => {
        ref.current ? (ref.current.style.animation = "") : "";
      }, 500);
    }
  };
  return { ref, scaleStar };
};

export default useControlButton;
