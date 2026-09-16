import addEventListener from "./addEventListener.js";
import removeEventListener from "./removeEventListener.js";
function listen(node, eventName, handler, options) {
  addEventListener(node, eventName, handler, options);
  return () => {
    removeEventListener(node, eventName, handler, options);
  };
}
export default listen;