import { useTranslation } from '../../context/LanguageContext.jsx';
import styles from './IntroScreen.module.css';
import metroVideo from './metrooo.mp4';

export function IntroScreen({ visible }) {
  const { t } = useTranslation();

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden bg-black transition-opacity duration-1000 ease-in-out ${
        visible ? '' : 'opacity-0 pointer-events-none'
      }`}
    >
      <video
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
