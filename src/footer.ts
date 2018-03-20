import * as c from './config';
import t from './content/footer';

export default (currentPage) => {
  return (currentPage == 1 ? {} :
    [
      {
        canvas: [
          {
            type: 'rect', x: 0, y: 0, w: 600, h: 60,
            color: c.quartenary
          },
        ],
      },
      {
        color: 'white',
        margin: [40,-40],
        columns: [
          {
            margin: [0,-1],
            font: 'Nexa',
            bold: true,
            width: 'auto',
            text: currentPage
          },
          {
            width: 'auto',
            margin: [10,0],
            canvas: [
              {type: 'line', x1:0,y1:1,x2:0,y2:13, lineWidth: 2, lineColor: c.tertiary},
            ]
          },
          {
            text: t.title,
            bold: true,
            italics: true,
          },
          {
            text: t.website,
            alignment: 'right',
            font: 'Nexa',
            bold: true,
            color: c.primary,
          },
        ]
      }
    ]
  );
};
