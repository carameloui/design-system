import { css } from "./styles";
import { createElement } from "./utils";

export interface BoxProps extends HTMLDivElement {
    color?: 'default' | 'paper';
}

export const box = css({
  borderRadius: "$md",
  padding: '$4',
  border: 0,

  variants: {
    color: {
      default: {
        backgroundColor: "$white",
      },
      paper: {
        backgroundColor: "$paper",
      },
      special: {
        backgroundColor: '$middleBlueGreen',
      }
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export const createBox = (props: BoxProps): HTMLDivElement =>
  createElement("div", box(props), props) as HTMLDivElement;
