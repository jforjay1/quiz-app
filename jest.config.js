module.exports = {
    verbose: true,
    roots: ['<rootDir>/src/__tests__'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/__tests__/**/*.jsx', '**/*.test.jsx'],
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testResultsProcessor: "jest-sonar-reporter",
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'src/**/*.js',
        '!src/index.js', // exclude entry point file
    ],
    coverageReporters: ['lcov', 'text', 'cobertura'],
};