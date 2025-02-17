import React from "react";

const useInput = (initialValue = "") => {
  const [inputValue, setInputValue] = React.useState(initialValue);
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

  const clearInput = () => {
    setInputValue("");
    setShowIconClear(false);
  }

  return { inputValue, onInputChange, onIconClearClick, showIconClear, clearInput };
};

export default useInput;
