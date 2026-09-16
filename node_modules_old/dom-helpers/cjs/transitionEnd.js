"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = transitionEnd;
var _css = _interopRequireDefault(require("./css.js"));
var _listen = _interopRequireDefault(require("./listen.js"));
var _triggerEvent = _interopRequireDefault(require("./triggerEvent.js"));
function parseDuration(node) {
  const str = (0, _css.default)(node, 'transitionDuration') || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}
function emulateTransitionEnd(element, duration, padding = 5) {
  let called = false;
  const handle = setTimeout(() => {
    if (!called) (0, _triggerEvent.default)(element, 'transitionend', true);
  }, duration + padding);
  const remove = (0, _listen.default)(element, 'transitionend', () => {
    called = true;
  }, {
    once: true
  });
  return () => {
    clearTimeout(handle);
    remove();
  };
}
function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration(element) || 0;
  const removeEmulate = emulateTransitionEnd(element, duration, padding);
  const remove = (0, _listen.default)(element, 'transitionend', handler);
  return () => {
    removeEmulate();
    remove();
  };
}
module.exports = exports.default;