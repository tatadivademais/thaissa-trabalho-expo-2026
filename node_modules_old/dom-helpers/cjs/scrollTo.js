"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = scrollTo;
var _animationFrame = require("./animationFrame.js");
var _height = _interopRequireDefault(require("./height.js"));
var _isWindow = _interopRequireDefault(require("./isWindow.js"));
var _offset = _interopRequireDefault(require("./offset.js"));
var _scrollParent = _interopRequireDefault(require("./scrollParent.js"));
var _scrollTop = _interopRequireDefault(require("./scrollTop.js"));
/* eslint-disable no-nested-ternary */

function scrollTo(selected, scrollParent) {
  let offset = (0, _offset.default)(selected);
  let poff = {
    top: 0,
    left: 0
  };
  if (!selected) return undefined;
  const list = scrollParent || (0, _scrollParent.default)(selected);
  const isWin = (0, _isWindow.default)(list);
  let listScrollTop = (0, _scrollTop.default)(list);
  const listHeight = (0, _height.default)(list, true);
  if (!isWin) poff = (0, _offset.default)(list);
  offset = {
    top: offset.top - poff.top,
    left: offset.left - poff.left,
    height: offset.height,
    width: offset.width
  };
  const selectedHeight = offset.height;
  const selectedTop = offset.top + (isWin ? 0 : listScrollTop);
  const bottom = selectedTop + selectedHeight;
  listScrollTop = listScrollTop > selectedTop ? selectedTop : bottom > listScrollTop + listHeight ? bottom - listHeight : listScrollTop;
  const id = (0, _animationFrame.request)(() => (0, _scrollTop.default)(list, listScrollTop));
  return () => (0, _animationFrame.cancel)(id);
}
module.exports = exports.default;