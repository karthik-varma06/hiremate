import { useEffect, useState } from "react";

export function useTypewriter(text, speed = 40, delay = 500) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, speed);
    }, delay);

    return () => clearTimeout(start);
  }, [text]);

  return { displayed };
}
