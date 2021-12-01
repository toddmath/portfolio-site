module.exports = {
  roots: ['<rootDir>'],
  setupFiles: ['<rootDir>/loadershim.js'],
  collectCoverageFrom: ['**/src/**/*.+(js|jsx)'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 40,
      functions: 50,
      lines: 70,
    },
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  projects: [
    {
      displayName: {
        name: 'test',
        color: 'blue'
      },
      transform: {
        '^.+\\.(js|jsx)?$': '<rootDir>/jest-preprocess.js',
      },
      moduleFileExtensions: ['js', 'jsx', 'json'],
      moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/file-mock.ts',
        '^components(.*)$': '<rootDir>/src/components$1',
        '^config(.*)$': '<rootDir>/src/config$1',
        '^content(.*)$': '<rootDir>/src/content$1',
        '^context(.*)$': '<rootDir>/src/context$1',
        '^fonts(.*)$': '<rootDir>/src/fonts$1',
        '^images(.*)$': '<rootDir>/src/images$1',
        '^pages(.*)$': '<rootDir>/src/pages$1',
        '^styles(.*)$': '<rootDir>/src/styles$1',
        '^utils(.*)$': '<rootDir>/src/utils$1',
        '^hooks(.*)$': '<rootDir>/src/hooks$1',
      },
      testEnvironment: 'jest-environment-jsdom',
      setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
      testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public', 'public', 'cypress', '\\.netlify', '\\.vscode'],
      transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
      globals: {
        __PATH_PREFIX__: '',
      },
    },
    {
      displayName: {
        name: 'lint',
        color: 'magenta'
      },
      runner: 'jest-runner-eslint',
      testMatch: ['<rootDir>/**/*.+(js|jsx)'],
      testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public', 'public', 'cypress', '\\.netlify', '\\.vscode'],
    },
  ],
};
