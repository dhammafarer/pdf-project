import c from '../config';
import { merge } from 'ramda';

export default (xs, options) => {
  const o = merge(
    {
      w: 500,
      h: 140,
      pp: 10,
      p: 10,
      tc: c.primary,
    },
    options
  );

  return {
    columns: [
      {text: '', width: 0},
      {
        width: o.w,
        stack: xs.map(x => {
          return {
            margin: [0,5],
            stack: [
              {
                canvas: [
                  {type: 'rect', x:0,y:0,w:o.w,h:o.h,r:4,lineColor:c.lighter,color:'#eee'},
                ]
              },
              {
                relativePosition: {x:0,y:-o.h},
                columns: [
                  {
                    margin: o.pp,
                    width: 'auto',
                    image: x.image,
                    fit: [o.w-o.pp*2,o.h-o.pp*2]
                  },
                  {
                    width: 'auto',
                    margin: [0, 0, o.p, 0],
                    canvas: [
                      {type: 'rect', x:0, y:o.pp, w:1, h:o.h-o.pp*2, r:4, color:c.lighter}
                    ]
                  },
                  {
                    margin: o.p*2,
                    stack: [
                      { margin: [0,0,0,10], text:x.title.toUpperCase(), style: 'title3', color: o.tc },
                      { text:x.text, style: 'paragraph' },
                    ]
                  }
                ]
              },
            ]
          }
        }),
      },
      {text: '', width: '*'}
    ]
  }
};
