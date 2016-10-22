'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _memoize = require('memoize');

var _memoize2 = _interopRequireDefault(_memoize);

var load = (0, _memoize2['default'])(function load() {
	return _axios2['default'].get('/api/client.json').then(function (response) {
		return response.data;
	});
});
exports.load = load;