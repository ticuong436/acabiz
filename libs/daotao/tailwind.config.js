const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('../my-lib/tailwind.config');

module.exports = {
  presets: [sharedTailwindConfig],

  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors : {
       blue : {
        500: '#007BFF',
        200 : '#606EC1',
       }
    },
    extend: {}

  },
  plugins: [],
};
