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
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40,
    },
  },
  coverageReporters: ['text', 'lcov'],
};
