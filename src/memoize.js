import Promise from 'bluebird'

function memoize( fn ) {
	
	return function () {

		var args = Array.prototype.slice.call(arguments);
		var i = args.length;
		
		var hash = "";
		var currentArg = null;
		
		while (i--) {
			currentArg = args[i];
			hash += (currentArg === Object(currentArg)) ? JSON.stringify(currentArg) : currentArg;
			fn.memoize || (fn.memoize = {});
		}
		fn.memoize || (fn.memoize = {});
		
		//return (hash in fn.memoize) ? fn.memoize[hash] : fn.memoize[hash] = fn.apply(this, args);
		if (hash in fn.memoize) {
			if (fn.memoize[hash].isRejected && fn.memoize[hash].isRejected()) {
				return fn.memoize[hash] = fn.apply(this, args)
			}
			return fn.memoize[hash];
		} else {
			return fn.memoize[hash] = fn.apply(this, args)
		}

	}

}

export default memoize
