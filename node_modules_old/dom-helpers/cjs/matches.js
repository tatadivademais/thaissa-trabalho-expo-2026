"use strict";

exports.__esModule = true;
exports.default = matches;
let matchesImpl;

/**
 * Checks if a given element matches a selector.
 *
 * @param node the element
 * @param selector the selector
 */
function matches(node, selector) {
  if (!matchesImpl) {
    const body = document.body;
    const nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
    matchesImpl = (n, s) => nativeMatch.call(n, s);
  }
  return matchesImpl(node, selector);
}
module.exports = exports.default;