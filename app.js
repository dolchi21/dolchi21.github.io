'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.mount = mount;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactChaffle = require('react-chaffle');

var _reactChaffle2 = _interopRequireDefault(_reactChaffle);

var Spinner = function Spinner() {
	return _react2['default'].createElement('i', { className: 'fa fa-spinner fa-pulse' });
};

var App = _react2['default'].createElement(
	'span',
	null,
	_react2['default'].createElement(Spinner, null),
	_react2['default'].createElement(
		_reactChaffle2['default'],
		null,
		' Loading something ...'
	)
);

exports['default'] = App;

function mount() {
	var id = arguments.length <= 0 || arguments[0] === undefined ? 'app' : arguments[0];

	var el = document.getElementById(id);
	_reactDom2['default'].render(App, el);
}