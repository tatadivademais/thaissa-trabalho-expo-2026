import getWindow from "./isWindow.js";
import offset from "./offset.js";

/**
 * Returns the width of a given element.
 *
 * @param node the element
 * @param client whether to use `clientWidth` if possible
 */
export default function getWidth(node, client) {
  const win = getWindow(node);
  return win ? win.innerWidth : client ? node.clientWidth : offset(node).width;
}