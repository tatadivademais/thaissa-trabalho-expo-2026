"use strict";

exports.__esModule = true;
exports.default = void 0;
/**
 * A `removeEventListener` ponyfill
 *
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */

function removeEventListener(node, eventName, handler, options) {
  const capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
var _default = exports.default = removeEventListener;
module.exports = exports.default;