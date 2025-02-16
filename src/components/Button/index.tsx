import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  type="button",
  ...props
}) => {
  const baseStyles =
    "flex items-center w-fit px-[20px] h-[38px] py-[9px] rounded-[6px] font-semibold transition-all";
  const variantStyles = {
    primary:
      "bg-(--color-accent-light) text-white hover:bg-(--color-accent-hover)",
    secondary:
      "bg-(--color-accent-dark) text-white hover:bg-(--color-accent-hover)",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
