import React from "react";

interface PaginationProps {
  totalPages: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => void;
  className?: string;
  position?: "left" | "center" | "right";
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  itemsPerPage = 10,
  onPageChange,
  className,
  position = "left",
}) => {
  return (
    <div
      className={`flex items-center gap-5 ${position === "left" ? "mr-auto" : position === "center" ? "mx-auto" : "ml-auto"} ${className}`}
    >
      <button className="pagination-button" type="button">
        {"<"}
      </button>
      <ul className="flex items-center gap-2.5">
        <li>
          <button className="pagination-button is-active" type="button">
            1
          </button>
        </li>
        <li>
          <button className="pagination-button" type="button">
            2
          </button>
        </li>
      </ul>
      <button className="pagination-button" type="button">
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
