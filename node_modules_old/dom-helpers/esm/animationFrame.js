import canUseDOM from "./canUseDOM.js";
/* https://github.com/component/raf */
let prev = new Date().getTime();
function fallback(fn) {
  const curr = new Date().getTime();
  const ms = Math.max(0, 16 - (curr - prev));
  const handle = setTimeout(fn, ms);
  prev = curr;
  return handle;
}
const vendors = ['', 'webkit', 'moz', 'o', 'ms'];
let cancelMethod = 'clearTimeout';
let rafImpl = fallback;

// eslint-disable-next-line import/no-mutable-exports

const getKey = (vendor, k) => `${vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1))}AnimationFrame`;
if (canUseDOM) {
  vendors.some(vendor => {
    const rafMethod = getKey(vendor, 'request');
    if (rafMethod in window) {
      cancelMethod = getKey(vendor, 'cancel');
      // @ts-ignore
      rafImpl = cb => window[rafMethod](cb);
    }
    return !!rafImpl;
  });
}
export const cancel = id => {
  // @ts-ignore
  if (typeof window[cancelMethod] === 'function') window[cancelMethod](id);
};
export const request = rafImpl;