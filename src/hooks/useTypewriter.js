import { useEffect, useState } from 'react';

// Reveals `text` one character at a time at `speed` ms/char.
// Returns { displayed, done }. Resets automatically if `text` changes
// (e.g. a language switch), so it always finishes on the current text.
export function useTypewriter(text, speed = 45) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(id);
  }, [text, speed]);

  return { displayed, done };
}