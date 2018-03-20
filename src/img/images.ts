import jimp from 'jimp';
import { fw } from '../config';

const iconSize = Math.pow(2,8);

const j = (path, name) => {
  jimp.read(path)
    .then((image) => {
      image
        .crop(200,0,fw,200)
        .write('img/' + name)
    })
    .catch(err => console.log(err));
};
