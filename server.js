const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

app.get('/greeting/:name', (req, res) => {
    res.send(`<h2>What's up, ${req.params.name.toUpperCase()}? It's nice to see you</h2>`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`<h3>From $${req.params.total}: A ${req.params.tipPercentage}% tip would come out to $${(req.params.total) * (req.params.tipPercentage / 100.0)}</h3>`)
})

app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
})