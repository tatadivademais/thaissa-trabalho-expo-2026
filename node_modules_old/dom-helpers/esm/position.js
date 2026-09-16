import css from "./css.js";
import getOffset from "./offset.js";
import getOffsetParent from "./offsetParent.js";
import scrollLeft from "./scrollLeft.js";
import scrollTop from "./scrollTop.js";
const nodeName = node => node.nodeName && node.nodeName.toLowerCase();

/**
 * Returns the relative position of a given element.
 *
 * @param node the element
 * @param offsetParent the offset parent
 */
export default function position(node, offsetParent) {
  let parentOffset = {
    top: 0,
    left: 0
  };
  let offset;

  // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent
  if (css(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    const parent = offsetParent || getOffsetParent(node);
    offset = getOffset(node);
    if (nodeName(parent) !== 'html') parentOffset = getOffset(parent);
    const borderTop = String(css(parent, 'borderTopWidth') || 0);
    parentOffset.top += parseInt(borderTop, 10) - scrollTop(parent) || 0;
    const borderLeft = String(css(parent, 'borderLeftWidth') || 0);
    parentOffset.left += parseInt(borderLeft, 10) - scrollLeft(parent) || 0;
  }
  const marginTop = String(css(node, 'marginTop') || 0);
  const marginLeft = String(css(node, 'marginLeft') || 0);
  // Subtract parent offsets and node margins
  return {
    ...offset,
    top: offset.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
    left: offset.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
  };
}