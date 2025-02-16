import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "flex items-center w-fit rounded-[6px] font-semibold transition-all";
  const variantStyles = {
    primary:
      "bg-(--color-accent-light) text-white hover:bg-(--color-accent-hover)",
    secondary:
      "bg-(--color-accent-dark) text-white hover:bg-(--color-accent-hover)",
  };
  const sizeStyles = {
    sm: "text-[14px]",
    md: "text-[15px] px-[20px] py-[9px] h-[38px]",
    lg: "text-[16px]",
  };

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
