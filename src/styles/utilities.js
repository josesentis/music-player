import { colors, hexToRgb, typography } from '.';

const tagColor = hexToRgb(colors.neutro[100]);
const Tag = `
  .tag {
    color: rgba(${tagColor.r}, ${tagColor.g}, ${tagColor.b}, 0.5);
    font-size: ${typography.fontSizeSmall}px;
    font-weight: 700;
    letter-spacing: 4px;
  
    &:not(.uncapitalize) {
      text-transform: uppercase;
    }
  }
`;

// const CommonHeadingStyles = `
//   margin-bottom: ${space()};

//   & + h1, & + h2, & + h3 {
//     margin-top: ${space(0.5)};
//   }
// `;

// const Titles = `
//   .t-display,
//   .t-title1,
//   .t-title4 {
//     ${CommonHeadingStyles}
//   }

//   .t-dashboard {
//     font-size: ${modular(7)};
//     font-weight: 300;
//     letter-spacing: .3px;
//     line-height: ${space(2.25)};

//     ${media.min('desktopLarge')`
//       font-size: ${modular(8)};
//       line-height: ${space(2.75)};
//     `}
//   }

//   .t-title1 {
//     font-size: ${modular(4)};
//     font-weight: 800;
//     letter-spacing: .3px;
//     line-height: ${space(1.75)};

//     ${media.min('desktopLarge')`
//       font-size: ${modular(5)};
//       line-height: ${space(2)};
//     `}
//   }

//   .t-title2 {
//     ${Title2}
//   }

//   .t-title3 {
//     ${Title3};
//     margin-bottom: ${space(0.5)};
//   }

//   .t-title4 {
//     ${Subtitle};
//     color: ${colors.neutro.dark};
//     font-weight: 400;
//     margin-bottom: ${space(0.5)};
//   }
// `;

const Utilities = `
  ${Tag}
`;

export default Utilities;