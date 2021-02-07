module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["e2e"],
  moduleDirectories: ["node_modules", "src"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 70,
      lines: 80,
    },
  },
};