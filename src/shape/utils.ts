import { Path as D3Path } from 'd3-path';
import { extent } from 'd3-array';
import { Coordinate } from '@antv/coord';
import { Linear } from '@antv/scale';
import { lowerFirst } from '@antv/util';
import { G2Theme, Primitive, Vector2 } from '../runtime';
import { isPolar, isTranspose } from '../utils/coordinate';
import { angle, angleWithQuadrant, dist, sub } from '../utils/vector';
import { Selection } from '../utils/selection';
import { indexOf } from '../utils/array';

type A = ['a' | 'A', number, number, number, number, number, number, number];
type C = ['c' | 'C', number, number, number, number, number, number];
type O = ['o' | 'O', number, number];
type H = ['h' | 'H', number];
type L = ['l' | 'L', number, number];
type M = ['m' | 'M', number, number];
type R = ['r' | 'R', number, number, number, number];
type Q = ['q' | 'Q', number, number, number, number];
type S = ['s' | 'S', number, number, number, number, number, number, number];
type T = ['t' | 'T', number, number];
type V = ['v' | 'V', number];
type U = ['u' | 'U', number, number, number];
type Z = ['z' | 'Z'];

export type PathCommand = A | C | O | H | L | M | R | Q | S | T | V | U | Z;

export function applyStyle(
  selection: Selection,
  style: Record<string, Primitive>,
) {
  for (const [key, value] of Object.entries(style)) {
    selection.style(key, value);
  }
}

/**
 * Draw polygon path with points.
 * @param path
 * @param points
 */
export function appendPolygon(path: D3Path, points: Vector2[]) {
  points.forEach((p, idx) =>
    idx === 0 ? path.moveTo(p[0], p[1]) : path.lineTo(p[0], p[1]),
  );
  path.closePath();
  return path;
}

export type ArrowOptions = {
  /**
   * Arrow size, can be a px number, or a percentage string. Default: '40%'
   */
  arrowSize?: number | string;
};

/**
 * Draw arrow between `from` and `to`.
 * @param from
 * @param to
 * @returns
 */
export function arrowPoints(
  from: Vector2,
  to: Vector2,
  options: ArrowOptions,
): [Vector2, Vector2] {
  const { arrowSize } = options;
  const size =
    typeof arrowSize === 'string'
      ? (+parseFloat(arrowSize) / 100) * dist(from, to)
      : arrowSize;
  // TODO Use config from style.
  // Default arrow rotate is 30°.
  const arrowAngle = Math.PI / 6;

  const angle = Math.atan2(to[1] - from[1], to[0] - from[0]);

  const arrowAngle1 = Math.PI / 2 - angle - arrowAngle;
  const arrow1: Vector2 = [
    to[0] - size * Math.sin(arrowAngle1),
    to[1] - size * Math.cos(arrowAngle1),
  ];

  const arrowAngle2 = angle - arrowAngle;
  const arrow2: Vector2 = [
    to[0] - size * Math.cos(arrowAngle2),
    to[1] - size * Math.sin(arrowAngle2),
  ];

  return [arrow1, arrow2];
}

/**
 * Draw arc by from -> to, with center and radius.
 * @param path
 * @param from
 * @param to
 * @param center
 * @param radius
 */
export function appendArc(
  path: D3Path,
  from: Vector2,
  to: Vector2,
  center: Vector2,
  radius: number,
) {
  const startAngle = angle(sub(center, from)) + Math.PI;
  const endAngle = angle(sub(center, to)) + Math.PI;

  path.arc(
    center[0],
    center[1],
    radius,
    startAngle,
    endAngle,
    endAngle - startAngle < 0,
  );

  return path;
}

/**
 * @todo Fix wrong key point.
 */
export function computeGradient(
  C: string[],
  X: number[],
  Y: number[],
  from: string | boolean = 'y',
  mode: 'between' | 'start' | 'end' = 'between',
): string {
  const P = from === 'y' || from === true ? Y : X;
  const theta = from === 'y' || from === true ? 90 : 0;
  const I = indexOf(P);
  const [min, max] = extent(I, (i) => P[i]);
  // This need to improve for non-uniform distributed colors.
  const p = new Linear({
    domain: [min, max],
    range: [0, 100],
  });

  const percentage = (i) => p.map(P[i]);

  const gradientMode = {
    // Interpolate the colors for this segment.
    between: (i: number) => `${C[i]} ${percentage(i)}%`,
    // Use the color of the start point as the color for this segment.
    start: (i: number) =>
      i === 0
        ? `${C[i]} ${percentage(i)}%`
        : `${C[i - 1]} ${percentage(i)}%, ${C[i]} ${percentage(i)}%`,
    // Use the color of the end point as the color for this segment.
    end: (i: number) =>
      i === C.length - 1
        ? `${C[i]} ${percentage(i)}%`
        : `${C[i]} ${percentage(i)}%, ${C[i + 1]} ${percentage(i)}%`,
  };

  const gradient = I.sort((a, b) => percentage(a) - percentage(b))
    .map(gradientMode[mode] || gradientMode['between'])
    .join(',');
  return `linear-gradient(${theta}deg, ${gradient})`;
}

export function reorder(points: Vector2[]): Vector2[] {
  const [p0, p1, p2, p3] = points;
  return [p3, p0, p1, p2];
}

export function getArcObject(
  coordinate: Coordinate,
  points: Vector2[],
  Y: [number, number],
) {
  const [p0, p1, , p3] = isTranspose(coordinate) ? reorder(points) : points;

  const [y, y1] = Y;
  const center = coordinate.getCenter() as Vector2;
  const a1 = angleWithQuadrant(sub(p0, center));
  const a2 = angleWithQuadrant(sub(p1, center));
  // There are two situations that a2 === a1:
  // 1. a1 - a2 = 0
  // 2. |a1 - a2| = Math.PI * 2
  // Distinguish them by y and y1:
  const a3 = a2 === a1 && y !== y1 ? a2 + Math.PI * 2 : a2;
  return {
    startAngle: a1,
    endAngle: a3 - a1 >= 0 ? a3 : Math.PI * 2 + a3,
    innerRadius: dist(p3, center),
    outerRadius: dist(p0, center),
  };
}

export function getShapeTheme(
  theme: G2Theme,
  mark: string,
  shape: string,
  defaultShape: string,
) {
  const { defaultColor } = theme;
  const markTheme = theme[mark] || {};

  return Object.assign(
    {},
    { fill: defaultColor, stroke: defaultColor },
    markTheme[shape] || markTheme[defaultShape],
  );
}

/**
 * Pick connectStyle from style.
 * @param style
 */
export function getConnectStyle(
  style: Record<string, any>,
): Record<string, any> {
  const PREFIX = 'connect';
  return Object.fromEntries(
    Object.entries(style)
      .filter(([key]) => key.startsWith(PREFIX))
      .map(([key, value]) => [
        lowerFirst(key.replace(PREFIX, '').trim()),
        value,
      ])
      .filter(([key]) => key !== undefined),
  );
}

export function toOpacityKey(options) {
  const { opacityAttribute = 'fill' } = options;
  return `${opacityAttribute}Opacity`;
}

export function getTransform(coordinate, value) {
  if (!isPolar(coordinate)) return '';
  const center = coordinate.getCenter() as Vector2;
  const { transform: suffix } = value;
  return `translate(${center[0]}, ${center[1]}) ${suffix || ''}`;
}
