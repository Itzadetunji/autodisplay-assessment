import { jest } from "@jest/globals";

// Suppress console.error during tests
global.console = {
	...console,
	error: jest.fn(),
};
