const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.paths.json');

const pathsObject = compilerOptions.paths;

const resolvedPaths = Object.fromEntries(
  Object.entries(pathsObject).map(([key, [value]]) => {
    const resolvedValue = path.resolve(__dirname, value.replace('/*', ''));
    return [key.replace('/*', ''), resolvedValue];
  })
);

module.exports = {
  webpack: {
    alias: resolvedPaths,
  },

  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
      }),
    },
  },
};
