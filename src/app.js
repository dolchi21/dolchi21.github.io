import React from 'react'
import ReactDOM from 'react-dom'

import Chaffle from 'react-chaffle'

var Spinner = () => <i className="fa fa-spinner fa-pulse"/>

var App = (
	<span>
		<Spinner/>
		<Chaffle> Loading something ...</Chaffle>
	</span>
	)

export default App

export function mount(id = 'app'){
	var el = document.getElementById(id)
	ReactDOM.render(App, el)
}