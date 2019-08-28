const express = require('express')


const port = 3000

const app = express()
app.use(express.static('./public'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "locahost")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.listen(port, () => { console.log(`Listening on port ${port}`) })