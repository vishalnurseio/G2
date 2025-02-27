---
title: subset
order: 1
---

从原数据集中按照数据量、数据字段抽取数据子集。

## 开始使用

```ts
const data = [
  { a: 1, b: 2, c: 3 },
  { a: 2, b: 3, c: 4 },
  { a: 3, b: 4, c: 1 },
  { a: 4, b: 1, c: 2 },
];

chart
  .data({
    type: 'inline',
    value: data,
    transform: [
      {
        type: 'subset',
        start: 1,
        end: 3,
        fields: ['b', 'c']
      },
    ],
  });
```

上述例子处理之后，数据变成为：

```js
[
  { b: 3, c: 4 },
  { b: 4, c: 1 },
];
```

## 选项

| 属性 | 描述 | 类型 | 默认值|
| -------------| ----------------------------------------------------------- | -------------------------------| --------------------|
| start        | 数据截取的起始索引                                             | `number`                       | `0`                 |
| end          | 数据截取的结束索引                                             | `number`                       | `data.length`       |
| fields       | 抽取的数据字段                                                | `string[]`                     |                     |
