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

const Utilities = `
  ${Tag}
`;

export default Utilities;
