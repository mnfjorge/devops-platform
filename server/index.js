import express from 'express'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Layout from '../client/components/Layout'

const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, '../dist')))

app.get('*', (req, res) => {
  const jsx = (<Layout />)
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
        <script src="./app.bundle.js"></script>
    </body>
    </html>
  `
}