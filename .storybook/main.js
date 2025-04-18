module.exports = {
  stories: ['../storybook/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite', // Or @storybook/vue3-vite
    options: {},
  },
}
