import { G2Spec, render } from '../../../src';
import { createDiv, mount } from '../../utils/dom';

describe('render', () => {
  it('render({...} renders interval chart with text annotation', () => {
    const chart = render<G2Spec>(
      {
        type: 'view',
        height: 300,
        data: [
          { genre: 'Sports', sold: 275 },
          { genre: 'Strategy', sold: 115 },
          { genre: 'Action', sold: 120 },
          { genre: 'Shooter', sold: 350 },
          { genre: 'Other', sold: 150 },
        ],
        children: [
          {
            type: 'interval',
            encode: {
              x: 'genre',
              y: 'sold',
              color: 'orange',
            },
          },
          {
            type: 'text',
            encode: {
              x: 'genre',
              y: 'sold',
              text: 'sold',
            },
            style: {
              textAlign: 'center',
              dy: -4,
              fill: 'black',
            },
          },
        ],
      },
      {},
    );

    mount(createDiv(), chart);
  });

  it('render({...} renders text annotation on specified point of line by filter transform.', () => {
    const chart = render<G2Spec>(
      {
        type: 'view',
        height: 300,
        data: [
          { genre: 'Sports', sold: 275 },
          { genre: 'Strategy', sold: 115 },
          { genre: 'Action', sold: 120 },
          { genre: 'Shooter', sold: 350 },
          { genre: 'Other', sold: 150 },
        ],
        children: [
          {
            type: 'line',
            encode: {
              x: 'genre',
              y: 'sold',
            },
          },
          {
            type: 'text',
            data: {
              transform: [
                {
                  type: 'filter',
                  callback: (d) => d.sold > 300,
                },
              ],
            },
            encode: {
              x: 'genre',
              y: 'sold',
              text: 'sold',
            },
            style: {
              fill: '#2C3542',
              fillOpacity: 0.65,
              textAlign: 'center',
              dy: -4,
              fontSize: 10,
              background: true,
              backgroundRadius: 2,
            },
          },
        ],
      },
      {},
    );

    mount(createDiv(), chart);
  });

  it('render({...} renders text annotation support custom text style.', () => {
    const { cos, sin, PI } = Math;
    const chart = render<G2Spec>(
      {
        type: 'view',
        height: 300,
        data: [
          { genre: 'Sports', sold: 275 },
          { genre: 'Strategy', sold: 115 },
          { genre: 'Action', sold: 120 },
          { genre: 'Shooter', sold: 350 },
          { genre: 'Other', sold: 150 },
        ],
        children: [
          {
            type: 'line',
            encode: {
              x: 'genre',
              y: 'sold',
            },
          },
          {
            type: 'text',
            data: {
              transform: [
                {
                  type: 'filter',
                  callback: (d) => d.sold > 300,
                },
              ],
            },
            encode: {
              x: 'genre',
              y: 'sold',
              text: 'sold',
            },
            style: {
              text: '本月销量最大值',
              wordWrap: true,
              wordWrapWidth: 46,
              fill: '#2C3542',
              fillOpacity: 0.65,
              textAlign: 'left',
              dy: 0,
              dx: 20,
              fontSize: 10,
              background: true,
              backgroundRadius: 2,
              startMarker: {
                fill: 'orange',
                fillOpacity: 1,
                size: 18,
                symbol: (x, y, r) => {
                  const path: any[] = [];
                  for (let i = 0; i < 5; i++) {
                    path.push([
                      i === 0 ? 'M' : 'L',
                      (cos(((18 + i * 72) * PI) / 180) * r) / 2 + x,
                      (-sin(((18 + i * 72) * PI) / 180) * r) / 2 + y,
                    ]);
                    path.push([
                      'L',
                      (cos(((54 + i * 72) * PI) / 180) * r) / 4 + x,
                      (-sin(((54 + i * 72) * PI) / 180) * r) / 4 + y,
                    ]);
                  }
                  path.push(['Z']);
                  return path;
                },
              },
              connector: true,
              connectorStroke: '#416180',
              connectorStrokeOpacity: 0.45,
            },
          },
        ],
      },
      {},
    );

    mount(createDiv(), chart);
  });

  it('render({...} renders text annotation with badge shape.', () => {
    const chart = render<G2Spec>(
      {
        type: 'view',
        height: 300,
        data: [
          { genre: 'Sports', sold: 275 },
          { genre: 'Strategy', sold: 115 },
          { genre: 'Action', sold: 120 },
          { genre: 'Shooter', sold: 350 },
          { genre: 'Other', sold: 150 },
        ],
        children: [
          {
            type: 'line',
            encode: {
              x: 'genre',
              y: 'sold',
            },
          },
          {
            type: 'text',
            data: [{ genre: 'Shooter', sold: 350 }],
            encode: {
              x: 'genre',
              y: 'sold',
              text: 'sold',
              shape: 'badge',
            },
            style: {
              textAlign: 'center',
              position: 'top-right',
              content: 'Top',
              size: 24,
              textStyle: {
                fontSize: 10,
                fill: '#fff',
              },
            },
          },
        ],
      },
      {},
    );

    mount(createDiv(), chart);
  });

  it('render({...} renders text annotation with badge shape.', () => {
    const chart = render<G2Spec>(
      {
        type: 'view',
        width: 640,
        data: {
          type: 'fetch',
          value:
            'https://gw.alipayobjects.com/os/antfincdn/jjAX4HPWB9/sales.json',
        },
        scale: {
          x: {
            nice: true,
            tickCount: 15,
            guide: { label: { autoHide: true } },
          },
          y: { guide: null },
          color: { guide: null },
        },
        children: [
          {
            type: 'line',
            encode: {
              x: (d) => new Date(d.date),
              y: 'sales',
              color: 'fruit',
            },
          },
          {
            type: 'text',
            encode: {
              x: (d) => new Date(d.date),
              y: 'sales',
              text: 'sales',
              color: 'fruit',
              shape: 'badge',
            },
            style: {
              size: 20,
            },
          },
        ],
      },
      {},
    );

    mount(createDiv(), chart);
  });

  it('render({...} renders text annotation with long text.', () => {
    const chart = render<G2Spec>({
      type: 'view',
      width: 640,
      data: {
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/antfincdn/ulQpndlrT%26/line.json',
      },
      scale: {
        x: { nice: true, tickCount: 15 },
        y: { guide: null },
      },
      children: [
        {
          type: 'line',
          encode: {
            x: (d) => new Date(d.date),
            y: 'value',
          },
        },
        {
          type: 'text',
          data: {
            transform: [
              {
                type: 'filter',
                callback: (d) =>
                  d.date === 'March 2008' || d.date === 'March 2019',
              },
            ],
          },
          encode: {
            x: (d) => new Date(d.date),
            y: 'value',
            text: (d) =>
              d.date === 'March 2019'
                ? 'The most visits were in March 2019 with 8.30M in total'
                : 'There was a drop in number of visits in early 2008 which have been due to The Greet Recession',
          },
          style: {
            fill: 'black',
            fontSize: 10,
            textAlign: 'right',
            textBaseline: 'middle',
            dy: 8,
            dx: -20,
            wordWrap: true,
            wordWrapWidth: 100,
            connector: true,
            connectorLineDash: [2, 1],
            background: true,
            backgroundFill: '#fff',
          },
        },
      ],
    });
    mount(createDiv(), chart);
  });

  it('render({...}) should render view with single annotation', () => {
    const chart = render<G2Spec>({
      type: 'layer',
      children: [
        {
          type: 'interval',
          coordinate: [{ type: 'theta', innerRadius: 0.5 }],
          scale: { color: { guide: null } },
          data: [
            { genre: 'Sports', sold: 275 },
            { genre: 'Strategy', sold: 115 },
            { genre: 'Action', sold: 120 },
            { genre: 'Shooter', sold: 350 },
            { genre: 'Other', sold: 150 },
          ],
          encode: {
            y: 'sold',
            color: 'genre',
          },
        },
        {
          type: 'text',
          data: [{ x: 0.5, y: 0.5, text: 'G2' }],
          scale: {
            x: { guide: null },
            y: { guide: null },
          },
          encode: {
            x: 'x',
            y: 'y',
            text: 'text',
            color: 'black',
          },
          style: {
            fontSize: 60,
            textBaseline: 'middle',
            fontWeight: 'bold',
          },
        },
      ],
    });
    mount(createDiv(), chart);
  });

  afterAll(() => {
    // unmountAll();
  });
});
