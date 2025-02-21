import { ButtonHTMLAttributes, FC } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gray";
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  href?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  asLink = false,
  href = "",
  ...props
}) => {
  const baseStyles =
    "flex items-center w-fit rounded-[6px] font-semibold transition-all justify-center";
  const variantStyles = {
    primary:
      "bg-(--color-accent-light) text-white hover:bg-(--color-accent-hover)",
    secondary:
      "bg-(--color-accent-dark) text-white hover:bg-(--color-accent-hover)",
    gray: "bg-(--color-gray-1) text-(--color-gray-3) hover:bg-(--color-light) hover:text-(--color-black)",
  };
  const sizeStyles = {
    sm: "text-[14px]",
    md: "text-[15px] px-[20px] py-[9px] h-[38px]",
    lg: "text-[16px]",
  };

  if (asLink) {
    return (
      <Link
        to={href}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
