import React from 'react'
import { useFormField } from '../../../hooks/input';

export default function ProjectsCreate() {
  const projectName = useFormField('')
  const projectEmails = useFormField('')

  function onSubmit(event) {
    console.log('Saving', {
      projectName: projectName.value,
      projectEmails: projectEmails.value
    })
    event.preventDefault()
  }

  return (
    <div>
      <h1>Create Project</h1>
      <p>Use the form below to create a project in GCP infrastructure</p>
      <form method="post" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="project-name">Project name</label>
          <input {...projectName} type="text" className="form-control" name="project-name" id="project-name" placeholder="Enter project name" />
        </div>
        <div className="form-group">
          <label htmlFor="project-emails">Users email addresses</label>
          <input {...projectEmails} type="text" className="form-control" id="project-emails" name="project-emails" placeholder="Enter email addresses separated by comma" />
        </div>
        <button type="submit" className="btn btn-primary">Begin project creation</button>
      </form>
    </div>
  )
}