import css from "./css.js";
import listen from "./listen.js";
import triggerEvent from "./triggerEvent.js";
function parseDuration(node) {
  const str = css(node, 'transitionDuration') || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}
function emulateTransitionEnd(element, duration, padding = 5) {
  let called = false;
  const handle = setTimeout(() => {
    if (!called) triggerEvent(element, 'transitionend', true);
  }, duration + padding);
  const remove = listen(element, 'transitionend', () => {
    called = true;
  }, {
    once: true
  });
  return () => {
    clearTimeout(handle);
    remove();
  };
}
export default function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration(element) || 0;
  const removeEmulate = emulateTransitionEnd(element, duration, padding);
  const remove = listen(element, 'transitionend', handler);
  return () => {
    removeEmulate();
    remove();
  };
}