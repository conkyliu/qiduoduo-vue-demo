const libDir = process.env.LIB_DIR;

const transformIgnorePatterns = [
    '/dist/',
    // Ignore modules without es dir.
    // Update: @babel/runtime should also be transformed
    // 'node_modules/(?!.*(@babel|lodash-es))',
    'node_modules/(?!@ant-design/icons-vue|@ant-design/icons-svg|lodash-es)/',
];
const testPathIgnorePatterns = ['/node_modules/', 'node'];

module.exports = {
    testURL: 'http://localhost/',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'vue', 'md', 'jpg'],
    modulePathIgnorePatterns: ['/_site/'],
    testPathIgnorePatterns: testPathIgnorePatterns,
    transform: {
        '^.+\\.(vue|md)$': '<rootDir>/node_modules/vue-jest',
        '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    },
    testRegex: libDir === 'dist' ? 'demo\\.test\\.js$' : '.*\\.test\\.js$',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    collectCoverage: process.env.COVERAGE === 'true',
    collectCoverageFrom: [
        'components/**/*.{js,jsx,vue}',
        '!components/*/style/index.{js,jsx}',
        '!components/style/*.{js,jsx}',
        '!components/*/locale/*.{js,jsx}',
        '!components/*/__tests__/**/type.{js,jsx}',
        '!components/vc-*/**/*',
        '!components/*/demo/**/*',
        '!components/_util/**/*',
        '!components/align/**/*',
        '!components/trigger/**/*',
        '!components/style.js',
        '!**/node_modules/**',
    ],
    transformIgnorePatterns,
    globals: {
        'ts-jest': {
            babelConfig: true,
        },
    },
};
