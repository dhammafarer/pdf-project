import { merge, splitEvery } from 'ramda';
import { center } from '../helpers';

const badges = (xs, options) => {
  const o = merge({
    cols: 4,
    side: 90,
    gap: 15,
    padding: 10,
    color: 'lightgray',
    fontSize: 12
  }, options);

  const side = o.side-o.padding*4;

  const ys = splitEvery(o.cols, xs);
  return center(
    {
      width: 'auto',
      stack: ys.map((rows, i) => {
        return {
          columnGap: o.gap,
          columns: rows.map(y => {
            return {
              alignment: 'center',
              margin: [ 0, 40 - (o.side+o.gap)*ys.length + i*(o.side+o.gap) ],
              stack: [
                //box
                {
                  canvas: [
                    {type: 'rect', x:0, y:0, w:o.side, h:o.side, r: 4, lineWidth: 2, lineColor: 'white', color: o.color}
                  ]
                },
                //box content
                {
                  margin: [0, o.padding-o.side],
                  stack: [
                    { image: y.image, fit: [side, side] },
                    { margin: [0, o.padding/1.2], width: o.side, fontSize: o.fontSize, text: y.text, color: 'white' }
                  ]
                }
              ]
            }
          })
        };
      })
    })
};

export default badges;
