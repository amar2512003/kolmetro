import { useEffect, useState } from 'react';

// Lines finish drawing at 3.1s. At 3.3s the wordmark text pops in bright,
// then a colored flood wipe (starting 0.35s later, 1.7s long) expands out
// from behind it until it covers the whole screen — finishing at ~5.35s —
// so the app takes over right as the screen is fully covered, reading as
// one continuous transition into the next window.
const INTRO_DURATION_MS = 4000;

// Returns { introVisible, appVisible } — appVisible flips true once the
// intro has had its full run, so the main content (and anything that
// depends on it, like map initialization) can mount only then.
export function useIntroTimer() {
  const [introVisible, setIntroVisible] = useState(true);
  const [appVisible, setAppVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIntroVisible(false);
      setAppVisible(true);
    }, INTRO_DURATION_MS);
    return () => clearTimeout(id);
  }, []);

  return { introVisible, appVisible };
}