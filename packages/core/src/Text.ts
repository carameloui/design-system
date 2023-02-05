import { Colors } from "@caramelo-ui/tokens";
import { css } from "./styles";
import { createElement } from "./utils";

export enum TextSizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export interface TextProps extends HTMLElement {
  variant?: "default" | "heading" | "caption";
  size?: TextSizes;
  color?: Colors;
}

export const text = css({
  all: "unset",
  borderRadius: "$lg",
  padding: "$4",
  border: 0,

  fontFamily: "$default",

  variants: {
    variant: {
      default: {
        lineHeight: "$short",
      },
      heading: {
        fontFamily: "$heading",
        lineHeight: "$base",
      },
      caption: {
        lineHeight: "$shorter",
      },
    },
    size: {
      xs: { fontSize: "$md" },
      sm: { fontSize: "$lg" },
      md: { fontSize: "$xl" },
      lg: { fontSize: "$2xl" },
      xl: { fontSize: "$3xl" },
    },
  },
  compoundVariants: [
    {
      variant: "heading",
      size: "xl",
      css: {
        fontSize: "$6xl",
        fontWeight: "$bold",
      },
    },
    {
      variant: "heading",
      size: "lg",
      css: {
        fontSize: "$5xl",
        fontWeight: "$bold",
      },
    },
    {
      variant: "heading",
      size: "md",
      css: {
        fontSize: "$4xl",
        fontWeight: "$semibold",
      },
    },
    {
      variant: "heading",
      size: "sm",
      css: {
        fontSize: "$3xl",
        fontWeight: "$semibold",
      },
    },
    {
      variant: "heading",
      size: "xs",
      css: {
        fontSize: "$2xl",
        fontWeight: "$semibold",
      },
    },
    {
      variant: "caption",
      size: "xl",
      css: {
        fontSize: "$lg",
        fontWeight: "$semibold",
      },
    },
    {
      variant: "caption",
      size: "lg",
      css: {
        fontSize: "$md",
        fontWeight: "$semibold",
      },
    },
    {
      variant: "caption",
      size: "md",
      css: {
        fontSize: "$sm",
        fontWeight: "$semibold",
      },
    },
    {
      variant: "caption",
      size: "sm",
      css: {
        fontSize: "$xs",
        fontWeight: "$semibold",
      },
    },
    {
      variant: "caption",
      size: "xs",
      css: {
        fontSize: "$xxs",
        fontWeight: "$semibold",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export const createText = ({
  color = Colors.mediumChampagne,
  ...props
}: TextProps): HTMLElement =>
  createElement("span", text({
    ...props,
    css: { color },
  }), props) as HTMLElement;
