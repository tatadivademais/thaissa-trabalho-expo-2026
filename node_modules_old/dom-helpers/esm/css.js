import getComputedStyle from "./getComputedStyle.js";
import hyphenate from "./hyphenateStyle.js";
import isTransform from "./isTransform.js";
function style(node, property) {
  let css = '';
  let transforms = '';
  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenate(property)) || getComputedStyle(node).getPropertyValue(hyphenate(property));
  }
  Object.keys(property).forEach(key => {
    const value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenate(key));
    } else if (isTransform(key)) {
      transforms += `${key}(${value}) `;
    } else {
      css += `${hyphenate(key)}: ${value};`;
    }
  });
  if (transforms) {
    css += `transform: ${transforms};`;
  }
  node.style.cssText += `;${css}`;
}
export default style;