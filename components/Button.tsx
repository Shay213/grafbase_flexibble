import Image from "next/image";
import React, { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  type?: "button" | "submit";
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  bgColor?: string;
  textColor?: string;
}

const Button = ({
  title,
  bgColor,
  handleClick,
  isSubmitting,
  leftIcon,
  rightIcon,
  textColor,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      disabled={isSubmitting}
      className={`
        flexCenter gap-3 px-4 py-3 rounded-xl text-sm font-medium max-md:w-full
        ${isSubmitting ? "bg-black-100" : bgColor || "bg-primary-purple"}
        ${textColor || "text-white"} 
      `}
      onClick={handleClick}
    >
      {leftIcon && <Image src={leftIcon} width={14} height={14} alt="left" />}
      {title}
      {rightIcon && (
        <Image src={rightIcon} width={14} height={14} alt="right" />
      )}
    </button>
  );
};

export default Button;
