const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = express.static(path.join(__dirname, '/index.html'))

    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}