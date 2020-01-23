import { css } from 'styled-components';

const hover = (...args) => css`
  &:hover {
    html.non-touch & {
      ${css.call(null, ...args)};
    }
  }
`;

const hexToRgb = hex => {
  if (hex[0] === '#') {
    hex = hex.substr(1);
  }
  if (hex.length === 3) {
    const hr = hex[0];
    const hg = hex[1];
    const hb = hex[2];

    return hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`);
  }

  const [r, g, b] = [0, 2, 4]
    .map(offset => hex.substring(offset, offset + 2))
    .map(hexCh => parseInt(hexCh, 16));

  return { r, g, b };
};

const rgbToHex = (r, g, b) => {
  return [r, g, b]
    .map(decCh => Math.max(0, Math.min(255, decCh)).toString(16))
    .map(hexCh => (hexCh.length === 1 ? `0${hexCh}` : hexCh))
    .join('');
};

const bgGradient = (rotation, color1, color2) =>
  `linear-gradient(${rotation}, ${color1} 0%, ${color2} 100%)`;

const getRatio = (
  originalWidth,
  originalHeight,
  width = 0,
  height = 0
) => {
  let finalHeight;
  let finalWidth;

  if (width > 0) {
    finalHeight = Math.ceil((width / originalWidth) * originalHeight) + 'px';
    finalWidth = `${width}px`;
  } else {
    finalHeight = `${height}px`;
    finalWidth = Math.ceil((height / originalHeight) * originalWidth) + 'px';
  }
  return `
    height: ${finalHeight};
    width: ${finalWidth};
  `;
};

export { bgGradient, getRatio, hexToRgb, hover, rgbToHex };
