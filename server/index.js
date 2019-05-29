import express from 'express'
import path from 'path'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import Layout from '../client/components/Layout/Layout'
import auth from './auth'

const app = express()

const port = process.env.PORT || 3000

const authenticated = (req, res, next) => {
  if (req.user) {
    next()
    return
  }

  res.redirect('/auth/google')
}

auth(app)

app.use(express.static('dist'))

app.get('/*', authenticated, (req, res) => {
  const context = {}
  const jsx = (
    <StaticRouter context={context} location={req.url}>
      <Layout />
    </StaticRouter>
  )
  const reactDom = renderToString(jsx)

  res.status(200).type('html').send(htmlTemplate(reactDom))
})

app.listen(port, () => {
  console.info(`Server listening on port ${port}`)
})

const htmlTemplate = reactDom => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Platform</title>
    </head>
    
    <body>
        <div id="root">${reactDom}</div>
        <script src="./client.js"></script>
    </body>
    </html>
  `
}