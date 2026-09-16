/**
 * Triggers an event on a given element.
 *
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */
export default function triggerEvent(node, eventName, bubbles = false, cancelable = true) {
  if (node) {
    const event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}