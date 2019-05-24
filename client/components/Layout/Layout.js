import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'

import './Layout.css'

export default function Layout() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </div>
  )
}