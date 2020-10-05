// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const packageJSON = require('./package.json');

const workspaces = packageJSON.workspaces.map((workspace) => `<rootDir>/${workspace}`);

module.exports = {
  roots: [...workspaces],
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  // testEnvironment: "node",
  transform: {
    '.(ts|tsx)': ['ts-jest'],
  },
  modulePathIgnorePatterns: [
    '/dist',
    '/build',
    '__stories__',
    'stories',
    'webpack.config.js',
    'node_modules',
  ],
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx,js}'],
  coverageReporters: ['text', 'lcov', 'cobertura'],
  // setupFiles: ['<rootDir>/configurations/jest/setup.js'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
