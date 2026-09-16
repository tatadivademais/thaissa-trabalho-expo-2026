"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _addEventListener = _interopRequireDefault(require("./addEventListener.js"));
var _removeEventListener = _interopRequireDefault(require("./removeEventListener.js"));
function listen(node, eventName, handler, options) {
  (0, _addEventListener.default)(node, eventName, handler, options);
  return () => {
    (0, _removeEventListener.default)(node, eventName, handler, options);
  };
}
var _default = exports.default = listen;
module.exports = exports.default;