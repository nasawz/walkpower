const { inputOptions, outputOptions } = require('./config');
let rollupConfig = {};

console.log(process.env.NODE_ENV);

const type = process.env.NODE_ENV == 'production' ? 'dist' : 'dev';

const module = process.env.module;

rollupConfig = Object.assign(rollupConfig, inputOptions(type, module));
rollupConfig.output = outputOptions(type, module);
export default [rollupConfig];
