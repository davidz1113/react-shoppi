import React from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = React.useState(() => {
    const valueLocalStorage = localStorage.getItem(key);
    return valueLocalStorage ? JSON.parse(valueLocalStorage) : initialValue;
  });

  const setLocalStorage = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return {value, setLocalStorage};
};

export { useLocalStorage };
