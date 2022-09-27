import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: 'node',
  rootDir: `${process.cwd()}/src`,
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.ts$': '@swc/jest'
  }
};

export default config;
