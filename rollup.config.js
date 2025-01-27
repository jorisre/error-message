import { createRollupConfig } from './rollup/createRollupConfig';
import pkg from './package.json';

const name = 'index';
const umdName = 'ReactHookFormErrorMessage';
const options = [
  {
    name,
    umdName,
    format: 'cjs',
    env: 'development',
    input: pkg.source,
  },
  {
    name,
    umdName,
    format: 'cjs',
    env: 'production',
    input: pkg.source,
  },
  {
    name,
    umdName,
    format: 'esm',
    input: pkg.source,
  },
  {
    name,
    umdName,
    format: 'umd',
    env: 'development',
    input: pkg.source,
  },
  {
    name,
    umdName,
    format: 'umd',
    env: 'production',
    input: pkg.source,
  },
  {
    name,
    umdName,
    format: 'esm',
    formatName: 'ie11',
    input: pkg.source,
    tsconfig: './tsconfig.ie11.json',
  },
];

export default options.map((option) => createRollupConfig(option));
