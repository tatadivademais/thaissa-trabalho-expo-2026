"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.optionsSupported = exports.onceSupported = exports.default = void 0;
var _canUseDOM = _interopRequireDefault(require("./canUseDOM.js"));
/* eslint-disable no-return-assign */

let optionsSupported = exports.optionsSupported = false;
let onceSupported = exports.onceSupported = false;
try {
  const options = {
    get passive() {
      return exports.optionsSupported = optionsSupported = true;
    },
    get once() {
      // eslint-disable-next-line no-multi-assign
      return exports.onceSupported = onceSupported = exports.optionsSupported = optionsSupported = true;
    }
  };
  if (_canUseDOM.default) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}
/**
 * An `addEventListener` ponyfill, supports the `once` option
 *
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    const {
      once,
      capture
    } = options;
    let wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }
  node.addEventListener(eventName, handler, options);
}
var _default = exports.default = addEventListener;