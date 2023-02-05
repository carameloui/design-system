import type { StoryFn, Meta } from "@storybook/html";
import { TextProps, createText, createBox, TextSizes } from "@caramelo-ui/core";
import { Colors } from "@caramelo-ui/tokens";

export default {
  title: "Text",
  args: { innerText: "Text" },
  argTypes: {
    variant: {
      type: {
        name: "enum",
        value: ["default", "heading", "caption"],
      },
    },
    size: {
      type: {
        name: "enum",
        value: Object.values(TextSizes),
      },
    },
    color: {
      type: {
        name: "enum",
        value: Object.values(Colors),
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryFn<TextProps> = (props): HTMLElement =>
  createText(props);
export const Large: StoryFn<TextProps> = (props): HTMLElement =>
  createText({ ...props });

export const AllVariants: StoryFn = () => {
  const container = createBox({
    css: { display: "flex", flexDirection: "column" },
  });

  const variants = [
    createText({
      variant: "heading",
      size: "xl",
      innerText: "Heading Extra Large",
    }),
    createText({
      variant: "heading",
      size: "lg",
      innerText: "Heading Large",
    }),
    createText({
      variant: "heading",
      size: "md",
      innerText: "Heading Medium",
    }),
    createText({
      variant: "heading",
      size: "sm",
      innerText: "Heading Small",
    }),
    createText({
      variant: "heading",
      size: "xs",
      innerText: "Heading Extra Small",
    }),
    createText({
      size: "xl",
      innerText: "Text Extra Large",
    }),
    createText({
      size: "lg",
      innerText: "Text Large",
    }),
    createText({
      size: "md",
      innerText: "Text Medium",
    }),
    createText({
      size: "sm",
      innerText: "Text Small",
    }),
    createText({
      size: "xs",
      innerText: "Text Extra Small",
    }),
    createText({
      variant: "caption",
      size: "xl",
      innerText: "caption Extra Large",
    }),
    createText({
      variant: "caption",
      size: "lg",
      innerText: "caption Large",
    }),
    createText({
      variant: "caption",
      size: "md",
      innerText: "caption Medium",
    }),
    createText({
      variant: "caption",
      size: "sm",
      innerText: "caption Small",
    }),
    createText({
      variant: "caption",
      size: "xs",
      innerText: "caption Extra Small",
    }),
  ];

  variants.forEach((variant) => container.appendChild(variant));

  return container;
};
