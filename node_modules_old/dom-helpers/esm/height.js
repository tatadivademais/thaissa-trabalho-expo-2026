import getWindow from "./isWindow.js";
import offset from "./offset.js";

/**
 * Returns the height of a given element.
 *
 * @param node the element
 * @param client whether to use `clientHeight` if possible
 */
export default function height(node, client) {
  const win = getWindow(node);
  return win ? win.innerHeight : client ? node.clientHeight : offset(node).height;
}