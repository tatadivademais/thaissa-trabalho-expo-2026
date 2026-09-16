"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = toggleClass;
var _addClass = _interopRequireDefault(require("./addClass.js"));
var _hasClass = _interopRequireDefault(require("./hasClass.js"));
var _removeClass = _interopRequireDefault(require("./removeClass.js"));
/**
 * Toggles a CSS class on a given element.
 *
 * @param element the element
 * @param className the CSS class name
 */
function toggleClass(element, className) {
  if (element.classList) element.classList.toggle(className);else if ((0, _hasClass.default)(element, className)) (0, _removeClass.default)(element, className);else (0, _addClass.default)(element, className);
}
module.exports = exports.default;