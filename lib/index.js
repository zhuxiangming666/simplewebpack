const Compiler = require('./compiler');
const options = require('../simplepack.config');

const compoler = new Compiler(options).run();