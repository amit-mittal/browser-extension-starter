module.exports = {

    // Stop running tests after the first failure
    bail: false,

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        "/node_modules/",
    ],

    // A set of global variables that need to be available in all test environments
    globals: {
        "ts-jest": {
            "tsConfigFile": "tsconfig.json"
        }
    },

    // An array of file extensions your modules use
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js"
    ],

    // The glob patterns Jest uses to detect test files
    testMatch: [
        "**/**.spec.ts"
    ],

    // A map from regular expressions to paths to transformers
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
};
