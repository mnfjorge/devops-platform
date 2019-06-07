import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/Layout/Layout'

ReactDOM.hydrate(
  <Router>
    <Layout />
  </Router>
  , document.getElementById('root'))