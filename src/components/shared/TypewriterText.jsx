import { useEffect } from 'react';
import { useTypewriter } from '../../hooks/useTypewriter.js';

// as: which tag to render (defaults to span, pass "h1" etc. for headings).
// onDone: optional callback fired once when typing finishes — used by the
// wizard steps to trigger the staggered reveal of everything below it.
export function TypewriterText({ text, speed = 45, className = '', onDone, as: Tag = 'span' }) {
  const { displayed, done } = useTypewriter(text, speed);

  useEffect(() => {
    if (done && onDone) onDone();
  }, [done, onDone]);

  return (
    <Tag className={className}>
      {displayed}
      <span
        aria-hidden="true"
        className="inline-block w-[3px] ml-1 -mb-1 h-[0.9em] bg-purple-400"
        style={{ animation: done ? 'none' : 'blink 0.9s steps(1) infinite', opacity: done ? 0 : 1 }}
      />
    </Tag>
  );
}