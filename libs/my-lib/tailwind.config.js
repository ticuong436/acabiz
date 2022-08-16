const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  heme: {
    colors: {
      primary: {
        light: '#5eead4',
        DEFAULT: '#14b8a6',
        dark: '#0f766e',
      },
      gray: '#dddddd',
      secondary: {
        light: '#bae6fd',
        DEFAULT: '#0ea5e9',
        dark: '#0369a1',
      },
      white: '#ffffff',
      black: '#000000',
      blue: {
        500: '#007BFF',
        200: '#606EC1',
      },
    },
    
  },
  plugins: [],
};
