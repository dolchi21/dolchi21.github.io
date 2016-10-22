"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function memoize(fn) {

	return function () {

		var args = Array.prototype.slice.call(arguments);
		var i = args.length;

		var hash = "";
		var currentArg = null;

		while (i--) {
			currentArg = args[i];
			hash += currentArg === Object(currentArg) ? JSON.stringify(currentArg) : currentArg;
			fn.memoize || (fn.memoize = {});
		}
		fn.memoize || (fn.memoize = {});

		//return (hash in fn.memoize) ? fn.memoize[hash] : fn.memoize[hash] = fn.apply(this, args);
		if (hash in fn.memoize) {
			if (fn.memoize[hash].isRejected && fn.memoize[hash].isRejected()) {
				return fn.memoize[hash] = fn.apply(this, args);
			}
			return fn.memoize[hash];
		} else {
			return fn.memoize[hash] = fn.apply(this, args);
		}
	};
}

exports["default"] = memoize;
module.exports = exports["default"];