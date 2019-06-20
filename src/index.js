import { useEffect, useRef, useState } from 'react';

const useSmooth = (value, delay = 10) => {
  const [smoothValue, setSmoothValue] = useState(value);

  const interval = useRef(null);

  useEffect(() => {
    clearInterval(interval.current);

    const from = smoothValue;
    const to = value;

    if (from > to) {
      setSmoothValue(to);
    } else {
      let current = from;
      interval.current = setInterval(() => {
        if (current >= to) {
          clearInterval(interval.current);
        } else {
          setSmoothValue(prev => prev + 1);
          current += 1;
        }
      }, delay);
    }
  }, [value]);

  return smoothValue;
};

export default useSmooth;
