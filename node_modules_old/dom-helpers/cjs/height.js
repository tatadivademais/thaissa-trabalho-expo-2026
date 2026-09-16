"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = height;
var _isWindow = _interopRequireDefault(require("./isWindow.js"));
var _offset = _interopRequireDefault(require("./offset.js"));
/**
 * Returns the height of a given element.
 *
 * @param node the element
 * @param client whether to use `clientHeight` if possible
 */
function height(node, client) {
  const win = (0, _isWindow.default)(node);
  return win ? win.innerHeight : client ? node.clientHeight : (0, _offset.default)(node).height;
}
module.exports = exports.default;