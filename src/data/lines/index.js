import { blueLine } from './blue.js';
import { greenLine } from './green.js';
import { orangeLine } from './orange.js';
import { yellowLine } from './yellow.js';
import { purpleLine } from './purple.js';
import { pinkLine } from './pink.js';

// Keyed the same way the old inline `metroData` object was, so lib/
// and components can do `metroData[lineKey].stations` unchanged.
export const metroData = {
  blue: blueLine,
  green: greenLine,
  orange: orangeLine,
  yellow: yellowLine,
  purple: purpleLine,
  pink: pinkLine,
};

// Order the Live Line Status grid renders in.
export const lineOrder = ['blue', 'green', 'orange', 'purple', 'yellow'];
