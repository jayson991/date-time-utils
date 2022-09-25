import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': '@swc/jest'
  }
}

export default config
