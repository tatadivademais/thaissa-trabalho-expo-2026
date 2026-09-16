"use strict";

exports.__esModule = true;
exports.default = camelize;
const rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, (_, chr) => chr.toUpperCase());
}
module.exports = exports.default;