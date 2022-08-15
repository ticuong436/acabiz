import { withCssResources } from '@storybook/addon-cssresources';
export const decorators = [
  withCssResources
];
export const parameters = {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // cssresources: [
    //   {
    //     id: 'indigo-pink',
    //     code: '<link rel="stylesheet" href="./main.css">',
    //     picked: true
    //   },
    //   {
    //     id: 'deeppurple-amber',
    //     code: '<link rel="stylesheet" href="assets/themes/deeppurple-amber.css">',
    //     picked: false
    //   },
    //   {
    //     id: 'pink-bluegrey',
    //     code: '<link rel="stylesheet" href="assets/themes/pink-bluegrey.css">',
    //     picked: false
    //   },
    //   {
    //     id: 'purple-green',
    //     code: '<link rel="stylesheet" href="assets/themes/purple-green.css">',
    //     picked: false
    //   }
    // ]
  };