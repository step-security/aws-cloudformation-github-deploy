// Clear GitHub environment variables that interfere with tests.
// These must be deleted before test files load so that `const oldEnv = process.env`
// (captured at the top of test files) does not include them.
delete process.env.GITHUB_EVENT_PATH
delete process.env.GITHUB_REPOSITORY

// Prevent real network calls from validateSubscription() during tests.
jest.mock('axios', () => ({
  __esModule: true,
  default: { post: jest.fn().mockResolvedValue({ status: 200 }) },
  isAxiosError: jest.fn().mockReturnValue(false)
}))
