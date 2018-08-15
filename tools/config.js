const typescript = require('rollup-plugin-typescript2');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');
const globals = require('rollup-plugin-node-globals');
const postcss = require('rollup-plugin-postcss');
const replace = require('rollup-plugin-replace');
const packageJSON = require('../package.json');
const path = require('path');
const { uglify } = require('rollup-plugin-uglify');
const _ = require('lodash');

const __basename = path.dirname(__dirname);

const licenseText = `/**
 * Copyright (C) ${new Date().getFullYear()} club <club.10086.cn>
 * Author: nasa.wang
 */`;

const defaultPlugins = type => {
  const isDev = type === 'dev';
  const isDist = type === 'dist';
  let plugins = _.compact([
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    postcss({
      extract: true,
      minimize: isDist,
      plugins: [require('autoprefixer'), require('postcss-discard-comments')]
    }),
    commonjs({
      include: '../node_modules/**'
    }),
    typescript({
      typescript: require('typescript')
    }),
    globals(),
    json(),
    isDist &&
      uglify({
        output: {
          preamble: licenseText
        }
      }),
    replace({ ENV: JSON.stringify(process.env.NODE_ENV || 'development') })
  ]);
  return plugins;
};

const inputOptions = (type, module) => {
  return {
    input: path.resolve(__basename, `src/${module}.tsx`),
    external: ['axios'],
    treeshake: true,
    plugins: defaultPlugins(type)
  };
};
const outputOptions = (type, module) => {
  let options = {
    bundlePath: path.resolve(__basename, `dist/${module}.js`),
    minifiedBundlePath: path.resolve(__basename, `dist/${module}.min.js`)
  };

  const isDev = type === 'dev';
  const isDist = type === 'dist';
  return {
    format: 'umd',
    name: module,
    exports: 'named',
    file: isDev ? options.bundlePath : options.minifiedBundlePath,
    globals: {
      axios: 'axios'
    }
  };
};
module.exports = {
  inputOptions,
  outputOptions
};
