import pdfmake from 'pdfmake';
import styles from './styles';
import c from './config';
import {fonts} from '../fonts';

import page1 from './pages/page1';
import footer from './footer';

const docDefinition = {
  defaultStyle: {
    font: fonts.Raleway,
    fontSize: 12,
  },
  pageOrientation: c.pageOrientation,
  pageSize: c.pageSize,
  pageMargins: c.pageMargins,
  content: [
    page1,
  ],
  styles,
  footer,
};

export default docDefinition;
