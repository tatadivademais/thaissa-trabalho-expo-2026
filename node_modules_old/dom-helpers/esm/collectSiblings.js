import matches from "./matches.js";
export default function collectSiblings(node, refNode = null, selector = null) {
  const siblings = [];
  for (; node; node = node.nextElementSibling) {
    if (node !== refNode) {
      if (selector && matches(node, selector)) {
        break;
      }
      siblings.push(node);
    }
  }
  return siblings;
}