module.exports = {
  clearMocks: true,
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 60,
      functions: 85,
      lines: 80
    }
  },
  moduleFileExtensions: ['js', 'ts'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup-after.js'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  testRunner: 'jest-circus/runner',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true
}
