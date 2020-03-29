process.env.TZ = 'UTC'

module.exports = {
  // explicitly setting jests environment, defaults to jsdom (emulated browser)
  // use jest-environment-node fore node environment
  testEnvironment: 'jest-environment-jsdom',

  testPathIgnorePatterns: ['config/webpack', '<rootDir>/.*/__mocks__'],

  collectCoverageFrom: ['src/**/*.{js,jsx}'],

  moduleDirectories: ['node_modules', '<rootDir>/src'],

  modulePaths: ["<rootDir>"],

  setupFilesAfterEnv: ['./src/__testing__/setupEnvironment.js'],  

  modulePathIgnorePatterns: ['<rootDir>/src/cypress'],

  testMatch: ['**/__tests__/**/(*.)+(spec|test).[jt]s?(x)'],

  globals: {},
}
