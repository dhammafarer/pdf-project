import c from '../config';
import t from '../content/page1';
import m from '../metadata';
import {fonts} from '../../fonts';

import badges from '../components/badges';
import separator from '../components/separator';

export default [
  {
    alignment: 'center',
    stack: [
      {
        width: 90,
        image: t.label.image,
      },
      {
        margin: [10,18,0,0],
        stack: [
          {
            text: m.company.toUpperCase(),
            style: 'title3',
            font: fonts.LatoHeavy
          },
          {
            text: m.address,
            style: 'subtitle3',
            font: fonts.Lato,
            lineHeight: 1.2
          },
          {
            text: 'Tel: ' + m.tel,
            style: 'subtitle3',
            font: fonts.Lato,
            lineHeight: 1.2
          },
        ]
      }
    ]
  },
  {
    marginTop: 30,
    alignment: 'right',
    text: t.date,
  },
  {
    margin: [0,30],
    text: t.title.toUpperCase(),
    style: 'title2',
    alignment: 'center',
    font: fonts.LatoBlack,
  },
  {
    text: t.paragraphs
  },
  {
    margin: [0,30],
    stack: [
      {text: m.company.toLocaleUpperCase()},
      {
        margin: [0,60,0,0],
        stack: [
          {
            margin: [0,10],
            canvas: [{type: 'line', x1:0,y1:0,x2:200,y2:0, lineWidth: 0.5}]
          },
          {text: t.signed, bold: true},
          {text: t.position},
        ]
      },
    ]
  }
];
