import { merge } from 'ramda';

export const center = function center (x : object) {
  return {
    columns: [
      {width: '*', text: ''},
      merge({width: 'auto'}, x),
      {width: '*', text: ''}
    ]
  }
};
