const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

app.get('/greeting/:name', (req, res) => {
    res.send(`<h2>What's up, ${req.params.name.toUpperCase()}? It's nice to see you</h2>`)
})

app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
})