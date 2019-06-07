import express from 'express'
import path from 'path'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.dev'
import auth from './auth'

const app = express()

const bundler = webpack(webpackConfig)
app.use(webpackDevMiddleware(bundler, {
  filename: webpackConfig.output.filename,
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  stats: {
    colors: true
  }
}))
app.use(webpackHotMiddleware(bundler, {
  log: console.log
}))

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
  const Layout = require('../client/components/Layout/Layout').default
  
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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    
    <body>
        <div id="root">${reactDom}</div>
        <script src="./client.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>
  `
}