const express = require('express')
const app = express()
const path = require('path');


app.use(express.static(path.join(__dirname, '../leaders-and-laggards-angularjs/public')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../leaders-and-laggards-angularjs/public/index.html')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

