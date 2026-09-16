import css from "./css.js";
import ownerDocument from "./ownerDocument.js";
const isHTMLElement = e => !!e && 'offsetParent' in e;
export default function offsetParent(node) {
  const doc = ownerDocument(node);
  let parent = node && node.offsetParent;
  while (isHTMLElement(parent) && parent.nodeName !== 'HTML' && css(parent, 'position') === 'static') {
    parent = parent.offsetParent;
  }
  return parent || doc.documentElement;
}