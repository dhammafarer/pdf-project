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
      h: ['*', '*'],
      p: [16,14],
      g: 10,
      pc: c.dark,
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
            margin: [0, i*g, 0, 0],
            table: {
              heights: h,
              body: [
                [
                  {
                    columns: [
                        {
                          width: 20,
                          image: 'src/img/nope.png',
                        },
                        {
                          width: 'auto',
                          font: 'RalewayExtraBold',
                          color: tc,
                          bold: true,
                          text: y.title.toUpperCase(),
                        },
                      ]
                  }
               ],
                [
                  {
                    font: 'RalewayLight',
                    color: pc,
                    text: y.text
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: function (i, node) {
                return (i === 0 || i === node.table.body.length) ? 0.2 : 0;
              },
              vLineWidth: function (i, node) {
                return (i === 0 || i === node.table.widths.length) ? 0.2 : 0;
              },
              fillColor: function (i, node) {
                return (i === 0) ? 'white' : c.lightest;
              },
              hLineColor: function (i, node) {
                return c.lighter;
              },
              vLineColor: function (i, node) {
                return c.lighter;
              },
              paddingLeft: function(i, node) { return p[0]; },
              paddingRight: function(i, node) { return p[0]; },
              paddingTop: function(i, node) { return p[1]; },
              paddingBottom: function(i, node) { return p[1]; },
            }
          }
        })
      };
    })
  }
};

