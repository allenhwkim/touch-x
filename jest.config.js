module.exports = {
  collectCoverage: false,
  testMatch: ['**/*.spec.js', '*.spec.js'],
  moduleFileExtensions: ['js', 'html', 'json'],
  moduleNameMapper: null,
  reporters: ['default'],
  coverageDirectory: './reports/coverage',
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    'global': {
      // 'branches': 80,
      'functions': 90,
      'lines': 90,
      'statements': 100
    }
  }
};