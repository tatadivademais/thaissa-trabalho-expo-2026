import contains from "./contains.js";
import qsa from "./querySelectorAll.js";
export default function filterEvents(selector, handler) {
  return function filterHandler(e) {
    const top = e.currentTarget;
    const target = e.target;
    const matches = qsa(top, selector);
    if (matches.some(match => contains(match, target))) handler.call(this, e);
  };
}