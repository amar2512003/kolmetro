import { useCallback, useState } from 'react';

export function useGeolocation() {
  const [status, setStatus] = useState('idle'); // idle | locating | success | error
  const [position, setPosition] = useState(null);
  const [errorType, setErrorType] = useState(null); // 'not-supported' | 'denied'

  const locate = useCallback(() => {
    if (!navigator.geolocation) {
      setStatus('error');
      setErrorType('not-supported');
      return;
    }
    setStatus('locating');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
        setStatus('success');
      },
      () => {
        setStatus('error');
        setErrorType('denied');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  return { status, position, errorType, locate };
}
