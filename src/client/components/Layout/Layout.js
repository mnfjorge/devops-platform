import React from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Home/Home'
import ProjectsCreate from '../Projects/Create/ProjectsCreate'
import ProjectsDetails from '../Projects/Details/ProjectsDetails';

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
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" exact activeClassName="active" to="/projects">List</NavLink>
                <NavLink className="dropdown-item" activeClassName="active" to="/projects/create">Create</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects/create" exact component={ProjectsCreate} />
          <Route path="/projects/:id" exact component={ProjectsDetails} />
          <Route path="/projects" exact render={() => (<Redirect to="/projects/1" />)} />
        </Switch>
      </div>
    </div>
  )
}