import React from "react";
import confetti from "canvas-confetti";
import { Button as ButtonPrimitive } from "@/components/ui/button";

export const Button = () => {
  const handleClick = () => {
    confetti();
  };

  return (
    <ButtonPrimitive
      className="cursor-pointer bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
      onClick={handleClick}
    >
      <span>Click me</span>
    </ButtonPrimitive>
  );
};
