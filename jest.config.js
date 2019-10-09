module.exports = {
  verbose: true,
  silent: false,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: ['**/?(*.)(test|spec).(ts|js)'],
  testPathIgnorePatterns: ['/build/'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/typings.d.ts',
    '!**/src/__tests__/**',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  coverageReporters: ['text', 'lcov'],
};
