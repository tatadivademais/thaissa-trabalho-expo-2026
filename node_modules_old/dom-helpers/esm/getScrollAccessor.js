import isWindow from "./isWindow.js";
export default function getscrollAccessor(offset) {
  const prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';
  function scrollAccessor(node, val) {
    const win = isWindow(node);
    if (val === undefined) {
      return win ? win[offset] : node[prop];
    }
    if (win) {
      win.scrollTo(win[offset], val);
    } else {
      node[prop] = val;
    }
  }
  return scrollAccessor;
}