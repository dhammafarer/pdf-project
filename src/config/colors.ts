import Color from 'color';

const bahamaBlue = '#164970';
const deepSkyBlue = '#248CCC';
const pictonBlue = '#68B2E5';
const apache = '#CBA053';
const orange = '#E95646';
const osloGray = '#879394';
const bleachedCedar = '#4C4C4C';

const colors = {
  primary: deepSkyBlue,
  secondary: bahamaBlue,
  tertiary: apache,
  quartenary: pictonBlue,
  lightest: Color(bleachedCedar).lighten(2.22).hex(),
  lighter: Color(osloGray).lighten(0.5).hex(),
  light: osloGray,
  dark: bleachedCedar,
  darker: Color(bleachedCedar).darken(0.4).hex(),
  darkest: Color(bleachedCedar).darken(0.8).hex(),
  primaryGradient: [bahamaBlue, deepSkyBlue, pictonBlue, bahamaBlue]
};

export default colors;
