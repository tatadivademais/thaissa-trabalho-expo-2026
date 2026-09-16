"use strict";

exports.__esModule = true;
exports.default = text;
const regExpNbspEntity = /&nbsp;/gi;
const regExpNbspHex = /\xA0/g;
const regExpSpaces = /\s+([^\s])/gm;

/**
 * Collects the text content of a given element.
 *
 * @param node the element
 * @param trim whether to remove trailing whitespace chars
 * @param singleSpaces whether to convert multiple whitespace chars into a single space character
 */
function text(node, trim = true, singleSpaces = true) {
  let elementText = '';
  if (node) {
    elementText = (node.textContent || '').replace(regExpNbspEntity, ' ').replace(regExpNbspHex, ' ');
    if (trim) {
      elementText = elementText.trim();
    }
    if (singleSpaces) {
      elementText = elementText.replace(regExpSpaces, ' $1');
    }
  }
  return elementText;
}
module.exports = exports.default;