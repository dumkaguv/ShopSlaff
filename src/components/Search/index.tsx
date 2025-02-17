import React from "react";

import useInput from "@/hooks/useInput";
import IconSearch from "/public/svg/icon-search.svg?react";
import IconClose from "/public/svg/icon-close.svg?react";
import SearchList from "@/components/SearchList";

const Search: React.FC = () => {
  const { inputValue, onInputChange, onIconClearClick, showIconClear, clearInput } =
    useInput("");

  return (
    <div className="max-w-[450px] relative rounded-t-md bg-(--bg-color)">
      <IconSearch className="pointer-events-none absolute top-5 left-1 -translate-y-[50%] translate-x-[50%]" />
      <input
        onChange={(event) => onInputChange(event)}
        type="search"
        className="relative w-[450px] px-[10px] py-[7px] pl-8"
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
