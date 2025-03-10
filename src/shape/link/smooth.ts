import { Path } from '@antv/g';
import { path as d3path } from 'd3-path';
import { applyStyle, getShapeTheme } from '../utils';
import { select } from '../../utils/selection';
import { ShapeComponent as SC } from '../../runtime';

export type SmoothOptions = Record<string, any>;

/**
 * Connect 2 points with a smooth line, used in tree.
 */
export const Smooth: SC<SmoothOptions> = (options) => {
  const { ...style } = options;
  return (points, value, coordinate, theme) => {
    const { mark, shape, defaultShape } = value;
    const { stroke, ...shapeTheme } = getShapeTheme(
      theme,
      mark,
      shape,
      defaultShape,
    );
    const { color = stroke, transform } = value;
    const [from, to] = points;

    const path = d3path();
    path.moveTo(from[0], from[1]);
    path.bezierCurveTo(
      from[0] / 2 + to[0] / 2,
      from[1],
      from[0] / 2 + to[0] / 2,
      to[1],
      to[0],
      to[1],
    );

    return select(new Path())
      .call(applyStyle, shapeTheme)
      .style('d', path.toString())
      .style('stroke', color)
      .style('transform', transform)
      .call(applyStyle, style)
      .node();
  };
};

Smooth.props = {
  defaultEnterAnimation: 'fadeIn',
  defaultUpdateAnimation: 'morphing',
  defaultExitAnimation: 'fadeOut',
};
