'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _memoize = require('memoize');

var _memoize2 = _interopRequireDefault(_memoize);

function all(options) {
	return _axios2['default'].get('/api/products/all.json');
}

var all = (0, _memoize2['default'])(all);
exports.all = all;