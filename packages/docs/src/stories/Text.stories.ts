import type { StoryFn, Meta } from "@storybook/html";
import { TextProps, createText } from "@caramelo-ui/core";

export default {
  title: "Text",
  args: { innerText: "Text" },
} as Meta<TextProps>;

export const Primary: StoryFn<TextProps> = (props): HTMLDivElement =>
  createText(props);
export const Large: StoryFn<TextProps> = (props): HTMLDivElement =>
  createText({ ...props, size: '9xl' });
