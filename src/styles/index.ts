import { merge } from 'ramda';
import t from './_typography';
import c from '../config';
import { fonts  } from '../../fonts';

export default {
  title1: merge(
    t.t1,
    {
      margin: [0, 10],
      color: c.dark,
      font: fonts.Nexa,
      bold: true,
    }
  ),
  title2: merge(
    t.t2,
    {
      font: fonts.Nexa,
      bold: true,
      color: c.dark,
    }
  ),
  title3: merge(
    t.t3,
    {
      font: fonts.Nexa,
      bold: true,
      color: c.dark,
    }
  ),
  subtitle1: merge(
    t.t2,
    {
      font: fonts.Nexa,
      color: c.dark,
    }
  ),
  subtitle2: merge(
    t.t3,
    {
      font: fonts.Nexa,
      color: c.dark,
    }
  ),
  subtitle3: merge(
    t.s1,
    {
      font: fonts.Nexa,
      color: c.dark,
    }
  ),
  paragraph: {
    lineHeight: 1.2,
  }
};
