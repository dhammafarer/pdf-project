import fs from 'fs';
import m from '../metadata';

export default {
  label: {
    image: "src/img/logo/ctn-logo.png",
    subtitle: "Subtitle",
    title: "Title"
  },
  title: m.title,
  subtitle: m.subtitle,
  date: 'Date: March 22nd, 2018',
  paragraphs: fs.readFileSync('src/content/text.txt', 'utf8'),
  signed: 'Johnson Lee',
  position: 'Chief Executive Officer',
};
