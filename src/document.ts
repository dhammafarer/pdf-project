import pdfmake from 'pdfmake';
import styles from './styles';
import c from './config';
import {fonts} from '../fonts';

import page1 from './pages/page1';

const docDefinition = {
  defaultStyle: {
    font: fonts.Lato,
    fontSize: 12,
    lineHeight: 1.618,
  },
  pageOrientation: c.pageOrientation,
  pageSize: c.pageSize,
  pageMargins: c.pageMargins,
  content: [
    page1,
  ],
  styles,
};

export default docDefinition;
