import { bgGradient } from './mixins/helpers';

const colors = {
  basics: {
    black: '#000',
    white: '#fff'
  },
  neutro: {
    100: '#FCF9F9',
    300: '#FFD8DD',
    500: '#7869E5',
    700: '#25234c',
    900: '#0c0421'
  },
  gradient: {
    primary: '#3023AE',
    secondary: '#C96DD8'
  }
};

const gradient = bgGradient('166deg', colors.gradient.primary, colors.gradient.secondary);

export { gradient };
export default colors;
