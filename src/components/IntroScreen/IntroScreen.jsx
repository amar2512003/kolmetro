import { useEffect, useRef } from 'react';
import { useTranslation } from '../../context/LanguageContext.jsx';
import styles from './IntroScreen.module.css';
import metroVideo from './metrooo.mp4';

export function IntroScreen({ visible, onSkip }) {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let retryTimer;
    let attempts = 0;
    const MAX_ATTEMPTS = 5;

    // iOS Safari checks the live `muted` DOM property before allowing
    // autoplay, but React only reflects the JSX `muted` attribute onto the
    // element unreliably for dynamically mounted <video> elements. Without
    // this, play() silently rejects on iOS and the native play button
    // shows instead of the video autoplaying.
    video.muted = true;
    video.defaultMuted = true;

    // autoPlay alone is unreliable on mobile Safari/Android WebView for a
    // video inserted dynamically by React. Explicitly request playback,
    // and if it doesn't take immediately, retry a few times with a short
    // backoff — some mobile browsers need the element to fully settle
    // before play() actually takes effect, even after loadedmetadata.
    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise
          .then(() => {
            attempts = 0;
          })
          .catch(() => {
            if (attempts < MAX_ATTEMPTS) {
              attempts += 1;
              retryTimer = setTimeout(tryPlay, 300 * attempts);
            }
          });
      }
    };

    tryPlay();
    video.addEventListener('loadedmetadata', tryPlay);
    video.addEventListener('canplay', tryPlay);

    return () => {
      clearTimeout(retryTimer);
      video.removeEventListener('loadedmetadata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden bg-black transition-opacity duration-1000 ease-in-out ${
        visible ? '' : 'opacity-0 pointer-events-none'
      }`}
    >
      <video
        ref={videoRef}
        className={styles.introVideo}
        src={metroVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={onSkip}
      />

      <div className={styles.introOverlay} />

      <div className={styles.introTextWrap}>
        <span className={styles.introText}>{t('appTitle')}</span>
      </div>
    </div>
  );
}