import { useState } from 'react';


export const useLocalStorage = (key, initialValue) => {
    const initialConfig = JSON.parse(localStorage.getItem(key)) || initialValue;
    const [storedValue, setStoredValue] = useState(initialConfig);
  
    const setValue = value => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    };
  
    return [storedValue, setValue];
  };