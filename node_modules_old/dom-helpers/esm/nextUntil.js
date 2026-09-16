import collectSiblings from "./collectSiblings.js";

/**
 * Collects all next sibling elements of an element until a given selector is matched.
 *
 * @param node the referene node
 * @param selector the selector to match
 */
export default function nextUntil(node, selector) {
  return collectSiblings(node, node, selector);
}