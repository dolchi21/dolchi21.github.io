import axios from 'axios'
import memoize from 'memoize'

function all(options){
	return axios.get('/api/products/all.json')
}

export var all = memoize(all)
