import ownerDocument from "./ownerDocument.js";

/**
 * Returns the owner window of a given element.
 *
 * @param node the element
 */
export default function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}