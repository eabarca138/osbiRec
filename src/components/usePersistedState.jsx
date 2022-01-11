import { useState, useEffect, useRef } from "react";

const usePersistedState = (name, defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const nameRef = useRef(name);

  useEffect(() => {
    try {
      const storedValue = JSON.parse(localStorage.getItem(nameRef.current));
      if (storedValue !== null) setValue(storedValue);
      else localStorage.setItem(name, defaultValue);
    } catch {
      setValue(defaultValue);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(nameRef.current, JSON.stringify(value));
    } catch {}
  }, [value]);

  return [value, setValue];
};

export default usePersistedState;