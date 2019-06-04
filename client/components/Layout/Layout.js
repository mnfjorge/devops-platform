import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import ProjectsCreate from '../Projects/Create/ProjectsCreate'

import './Layout.css'

export default function Layout() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">DevOps Platform</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/projects/create">Create Project</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects/create" exact component={ProjectsCreate} />
        </Switch>
      </div>
    </div>
  )
}