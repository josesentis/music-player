import { createGlobalStyle } from 'styled-components';

import { colors, space, typography } from '.';
import Utilities from './utilities';

const baseParagraph = `
  line-height: ${space()};
  margin-bottom: ${space(.25)};
`;

const baseParagraphFormat = `
  &:last-child {
    margin-bottom: 0;
  }

  & + h1, & + h2, & + h3 {
    margin-top: ${space()};
  }

  & + fieldset {
    margin-top: ${space()};
  }

  h1 + &, h2 + &, h3 + & {
    margin-top: ${space()};
  }
`;

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
  blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img,
  ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center,
  dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody,
  tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure,
  figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  html,
  body {
    align-items: center;
    background: ${colors.neutro[100]};
    color: ${colors.neutro[900]};
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  }

  i {
    font-style: italic;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav,
  section {
    display: block;
  }

  blockquote, q {
    quotes: none;
  }

  ol, ul {
    list-style: none;

    li { margin-bottom: ${space(0.5)}; }
    li:last-child { margin-bottom: 0; }
  }

  blockquote::before, blockquote::after, q::before, q::after {
    content: none;
  }

  button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: none repeat scroll 0 0 transparent;
    border: 0;
  }

  iframe {
    border: 0;
  }

  img {
    display: block;
    height: auto;
    -ms-interpolation-mode: bicubic;
    max-width: 100%;
    width: auto;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *::before,
  *::after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
    font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    text-rendering: optimizeLegibility !important;
  }

  html.u-noscroll {
    overflow: hidden;
  }

  html,
  body {
    background: ${colors.basics.white};
    height: 100%;
    position: relative;
  }

  body {
    font-family: ${typography.fontFamily};
    font-size: ${typography.fontSize}px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: ${space()};
    overflow-x: hidden;
  }

  b, strong, .strong {
    font-weight: 800;
  }

  a,
  button,
  .link {
    color: ${colors.neutro[100]};
    cursor: pointer;
    text-decoration: none;

    svg {
      fill: ${colors.neutro[100]};
    }
  }

  p {
    ${baseParagraph};
    ${baseParagraphFormat}

    &.tag { margin-bottom: 0 !important; }

  }

  .p-nomargin { margin-bottom: ${space(.25)}; }

  .p-small {
    font-size: ${typography.fontSizeSmall}px;
    margin-bottom: 0;
  }

  ${Utilities};
`;

export default GlobalStyle;
