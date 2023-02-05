// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
    moduleDirectories: ['node_modules', '<rootDir>/'],

    // If you're using [Module Path Aliases](https://nextjs.org/docs/advanced-features/module-path-aliases),
    // you will have to add the moduleNameMapper in order for jest to resolve your absolute paths.
    // The paths have to be matching with the paths option within the compilerOptions in the tsconfig.json
    // For example:

    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
        '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^@/clients/(.*)$': '<rootDir>/src/clients/$1',
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/types/(.*)$': '<rootDir>/src/types/$1',
        '^@/core/(.*)$': '<rootDir>/src/core/$1',
        '^@/databases/(.*)$': '<rootDir>/src/databases/$1',
        '^@/services/(.*)$': '<rootDir>/src/services/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    // dessa forma não precisa criar o diretorio __tests__ na raiz, os testes podem ficar juntos
    // do código fonte, as devem terminar com as configurações abaixo
    testMatch: ['<rootDir>/src/**/*.test.ts','<rootDir>/src/**/*.test.tsx'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)