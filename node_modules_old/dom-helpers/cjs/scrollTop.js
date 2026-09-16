"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _getScrollAccessor = _interopRequireDefault(require("./getScrollAccessor.js"));
/**
 * Gets or sets the scroll top position of a given element.
 *
 * @param node the element
 * @param val the position to set
 */
var _default = exports.default = (0, _getScrollAccessor.default)('pageYOffset');
module.exports = exports.default;