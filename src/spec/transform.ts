import { TransformComponent, Primitive } from '../runtime';
import { ChannelTypes } from './geometry';

export type Transform =
  | StackYTransform
  | DodgeXTransform
  | NormalizeYTransform
  | StackEnterTransform
  | JitterTransform
  | JitterXTransform
  | SymmetryYTransform
  | DiffYTransform
  | SelectTransform
  | SelectXTransform
  | SelectYTransform
  | GroupXTransform
  | GroupYTransform
  | GroupColorTransform
  | SortXTransform
  | SortYTransform
  | SortColorTransform
  | GroupTransform
  | PackTransform
  | BinXTransform
  | BinTransform
  | SampleTransform
  | FlexXTransform
  | FilterTransform;

export type TransformTypes =
  | 'dodgeX'
  | 'stackY'
  | 'normalizeY'
  | 'stackEnter'
  | 'jitter'
  | 'jitterX'
  | 'symmetryY'
  | 'diffY'
  | 'select'
  | 'selectY'
  | 'selectX'
  | 'groupX'
  | 'groupY'
  | 'group'
  | 'groupColor'
  | 'sortX'
  | 'sortColor'
  | 'sortY'
  | 'flexX'
  | 'pack'
  | 'sample'
  | 'filter'
  | TransformComponent;

export type TransformOrder =
  | 'value'
  | 'sum'
  | 'series'
  | 'maxIndex'
  | string[]
  | null
  | ((data: Record<string, Primitive>) => Primitive);

export type DodgeXTransform = {
  type?: 'dodgeX';
  groupBy?: string | string[];
  reverse?: boolean;
  orderBy?: TransformOrder;
  padding?: number;
};

export type StackYTransform = {
  type?: 'stackY';
  groupBy?: string | string[];
  reverse?: boolean;
  orderBy?: TransformOrder;
  y?: 'y' | 'y1';
  y1?: 'y' | 'y1';
  series?: boolean;
};

export type NormalizeYTransform = {
  type?: 'normalizeY';
  series?: boolean;
  groupBy?: string | string[];
  basis?:
    | 'deviation'
    | 'first'
    | 'last'
    | 'max'
    | 'mean'
    | 'median'
    | 'min'
    | 'sum';
};

export type JitterTransform = {
  type?: 'jitter';
  padding?: number;
  paddingX?: number;
  paddingY?: number;
  random?: () => number;
};

export type JitterXTransform = {
  type?: 'jitterX';
  padding?: number;
  random?: () => number;
};

export type StackEnterTransform = {
  type?: 'stackEnter';
  groupBy?: string[] | string;
  orderBy?: string;
  reverse?: boolean;
  duration?: number;
  reducer?: (I: number[], V: any[]) => any;
};

export type SymmetryYTransform = {
  type?: 'symmetryY';
  groupBy?: string | string[];
};

export type DiffYTransform = {
  type?: 'diffY';
  groupBy?: string | string[];
  series?: boolean;
};

export type Selector =
  | 'min'
  | 'max'
  | 'first'
  | 'last'
  | 'mean'
  | 'median'
  | ((I: number[], V: number[]) => number[]);

export type SelectTransform = {
  type?: 'select';
  groupBy?: string | string[];
} & { [key in ChannelTypes]?: Selector };

export type SelectXTransform = {
  type?: 'selectX';
  groupBy?: string | string[];
  selector?: Selector;
};

export type SelectYTransform = {
  type?: 'selectY';
  groupBy?: string | string[];
  selector?: Selector;
};

export type SortColorTransform = {
  type?: 'sortColor';
  reverse?: boolean;
  by?: string;
  slice?: number | [number, number];
  reducer?:
    | 'max'
    | 'min'
    | 'sum'
    | 'first'
    | 'last'
    | 'mean'
    | 'median'
    | ((I: number[], V: Primitive[]) => Primitive);
};

export type SortXTransform = {
  type?: 'sortX';
  reverse?: boolean;
  by?: string;
  slice?: number | [number, number];
  ordinal?: boolean;
  reducer?:
    | 'max'
    | 'min'
    | 'sum'
    | 'first'
    | 'last'
    | 'mean'
    | 'median'
    | ((I: number[], V: Primitive[]) => Primitive);
};

export type SortYTransform = {
  type?: 'sortY';
  reverse?: boolean;
  by?: string;
  slice?: number | [number, number];
  reducer?:
    | 'max'
    | 'min'
    | 'sum'
    | 'first'
    | 'last'
    | 'mean'
    | 'median'
    | ((I: number[], V: Primitive[]) => Primitive);
};

export type FlexXTransform = {
  type?: 'flexX';
  field?: string | ((d: any) => Primitive[]);
  channel?: string;
  reducer?: 'sum' | ((I: number[], V: Primitive[]) => Primitive);
};

export type PackTransform = {
  type?: 'pack';
};

export type Reducer =
  | 'mean'
  | 'max'
  | 'count'
  | 'min'
  | 'median'
  | 'sum'
  | 'first'
  | 'last'
  | ((I: number[], V: Primitive[]) => Primitive);

export type GroupXTransform = {
  type?: 'groupX';
} & { [key in ChannelTypes]?: Reducer };

export type GroupYTransform = {
  type?: 'groupY';
} & { [key in ChannelTypes]?: Reducer };

export type GroupColorTransform = {
  type?: 'groupColor';
} & { [key in ChannelTypes]?: Reducer };

export type GroupTransform = {
  type?: 'group';
} & { [key in ChannelTypes]?: Reducer };

export type BinXTransform = {
  type?: 'binX';
  thresholds?: number;
} & { [key in ChannelTypes]?: Reducer };

export type BinTransform = {
  type?: 'bin';
  thresholdsX?: number;
  thresholdsY?: number;
} & { [key in ChannelTypes]?: Reducer };

export type SampleTransform = {
  type?: 'sample';
  groupBy?: string | string[];
  thresholds?: number;
} & { [key in ChannelTypes]?: Reducer };

export type FilterTransform = {
  type?: 'filter';
} & {
  [key in ChannelTypes]?: any[] | ((v: Primitive) => boolean);
};
