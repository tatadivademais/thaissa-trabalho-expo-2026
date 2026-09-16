"use strict";

exports.__esModule = true;
exports.default = childNodes;
const toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

/**
 * Collects all child nodes of an element.
 *
 * @param node the node
 */
function childNodes(node) {
  return node ? toArray(node.childNodes) : [];
}
module.exports = exports.default;