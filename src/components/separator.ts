export default (styles = {}, margin = [-40,0]) => {
  return {
    margin,
    canvas: [
      Object.assign(
        {type: 'rect', x: 0, y: 0, w:600, h:3},
        styles
      )
    ]
  }
};
