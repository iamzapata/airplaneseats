process.env.TZ = 'UTC'

module.exports = {
  // explicitly setting jests environment, defaults to jsdom (emulated browser)
  // use jest-environment-node fore node environment
  testEnvironment: 'jest-environment-jsdom',

  testPathIgnorePatterns: ['config/webpack', '<rootDir>/.*/__mocks__'],

  collectCoverageFrom: ['<rootDir>/**/*.{js,jsx}'],

  moduleDirectories: ['node_modules', '<rootDir>'],

  modulePaths: ["<rootDir>"],

  setupFilesAfterEnv: ['<rootDir>/__testing__/setupEnvironment.js'],  

  modulePathIgnorePatterns: ['<rootDir>/cypress'],

  testMatch: ['**/__tests__/**/(*.)+(spec|test).[jt]s?(x)'],

  globals: {},
}
