"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = getscrollAccessor;
var _isWindow = _interopRequireDefault(require("./isWindow.js"));
function getscrollAccessor(offset) {
  const prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';
  function scrollAccessor(node, val) {
    const win = (0, _isWindow.default)(node);
    if (val === undefined) {
      return win ? win[offset] : node[prop];
    }
    if (win) {
      win.scrollTo(win[offset], val);
    } else {
      node[prop] = val;
    }
  }
  return scrollAccessor;
}
module.exports = exports.default;