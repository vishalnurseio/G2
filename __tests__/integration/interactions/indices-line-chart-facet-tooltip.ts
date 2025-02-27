import { csv } from 'd3-fetch';
import { autoType } from 'd3-dsv';
import { G2Spec } from '../../../src';

export async function indicesLineChartFacetTooltip(): Promise<G2Spec> {
  const data = await csv('data/indices.csv', autoType);
  return {
    type: 'facetRect',
    height: 600,
    width: 700,
    paddingRight: 80,
    paddingBottom: 50,
    paddingLeft: 60,
    encode: { y: 'Symbol' },
    scale: { y: { paddingInner: 0.2 } },
    data,
    children: [
      {
        type: 'line',
        frame: false,
        scale: { y: { nice: true, facet: false } },
        axis: { y: { labelAutoRotate: false } },
        encode: {
          x: 'Date',
          y: 'Close',
          color: 'Symbol',
          key: 'Symbol',
          title: (d) => new Date(d.Date).toLocaleDateString(),
        },
      },
    ],
    interactions: [
      { type: 'tooltip', series: true, facet: true, crosshairs: true },
    ],
  };
}

indicesLineChartFacetTooltip.skip = true;
