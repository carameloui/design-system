import { css } from "./styles";
import { createElement } from "./utils";

export interface TextProps extends HTMLDivElement {
  fontFamily?: "default" | "heading";
  size?:
    | "xxs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | undefined;
}

export const text = css({
  borderRadius: "$lg",
  padding: "$4",
  border: 0,

  variants: {
    variant: {
      default: {
        fontFamily: "$default",
      },
      heading: {
        fontFamily: "$heading",
      },
    },
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export const createText = (props: TextProps): HTMLDivElement =>
  createElement("span", text(props), props) as HTMLDivElement;
