import nextJest from "next/jest.js";

const createJestConfig = nextJest({
	dir: "./",
});

const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	testEnvironment: "node",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	testMatch: ["**/__tests__/**/*.test.ts", "**/*.test.ts"],
	collectCoverageFrom: ["src/app/api/**/*.ts", "!src/app/api/**/*.test.ts"],
};

export default createJestConfig(customJestConfig);
