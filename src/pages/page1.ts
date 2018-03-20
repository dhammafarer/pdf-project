import c from '../config';
import t from '../content/page1';

import badges from '../components/badges';
import separator from '../components/separator';

export default [
  {
    margin: [0,30],
    columns: [
      {
        width: 90,
        image: t.label.image,
      },
      {
        margin: [10,18,0,0],
        stack: [
          {text: t.label.subtitle.toUpperCase(), style: 'subtitle3'},
          {text: t.label.title.toUpperCase(), style: 'title3'}
        ]
      }
    ]
  },
  {
    margin: [0, 60],
    stack: [
      {text: t.title.toUpperCase(), style: 'title2', alignment: 'center'},
      {
        alignment: 'center',
        margin: [0, 6],
        canvas: [
          {type: 'rect', x: 0, y: 0, w: 200, h: 1, color: c.tertiary}
        ]
      },
      {text: t.subtitle.toUpperCase(), style: 'subtitle2', alignment: 'center'},
    ]
  },
];
