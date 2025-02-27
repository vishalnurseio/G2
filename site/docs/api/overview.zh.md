---
title: 概览
order: 1
---

G2 是一个简洁的、渐进式的可视化语法。文档将按照下面的顺序去分别介绍每一个模块，你可以把它当做一个字典去搜索和查询。

## [Chart](/api/chart)

提供简洁的命令式 API，一句话生成一个图表。

## [Data](/api/data/overview)

介绍不同数据载入的方式和数据变换。

- [data.sort](/api/data/sort) - 对数据进行指定字段排序。
- [data.pick](/api/data/pick) - 从数据中挑选出部分字段组成新的数据。
- [data.rename](/api/data/rename) - 重命名数据中的一些字段。
- [data.fold](/api/data/fold) - 将多个字段打包成按照指定的 key value 组织形式。
- [data.filter](/api/data/filter) - 对数据进行指定条件的过滤。
- [data.subset](/api/data/subset) - 从原数据集中按照数据量、数据字段抽取数据子集。
- [data.map](/api/data/map) - 对数据进行过滤。
- [data.join](/api/data/join) - 类似 SQL 的方式，将两份数据连接到一起。
- [data.custom](/api/data/custom) - 使用自定义的方式对数据进行变换。

## Mark

介绍不同图形标记 mark 的配置和用法。

- [mark.interval](/api/mark/interval) - 通常用来绘制柱、条形图，饼图等相关图表。
- [mark.point](/api/mark/point) - 主要用于绘制散点图，利用点的粒度来分析数据的分布情况。
- [mark.line](/api/mark/line) - 根据一系列的点，绘制折线，通常用来绘制折线图。
- [mark.area](/api/mark/area) - 通常用来绘制我们常见的面积图，通过填充，可以更好突出趋势堆积信息。
- [mark.cell](/api/mark/cell) - 根据 x, y 将空间划分成一个子空间，然后进行可视化绘制，常见于一些方块图，如日历图、聚合热力图等。
- [mark.rect](/api/mark/rect) - 使用两组 x，两组 y 来定位一个矩形区域，常用于直方图、矩阵树图等。
- [mark.link](/api/mark/link) - 标记使用两个用 (x, y) 定位的点，绘制一条带方向的直线。通过指定 `x`，`y` 通道为长度为 2 的字段数组即可。
- [mark.vector](/api/mark/vector) - 用 `start`，`end` 两个点来表示一个向量，通常用于绘制具备向量含义的数据，比如风向量场等。
- [mark.polygon](/api/mark/polygon) - 利用多组 (x, y) 数据点，在画布中绘制闭合的多边形，通常结合一些社区布局算法使用。
- [mark.box](/api/mark/box) - 用来绘制箱线图，通常用来展示一组数据分布情况的统计图。
- [mark.boxplot](/api/mark/boxplot) - 用来绘制箱线图，并且内置数据的聚合操作。
- [mark.text](/api/mark/text) - 通过指定文本的样式通道，可以在画布上绘制和数据绑定的文本字符。
- [mark.image](/api/mark/image) - 利用 `src` 通道在画布上绘制图片。
- [mark.shape](/api/mark/shape) - 使用自定义函数灵活绘制自定义图形。
- [mark.lineX](/api/mark/linex) - 指定 `x` 通道来绘制垂直于 x 轴的辅助线，常用于绘制平均值或其他聚合数据辅助线。
- [mark.lineY](/api/mark/liney) - 指定 `y` 通道来绘制垂直于 y 轴的辅助线，常用于绘制平均值或其他聚合数据辅助线。
- [mark.range](/api/mark/range) - 使用一组 `x`(x1, x2) 和一组 `y`(y1, y2) 来定位一个矩形区域，常用于绘制高亮指定区域的辅助区域。
- [mark.rangeX](/api/mark/rangex) - 使用一组 `x`(x1, x2) 来定位一个垂直于 x 轴的矩形区域，常用于绘制高亮指定区域的辅助区域。
- [mark.rangeY](/api/mark/rangey) - 使用一组 `y`(y1, y2) 来定位一个垂直于 y 轴的矩形区域，常用于绘制高亮指定区域的辅助区域。
- [mark.wordcloud](/api/mark/wordcloud) - 绘制词云图。

## Transform

对视觉通道 encode 进行变换。

