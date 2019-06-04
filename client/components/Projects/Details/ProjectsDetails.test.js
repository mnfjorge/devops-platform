import React from 'react'
import ReactDOM from 'react-dom'
import ProjectsDetails from './ProjectsDetails'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProjectsDetails />, div)
  ReactDOM.unmountComponentAtNode(div)
})
