import React from 'react'

const PROGRESS_SIZE = {
  "WAITING": 10,
  "IN_PROGRESS": 50,
  "ERROR": 100,
  "DONE": 100
}

const PROGRESS_COLORS = {
  "WAITING": "bg-warning",
  "IN_PROGRESS": "progress-bar-striped",
  "ERROR": "bg-danger",
  "DONE": "bg-success"
}

export default function ProjectsDetails({ match }) {
  const project = {
    id: match.params.id,
    name: 'Test Project',
    steps: [
      {
        name: 'Create group in GSuite',
        status: 'DONE'
      },
      {
        name: 'Create project in GCP',
        status: 'DONE'
      },
      {
        name: 'Create repository',
        status: 'IN_PROGRESS'
      },
      {
        name: 'Create credentials',
        status: 'WAITING'
      },
      {
        name: 'Assign credentials',
        status: 'WAITING'
      },
    ]
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>Check the project details below</p>
      <div>
        {project.steps.map((item, index) => {
          const size = PROGRESS_SIZE[item.status].toString()
          return (
            <div className="mb-1" key={index}>
              <p>{item.name}</p>
              <div className="progress">
                <div className={["progress-bar", PROGRESS_COLORS[item.status]].join(' ')} style={{ width: size + "%" }} role="progressbar" aria-valuenow={size} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}