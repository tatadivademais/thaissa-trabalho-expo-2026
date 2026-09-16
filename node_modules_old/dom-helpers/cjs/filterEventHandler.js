"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = filterEvents;
var _contains = _interopRequireDefault(require("./contains.js"));
var _querySelectorAll = _interopRequireDefault(require("./querySelectorAll.js"));
function filterEvents(selector, handler) {
  return function filterHandler(e) {
    const top = e.currentTarget;
    const target = e.target;
    const matches = (0, _querySelectorAll.default)(top, selector);
    if (matches.some(match => (0, _contains.default)(match, target))) handler.call(this, e);
  };
}
module.exports = exports.default;