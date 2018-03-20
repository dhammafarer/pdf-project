import c from '../config';
import { splitEvery, merge } from 'ramda';

interface Media {
  image: string,
  title: string,
  text: string,
}

export default (n:number, xs:Media[], options:any) => {
  const o = merge(
    {
      w: ['*'],
      h: ['*','*'],
      pp: 8,
      p: [20,20],
      tc: c.primary,
      g: 5,
    },
    options
  );

  const ys = splitEvery(n, xs);

  return {
    stack: ys.map((rows, i) => {
      return {
        columnGap: o.g,
        columns: rows.map(y => {
          return {
            margin: [0, o.g],
            table: {
              heights: o.h,
              widths: ['auto', '*'],
              body: [
                [
                  {
                    margin: o.pp,
                    fit: [150,150],
                    image: y.image,
                  },
                  {
                    margin: o.p,
                    stack: [
                      {
                        font: 'RalewayExtraBold',
                        color: o.tc,
                        bold: true,
                        text: y.title.toUpperCase(),
                        margin: [0,0,0,10],
                      },
                      {
                        font: 'RalewayLight',
                        color: o.pc,
                        text: y.text
                      },
                    ]
                  }
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
              fillColor: function (ri, node, ci) {
                return ((ri === 0 || ri === 1) && ci === 0) ? 'white' : c.lightest;
              },
              hLineColor: function (i, node) {
                return c.lighter;
              },
              vLineColor: function (i, node) {
                return c.lighter;
              },
            }
          }
        })
      };
    })
  }
};
