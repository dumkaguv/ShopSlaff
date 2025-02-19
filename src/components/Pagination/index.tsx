import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
  className?: string;
  position?: "left" | "center" | "right";
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage = 1,
  onPageChange,
  className,
  position = "left",
}) => {
  if (!totalPages) {
    return null;
  }

  const isOutOfBounds = (nextPage: number) => {
    if (nextPage > totalPages || nextPage < 1) {
      return true;
    }

    return false;
  };

  const onChangePageClick = (currentPage: number, nextPage: number) => {
    if (isOutOfBounds(nextPage)) {
      return;
    }

    if (currentPage === nextPage) {
      return;
    }

    onPageChange(nextPage);
  };

  return (
    <div
      className={`flex items-center gap-5 ${position === "left" ? "justify-start" : position === "center" ? "justify-center" : "justify-end"} ${className}`}
    >
      <button
        className={`pagination-button ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
        type="button"
        onClick={() => onChangePageClick(currentPage, currentPage - 1)}
      >
        {"<"}
      </button>
      <ul className="flex items-center gap-2.5">
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i}>
            <button
              className={`pagination-button ${currentPage === i + 1 ? "is-active" : ""}`}
              type="button"
              onClick={() => {
                if (i + 1 !== currentPage) {
                  onChangePageClick(currentPage, i + 1);
                }
              }}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
      <button
        className={`pagination-button ${currentPage === totalPages ? "cursor-not-allowed" : ""}`}
        type="button"
        onClick={() => onChangePageClick(currentPage, currentPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
