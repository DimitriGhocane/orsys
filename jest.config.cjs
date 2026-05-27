// jest.config.js
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'text', 'html'],
}
