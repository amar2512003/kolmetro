import { useEffect, useRef } from 'react';
import { useTranslation } from '../../context/LanguageContext.jsx';
import styles from './IntroScreen.module.css';
import metroVideo from './metrooo.mp4';

export function IntroScreen({ visible }) {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile browsers (iOS Safari, Android WebView) don't reliably honor
    // the autoplay attribute on video elements mounted via JS, so kick
    // playback explicitly once the element is ready.
    video.muted = true;
    const tryPlay = () => {
      video.play().catch(() => {});
    };
    tryPlay();
    video.addEventListener('loadedmetadata', tryPlay);
    return () => video.removeEventListener('loadedmetadata', tryPlay);
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
      />

      <div className={styles.introOverlay} />

      <div className={styles.introTextWrap}>
        <span className={styles.introText}>
          Kolkata Metro Guide
        </span>
      </div>
    </div>
  );
}
