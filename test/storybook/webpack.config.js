const path = require('path');

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules[2].use = [
    {
      loader: require.resolve('text-loader')
    },
    {
      loader: require.resolve('./loader.js')
    }
  ];
  return defaultConfig;
};