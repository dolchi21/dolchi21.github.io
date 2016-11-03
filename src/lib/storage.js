import store from 'store';

var defaultNamespace = typeof window !== 'undefined' ? window.location.pathname : 'node';

function Storage(namespace = defaultNamespace, options = {}){

	var self = this;

	self._namespace = namespace;
	self._expires = options.expires || 0.01

	function set(key, value){
		var old_data = store.get(self._namespace);
		var new_data = Object.assign({}, old_data, {
			[key] : value
		});
		
		store.set(self._namespace, new_data);
		store.set(self._namespace + '.updatedAt', Date.now());

		return self;
	}
	function get(key){
		var data = store.get(self._namespace) || {}
		if (key === undefined) {
			return data;
		}
		return data[key];
	}

	(function eraseIfOld(namespace){
		
		var now = Date.now();
		var updatedAt = store.get(namespace + '.updatedAt') || 1000;

		if (!updatedAt) { return; }

		var diff = now - updatedAt;
		var max_age = 1000 * 60 * self._expires;
		if (max_age < diff) {
			store.set(namespace, {});
			store.set(namespace + '.updatedAt', Date.now());
		}

	})(self._namespace);

	this.set = set;
	this.get = get;

}

export default Storage
