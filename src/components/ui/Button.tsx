import React from "react";
import clsx from "clsx";
import { type ColorKeys, colors } from "../../tokens/colors";

type ButtonVariant = "solid" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorKeys;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  color = "primary",
  size = "md",
  variant = "solid",
  className,
  ...props
}) => {
  const baseStyle = "rounded font-semibold focus:outline-none";
  const colorStyle =
    variant === "solid"
      ? `bg-[${colors[color]}] text-white`
      : `border border-[${colors[color]}] text-[${colors[color]}]`;

  return (
    <button
      //clsxを使って動的にクラス名をつける
      className={clsx(baseStyle, sizeClasses[size], colorStyle, className)}
      {...props}
    />
  );
};
