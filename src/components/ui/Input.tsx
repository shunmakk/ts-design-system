import React from "react";
import clsx from "clsx";

type inputVariant = "outline" | "solid";
type inputSize = "sm" | "md" | "lg";
type inputState = "default" | "error";

const variantClass: Record<inputVariant, string> = {
  solid: "border border-gray-300 bg-transparent focus:border-blue-500",
  outline:
    "bg-gray-100 border border-transparent focus:bg-white focus:border-blue-500",
};

const sizeClass: Record<inputSize, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const InputState: Record<inputState, string> = {
  default: "",
  error: "border-red-500",
};

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: inputVariant;
  size?: inputSize;
  state?: inputState;
  errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({
  variant = "outline",
  size = "md",
  state = "default",
  errorMessage,
  className,
  ...props
}) => {
  const baseStyle = "rounded font-semibold focus:outline-none";
  return (
    <div className="flex flex-col gap-3">
      <input
        //clsxを使って動的にクラス名をつける
        className={clsx(
          baseStyle,
          variantClass[variant],
          sizeClass[size],
          InputState[state],
          className
        )}
        {...props}
      />
      {errorMessage && (
        <span className="text-red-500 text-sm pl-2">{errorMessage}</span>
      )}
    </div>
  );
};
