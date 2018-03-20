import c from '../config';
import { merge, splitEvery } from 'ramda';

interface Card {
  title: string
  text: string,
}

export default (n, xs: Card[], styles) => {
  const {w,h,p,g,tc,bc,sc,pc,sw,u,hc,lw} = merge(
    {
      w: 100,
      h: 100,
      p: 14,
      g: 10,
      pc: c.light,
      tc: c.primary,
      sc: c.tertiary,
      bc: c.lightest,
      sw: 40,
      u: false,
      hc: 'white',
      lw: 0.4,
    },
    styles
  );
  const ys = splitEvery(n, xs);
  return {
    stack: ys.map((rows, i) => {
      return {
        columnGap: g,
        columns: rows.map(y => {
          return {
            width: w,
            margin: [0, i*(h+g),0,0],
            stack: [
              //box
              {
                canvas: [
                  {
                    type: 'rect',
                    x:0, y:0, w, h, r: 4,
                    color: bc,
                    lineColor: c.lighter,
                    lineWidth: 0.2,
                  },
                  ...(
                    u ?
                    [
                      {
                        type:'rect',
                        x:w/3, y:p*3, w:w/3, h:1,
                        color: sc
                      },
                    ] :
                    [
                      {
                        type:'rect',
                        x: lw, y: lw, w: w-lw*2, h:p, r: 4,
                        color: 'white',
                      },
                      {
                        type:'rect',
                        x: lw, y: p/2, w: w-lw*2, h:p*2.5,
                        color: 'white',
                      },
                    ]
                  )
                ]
              },
              {
                margin: [0, -h],
                stack: [
                  {
                    margin: p,
                    alignment: 'center',
                    color: tc,
                    text: y.title.toUpperCase(),
                    bold: true
                  },
                  {
                    margin: p,
                    alignment: 'center',
                    color: pc,
                    text: y.text
                  },
                ]
              }
            ]
          }
        })
      };
    })
  }
};
