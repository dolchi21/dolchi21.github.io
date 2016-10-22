import axios from 'axios'
import memoize from 'memoize'

export const load = memoize(function load(){
	return axios.get('/api/client.json').then(function(response){
		return response.data
	})
});
