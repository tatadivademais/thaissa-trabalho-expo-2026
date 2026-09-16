import contains from "./contains.js";
import ownerDocument from "./ownerDocument.js";
import scrollLeft from "./scrollLeft.js";
import scrollTop from "./scrollTop.js";

/**
 * Returns the offset of a given element, including top and left positions, width and height.
 *
 * @param node the element
 */
export default function offset(node) {
  const doc = ownerDocument(node);
  let box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  const docElem = doc && doc.documentElement;

  // Make sure it's not a disconnected DOM node
  if (!docElem || !contains(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
  box = {
    top: box.top + scrollTop(docElem) - (docElem.clientTop || 0),
    left: box.left + scrollLeft(docElem) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}