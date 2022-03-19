const StyleDictionary = require('style-dictionary');

const styleDictionary = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      transforms: [
        'attribute/cti',
        'name/cti/kebab'
      ],
      buildPath: 'build/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables',
        options: {
          outputReferences: true,
        }
      }]
    }
  }
});

styleDictionary.buildAllPlatforms();