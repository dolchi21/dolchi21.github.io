import React from 'react'
import ReactDOM from 'react-dom'

import Chaffle from 'react-chaffle'

var App = (<Chaffle>Almost simplest app ever!</Chaffle>)

export default App

export function mount(id = 'app'){
	var el = document.getElementById(id)
	ReactDOM.render(App, el)
}