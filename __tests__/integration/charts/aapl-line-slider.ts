import { format } from 'fecha';
import { G2Spec } from '../../../src';

export function aaplLineSlider(): G2Spec {
  return {
    type: 'line',
    paddingLeft: 80,
    data: {
      type: 'fetch',
      value: 'data/aapl.csv',
    },
    encode: {
      x: (d) => new Date(d.date),
      y: 'close',
    },
    axis: {
      x: { title: false, size: 28 },
      y: { title: false, size: 36 },
    },
    slider: {
      x: {
        labelFormatter: (d) => format(d, 'YYYY/M/D'),
      },
      y: {
        labelFormatter: '~s',
      },
    },
  };
}

aaplLineSlider.maxError = 100;
