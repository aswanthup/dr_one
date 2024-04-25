import { useState, useEffect } from 'react';

export const useDebounce = (callback, delay = 500) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      callback(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, callback]);

  return setValue;
};
