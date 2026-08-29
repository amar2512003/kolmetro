import { useEffect, useState } from 'react';
import { lineOrder } from '../data/lines/index.js';
import { computeLineStatus } from '../lib/scheduleStatus.js';

export function useLiveLineStatus() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  const statuses = lineOrder.map((lineKey) => ({
    lineKey,
    result: computeLineStatus(lineKey, now),
  }));

  return { now, statuses };
}
