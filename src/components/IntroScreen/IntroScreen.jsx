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

    // The autoPlay attribute alone is unreliable on mobile Safari/Android
    // WebView for a video inserted dynamically by React — explicitly
    // request playback, and retry once metadata has actually loaded in
    // case the first attempt fired before the video was ready.
    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // Autoplay was blocked outright (e.g. device-level restriction) —
          // don't leave the user staring at a frozen first frame forever.
          onSkip?.();
        });
      }
    };

    tryPlay();
    video.addEventListener('loadedmetadata', tryPlay);
    return () => video.removeEventListener('loadedmetadata', tryPlay);
  }, [onSkip]);

  return (
    <div
      onClick={onSkip}
      className={`fixed inset-0 z-50 overflow-hidden bg-black transition-opacity duration-1000 ease-in-out cursor-pointer ${
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
        onEnded={onSkip}
      />

      <div className={styles.introOverlay} />

      <div className={styles.introTextWrap}>
        <span className={styles.introText}>{t('appTitle')}</span>
      </div>

      <p className={styles.introTapHint}>{t('tapToSkip')}</p>
    </div>
  );
}