- [transform.bin](/api/transform/bin) - 对连续的 x 和 连续的 y 通道进行分箱，并且对通道根据指定的 reducer 进行聚合。
- [transform.binX](/api/transform/binx) - 对 x 通道进行分箱，如果希望对 y 通道进行分箱，使用 binX + transpose 坐标系。
- [transform.diffY](/api/transform/diffy) - 对 y 和 y1 通道求差集。
- [transform.dodgeX](/api/transform/dodgex) - 生成 series 通道值为 color 通道的值，根据 series 通道实现分组效果。
- [transform.flexX](/api/transform/flexx) - 根据指定通道设置 x 比例尺的 flex 属性，实现不等宽矩形的效果。
- [transform.group](/api/transform/group) - 对离散的 x 和 连续的 y 通道进行分组，并且对通道根据指定的 Reducer 进行聚合。
- [transform.groupColor](/api/transform/groupcolor) - 对离散的 color 通道进行分组，并且对通道根据指定的 Reducer 进行聚合。
- [transform.groupX](/api/transform/groupx) - 对离散的 x 通道进行分组，并且对通道根据指定的 Reducer 进行聚合。
- [transform.groupY](/api/transform/groupy) - 对离散的 y 通道进行分组，并且对通道根据指定的 Reducer 进行聚合。
- [transform.jitter](/api/transform/jitter) - 根据离散的 x 和 离散的 y 比例尺，生成 dy 和 dx 通道，实现在某个区域散开的效果。
- [transform.jitterX](/api/transform/jitterx) - 根据离散的 x 比例尺，生成 dx 通道，实现在某个区域的 x 方向散开的效果。
- [transform.normalizeY](/api/transform/normalizey) - 对 y 和 y1 通道根据指定的 basis 进行归一化处理。
- [transform.select](/api/transform/select) - 按照指定通道进行分组，根据指定通道和 selector 从每组选择出数据。
- [transform.selectX](/api/transform/selectx) - 按照指定通道进行分组，根据 x 通道和 selector 从每组选择出数据。
- [transform.selectY](/api/transform/selecty) - 按照指定的通道进行分组，根据 y 通道和 selector 从每组选择出数据。
- [transform.pack](/api/transform/pack) - 生成 transform 和 scale 属性，从而让图形在空间中紧凑排列。
- [transform.sample](/api/transform/sample) - 当数据量远大于屏幕像素的时候，开启一些内置的采样策略，提升图表绘制性能。
- [transform.sortColor](/api/transform/sortcolor) - 对离散的 color 比例尺的定义域根据指定通道排序。
- [transform.sortX](/api/transform/sortx) - 对离散的 x 比例尺的定义域根据指定通道排序。
- [transform.sortY](/api/transform/sorty) - 对离散的 y 比例尺的定义域根据指定通道排序。
- [transform.stackEnter](/api/transform/stackenter) - 对 enterDuration 和 enterDelay 通道进行堆叠，实现分组动画的效果。
- [transform.stackY](/api/transform/stacky) - 按照指定通道分组，对每组的 y 和 y1 通道进行堆叠，实现堆叠效果。
- [transform.symmetryY](/api/transform/symmetry) - 按照指定通道分组，给每组的 y 和 y1 通道添加偏移，实现对称效果。

## Scale

比例尺相关的介绍

- [scale.band](/api/scale/band) - 特殊的 [ordinal](/api/scale/ordinal) 比例尺，它的值域范围是一个连续的范围。
- [scale.linear](/api/scale/linear) - 针对连续数据，对数据进行连续映射的比例尺。
- [scale.sqrt](/api/scale/sqrt) - 指数固定为 `0.5` 的 `pow` 比例尺。
- [scale.pow](/api/scale/pow) - 类似于 `linear` 比例尺，但是映射函数为指数函数（exponential）。
- [scale.log](/api/scale/log) - 类似于 `linear` 比例尺，但是映射函数为对数函数（logarithmic）。
- [scale.ordinal](/api/scale/ordinal) - 将离散的数据映射到另外一个离散数据中。
- [scale.point](/api/scale/point) - 特殊 [band](/api/scale/band) 比例尺，固定配置 `bandWith = 0`。
- [scale.quantize](/api/scale/quantize) - 类似于 `threshold`，但是计算切片的方式是基于元素的数据值。
- [scale.quantile](/api/scale/quantile) - 类似于 `threshold`， 但是计算切片的方式是基于元素在数据中的索引。
- [scale.threshold](/api/scale/threshold) - 将连续的值域范围划分为多个切片，并将这些切片映射到一个离散的数据中。
- [scale.time](/api/scale/time) - 特殊的 [linear](/api/scale/linear) 比例尺，它的值域是一组有时间顺序的数据。

## Coordinate

坐标系相关的介绍。

- [coordinate.polar](/api/coordinate/polar) - 常用于绘制玫瑰图等。
- [coordinate.theta](/api/coordinate/theta) - 常用于绘制饼图等。
- [coordinate.radial](/api/coordinate/radial) - 常用于绘制玉珏图等。
- [coordinate.parallel](/api/coordinate/parallel) - 绘制平行坐标系。
- [coordinate.transpose](/api/coordinate/transpose) - 改变图表绘制方向。
- [coordinate.fisheye](/api/coordinate/fisheye) - 鱼眼坐标系。

视图复合相关的内容。

