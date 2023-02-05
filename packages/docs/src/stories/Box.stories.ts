import type { StoryFn, Meta } from "@storybook/html";
import { BoxProps, createBox } from "@caramelo-ui/core";

export default {
  title: "Box",
  args: { innerText: "Teste3", color: "default" },
  argTypes: {
    color: {
      defaultValue: "default",
      description: "Background color",
      type: { name: "enum", value: ["default", "paper", "special"] },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryFn<BoxProps> = (props): HTMLDivElement =>
  createBox(props);
export const Paper: StoryFn<BoxProps> = (props): HTMLDivElement =>
  createBox({ ...props, color: "paper" });
