module.exports = function memoize(func) {
	var memo = {};
	var slice = Array.prototype.slice;

	return function(){
		var args = slice.call(arguments)
		var str = JSON.stringify(args)

		if (str in memo) {
			return memo[str];
		}
		else {
			var result = func.apply(this, args)
			memo[str] = result

			/** if Promise */
			if (isPromise(result)) {
				result.catch(function(err){
					delete memo[str];
					throw err;
				})
			}

			return result
		}
	}
}
function isPromise(obj){
	if (!isObject(obj)) { return false; }
	var hasThen = isFunction(obj.then)
	var hasCatch = isFunction(obj.catch)
	return (hasThen && hasCatch)
}
function isObject(value){
	return (typeof value === typeof {})
}
function isFunction(fn){
	return (typeof fn === typeof function(){})
}
