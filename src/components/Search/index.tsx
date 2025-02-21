import React from "react";

import useInput from "@/hooks/useInput";
import IconSearch from "/public/svg/icon-search.svg?react";
import IconClose from "/public/svg/icon-close.svg?react";
import SearchList from "@/components/SearchList";

interface SearchProps {
  className?: string;
}

const Search: React.FC<SearchProps> = ({ className }) => {
  const {
    inputValue,
    onInputChange,
    onIconClearClick,
    showIconClear,
    clearInput,
  } = useInput("");

  return (
    <div className={`relative w-fit rounded-t-md bg-(--bg-color)`}>
      <IconSearch className="pointer-events-none absolute top-5 left-1 -translate-y-[50%] translate-x-[50%]" />
      <input
        onChange={(event) => onInputChange(event)}
        type="search"
        className={`relative w-[450px] px-[10px] py-[7px] pl-8 max-xl:w-[400px] max-lg:w-[300px] max-md:w-[250px] max-sm:w-[200px] ${className}`}
        placeholder="Search for anything..."
        value={inputValue}
      />
      {showIconClear && (
        <IconClose
          onClick={onIconClearClick}
          className="absolute top-5 right-3 -translate-y-[50%] cursor-pointer"
        />
      )}
      <SearchList searchValue={inputValue} clearInput={clearInput} />
    </div>
  );
};

export default Search;
