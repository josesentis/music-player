import { typography } from './';

/**
 * Modular Scale
 * Returns the modular scale size in rems
 * https://www.modularscale.com/?1&em&1.067
 *
 * @param {integer} n â€” Exponencial value
 */
const modular = n => `${Math.pow(typography.fontRatio, n) || 1}rem`;

/**
 * Rems
 * Transforms pixels into rems based in the base-font-size set in the theme
 * file
 *
 * @param {integer|string} n â€” Number to transform
 */
const rems = n => `${parseInt(n, 10) / typography.fontSize}rem`;

const pixelate = n => `${n}px`;

/**
 * Space
 * Vertical and Horizontal Rhythm generator based on the base-line-height set in
 * the theme file
 *
 * @param {float} n â€” Multiplier, can accept decimal numbers
 */
const space = (n = 1) => `${typography.lineHeight * n}rem`;

export { space, pixelate, rems, modular };
