import { createGlobalStyle } from 'styled-components';
import { colors, space, typography } from '.';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 700;
    src: local('Titillium Web Bold'), local('TitilliumWeb-Bold'), url(https://fonts.gstatic.com/s/titilliumweb/v6/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzY5abuWI.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Nunito Sans Regular'), local('NunitoSans-Regular'), url(https://fonts.gstatic.com/s/nunitosans/v3/pe0qMImSLYBIv1o4X1M8cce9I9tAcVwo.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 800;
    src: local('Nunito Sans ExtraBold'), local('NunitoSans-ExtraBold'), url(https://fonts.gstatic.com/s/nunitosans/v3/pe03MImSLYBIv1o4X1M8cc8aBc5tU1ECVZl_.woff2) format('woff2');
  }

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
    background: ${colors.neutro.lighter};
    color: ${colors.neutro.darkest};
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
    color: ${colors.neutro.darker};
    font-family: ${typography.fontFallback};
    font-size: ${typography.fontSize}px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: ${space()};
    overflow-x: hidden;

    html.fonts-loaded & {
      font-family: ${typography.fontFamily};
    }
  }

  input, textarea, select, button:not(link) {
    font-family: ${typography.fontFallback};

    html.fonts-loaded & {
      font-family: ${typography.fontFamily};
    }
  }

  b, strong, .strong {
    font-weight: 800;
  }

  a,
  .link {
    color: ${colors.neutro.light};
    cursor: pointer;
    text-decoration: none;

    svg {
      fill: ${colors.neutro.light};
    }
  }
`;

export default GlobalStyle;
