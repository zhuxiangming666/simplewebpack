(function(modules){
      function require(filename){
        var fn = modules[filename];
        var module = { exports: {}}
        fn(require,module,module.exports);
        return module.exports;
      }
      require('/Users/zhuxiangming/Documents/simpleWebpack/src/index.js');
    })({'/Users/zhuxiangming/Documents/simpleWebpack/src/index.js': function(require,module,exports){"use strict";

var _greeting = require("./greeting.js");

(0, _greeting.greeting)('ming');},'./greeting.js': function(require,module,exports){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greeting = greeting;
function greeting(name) {
  console.log('Sbpack is finish');
  return 'hello' + name;
}},})