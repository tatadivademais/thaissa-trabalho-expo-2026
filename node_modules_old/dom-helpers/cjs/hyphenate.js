"use strict";

exports.__esModule = true;
exports.default = hyphenate;
const rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
module.exports = exports.default;