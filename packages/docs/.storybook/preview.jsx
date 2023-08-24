import '../../styles/theme/light.scss';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (StoryFn) => (
      <div className='carameloui-theme-light' style={{backgroundColor: 'var(--color-base-surface)'}}>
        <StoryFn />
      </div>
    )
  ]
};

export default preview;
