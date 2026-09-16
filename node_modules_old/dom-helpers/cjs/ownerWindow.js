"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = ownerWindow;
var _ownerDocument = _interopRequireDefault(require("./ownerDocument.js"));
/**
 * Returns the owner window of a given element.
 *
 * @param node the element
 */
function ownerWindow(node) {
  const doc = (0, _ownerDocument.default)(node);
  return doc && doc.defaultView || window;
}
module.exports = exports.default;