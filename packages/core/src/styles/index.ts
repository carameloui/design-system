import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from "@caramelo-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/core";

export const {
  css,
  keyframes,
  config,
  globalCss,
  createTheme,
  theme,
  getCssText,
} = createStitches({
  media: {
    desktop: "(min-width: 640px)",
  },
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    radii,
    space,
    lineHeights,
  },
});
