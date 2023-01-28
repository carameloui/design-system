import type { StoryFn, Meta } from "@storybook/html";
import { button, createButton, ButtonProps } from "@caramelo-ui/core";

export default {
  title: "Button",
  args: { innerText: "Teste3" },
} as Meta<ButtonProps>;

export const Primary: StoryFn<ButtonProps> = (props): HTMLButtonElement => {
  const btn = document.createElement('button');

  btn.className = button(props);

  Object.assign(btn, props)

  return btn;
}

export const Big: StoryFn<ButtonProps> = (props): HTMLButtonElement =>
  createButton({ ...props, size: "big" });
