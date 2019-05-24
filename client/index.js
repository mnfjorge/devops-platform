import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout/Layout'
import * as serviceWorker from './serviceWorker'

ReactDOM.hydrate(<Layout />, document.getElementById('root'))

serviceWorker.unregister()
