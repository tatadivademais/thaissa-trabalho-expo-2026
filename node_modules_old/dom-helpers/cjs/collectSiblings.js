"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = collectSiblings;
var _matches = _interopRequireDefault(require("./matches.js"));
function collectSiblings(node, refNode = null, selector = null) {
  const siblings = [];
  for (; node; node = node.nextElementSibling) {
    if (node !== refNode) {
      if (selector && (0, _matches.default)(node, selector)) {
        break;
      }
      siblings.push(node);
    }
  }
  return siblings;
}
module.exports = exports.default;