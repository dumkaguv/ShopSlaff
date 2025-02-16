import React from "react";

import IconSearch from "/public/svg/icon-search.svg?react";
import IconClose from "/public/svg/icon-close.svg?react";

const Search: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [showIconClear, setShowIconClear] = React.useState(false);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentInputValue = event.target.value;
    setInputValue(currentInputValue);

    if (currentInputValue.length > 0) {
      setShowIconClear(true);
    } else {
      setShowIconClear(false);
    }
  };

  const onIconClearClick = () => {
    setInputValue("");
    setShowIconClear(false);
  };

  return (
    <div className="relative rounded-md bg-(--bg-color)">
      <IconSearch className="pointer-events-none absolute top-[50%] left-1 -translate-y-[50%] translate-x-[50%]" />
      <input
        onChange={(event) => onInputChange(event)}
        type="search"
        className="w-[450px] px-[10px] py-[7px] pl-8"
        placeholder="Search for anything..."
        value={inputValue}
      ></input>
      {showIconClear && (
        <IconClose
          onClick={onIconClearClick}
          className="absolute top-[50%] right-3 -translate-y-[50%] cursor-pointer"
        />
      )}
    </div>
  );
};

export default Search;
