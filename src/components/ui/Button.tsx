import React from "react";
import clsx from "clsx";

type ButtonVariant = "solid" | "outline";
type ButtonSize = "sm" | "md" | "lg";
type ButtonColor = "primary" | "secondary" | "danger" | "success";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-10 py-5 text-lg",
};
const solidColors: Record<ButtonColor, string> = {
  primary: "text-white bg-blue-500",
  secondary: "text-white bg-blue-700",
  danger: "text-white bg-red-500",
  success: "text-white bg-green-500",
};

const outlineColors: Record<ButtonColor, string> = {
  primary: "border border-blue-500 text-blue-500",
  secondary: "border border-blue-500 text-blue-500",
  danger: "border border-danger text-red-500",
  success: "border border-success text-green-500",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
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
    variant === "solid" ? solidColors[color] : outlineColors[color];

  return (
    <button
      //clsxを使って動的にクラス名をつける
      className={clsx(baseStyle, sizeClasses[size], colorStyle, className)}
      {...props}
    />
  );
};
