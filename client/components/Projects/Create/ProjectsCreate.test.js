import React from 'react'
import ReactDOM from 'react-dom'
import ProjectsCreate from './ProjectsCreate'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProjectsCreate />, div)
  ReactDOM.unmountComponentAtNode(div)
})
