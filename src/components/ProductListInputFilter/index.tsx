import React from "react";

interface Props {
  placeholder?: string;
  type?: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductListInputFilter: React.FC<Props> = ({
  placeholder = "Search...",
  type = "text",
  className = "",
  value,
  onChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`rounded-md bg-(--bg-color) px-3 py-2 ${className}`}
      min={0}
      value={value}
      onChange={onChange}
    />
  );
};

export default ProductListInputFilter;
