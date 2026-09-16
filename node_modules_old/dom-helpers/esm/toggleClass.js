import addClass from "./addClass.js";
import hasClass from "./hasClass.js";
import removeClass from "./removeClass.js";

/**
 * Toggles a CSS class on a given element.
 *
 * @param element the element
 * @param className the CSS class name
 */
export default function toggleClass(element, className) {
  if (element.classList) element.classList.toggle(className);else if (hasClass(element, className)) removeClass(element, className);else addClass(element, className);
}