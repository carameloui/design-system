import { StoryObj } from "@storybook/react";
import "@caramelo-ui/styles/scss/components/Container/index.scss";

export default {
  title: "Core/Layout/Container",
  component: <></>
};
 
export const Default: StoryObj = {
  decorators: [
    () => (
      <div className="caramelo-ui-container"></div>
    ),
  ],
};