- [composition.spaceLayer](/api/composition/spacelayer) - 对空间不做任何划分，多个视图使用同一个空间区域，常用于视图的层叠。
- [composition.spaceFlex](/api/composition/spaceflex) - 使用类似 css flex 的布局方式来划分空间区域，常用于多图表对比的视图。
- [composition.facetRect](/api/composition/facetrect) - 用 row、column 字段维值对空间和数据进行划分，在各个子空间可视化数据片段。
- [composition.facetCircle](/api/composition/facetcircle) - 根据字段分片数据，利用圆形划分空间，然就进行各个分面的数据可视化。
- [composition.repeatMatrix](/api/composition/repeatmatrix) - 根据字段的数量对空间进行划分和可视化。
- [composition.timingKeyframe](/api/composition/timingkeyframe) - 在不同时间片之间播放不同的可视化视图帧。

## Component

图表组件相关的内容。

- [mark.axis](/api/component/axis) - 绘制坐标轴。
- [mark.legend](/api/component/legend) - 绘制图例。

## [Label](/api/label/overview)

绘制数据标签和标签属性的变换。

- [label.contrastReverse](/api/label/contrastreverse) - 标签颜色在图形背景上对比度低的情况下，从指定色板选择一个对比度最优的颜色。
- [label.overflowHide](/api/label/overflowhide) - 对于标签在图形上放置不下的时候，隐藏标签。
- [label.overlapDodgeY](/api/label/overlapdodgey) - 对位置碰撞的标签在 y 方向上进行调整，防止标签重叠。
- [label.overlapHide](/api/label/overlaphide) - 对位置碰撞的标签进行隐藏，默认保留前一个，隐藏后一个。 

## [Animation](/api/animation/overview)

动画相关的内容。

- [animation.fadeIn](/api/animation/fadein) - 渐现动画。
- [animation.fadeOut](/api/animation/fadeout) - 渐隐动画。
- [animation.growInX](/api/animation/growinx) - 容器沿着 x 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。
- [animation.growInY](/api/animation/growiny) - 容器沿着 y 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。
- [animation.morphing](/api/animation/morphing) - 图形之间的形变动画。
- [animation.pathIn](/api/animation/pathin) - Path 路径入场动画。
- [animation.scaleInX](/api/animation/scaleinx) - 单个图形沿着 x 方向的生长动画。
- [animation.scaleInY](/api/animation/scaleiny) - 单个图形沿着 y 方向的生长动画。
- [animation.scaleOutX](/api/animation/scaleoutx) - 单个图形沿着 x 方向的消退动画。
- [animation.scaleOutY](/api/animation/scaleouty) - 单个图形沿着 y 方向的消退动画。
- [animation.waveIn](/api/animation/wavein) - 划入入场动画效果，不同坐标系下效果不同。
- [animation.zoomIn](/api/animation/zoomin) - 沿着图形中心点的放大动画。
- [animation.zoomOut](/api/animation/zoomout) - 沿着图形中心点的缩小动画。

## Interaction

交互相关内容。

- [interaction.tooltip](/api/interaction/tooltip) - 展现提示信息。
- [interaction.elementHighlight](/api/interaction/elementhighlight) - 高亮元素。
- [interaction.elementHighlightByX](/api/interaction/elementhighlightbyx) - 高亮具有相同 x 通道值的元素。
- [interaction.elementHighlightByColor](/api/interaction/elementhighlightbycolor) - 高亮具有相同 color 通道的元素。
- [interaction.elementSelect](/api/interaction/elementselect) - 选择元素。
- [interaction.elementSelectByX](/api/interaction/elementselectbyx) - 选择拥有相同 x 通道值的元素。
- [interaction.elementSelectByColor](/api/interaction/elementselectbycolor) - 选择拥有相同 color 通道值的元素。
- [interaction.fisheye](/api/interaction/fisheye) - 鱼眼交互。
- [interaction.charIndex](/api/interaction/chartindex) - 索引图表。

## Graph

关系图相关的绘制。

- [mark.sankey](/api/graph/sankey) - 绘制桑基图。
- [mark.treemap](/api/graph/treemap) - 绘制矩阵树图。
- [mark.pack](/api/graph/pack) - 绘制打包图。
- [mark.forceGraph](/api/graph/forcegraph) - 绘制力导向图。
- [mark.tree](/api/graph/tree) - 绘制树图。

## Geo

地图相关的图形绘制。

- [mark.geoPath](/api/geo/geopath) - 可以用来结合 geojson 绘制地图。
- [chart.geoView](/api/geo/geoview) - 绘制地图的容器，用于多 geoPath 图层叠加。

## [Theme](/api/theme/theme)

主题相关内容。

## Plugin

基于 G 插件相关的内容。

- [renderer](/api/plugin/renderer) - `Canvas`、`SVG`、`WebGL` 三大渲染器。
- [rough](/api/plugin/rough) - 绘制手绘图的插件。
- [lottie](/api/plugin/lottie) - 可以在图表中播放 lottie 动画的插件。
