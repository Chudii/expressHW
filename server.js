const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

// Magic 8 Ball Responses
const answer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"] 


app.get('/greeting/:name', (req, res) => {
    res.send(`<h2>What's up, ${req.params.name.toUpperCase()}? It's nice to see you</h2>`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`<h3>From $${req.params.total}: A ${req.params.tipPercentage}% tip would come out to $${(req.params.total) * (req.params.tipPercentage / 100.0)}</h3>`)
})

app.get('/magic/:question', (req, res) => {
    res.send(`<h3>${answer[Math.floor(Math.random() * answer.length) - 1]}</h3>`)
})

app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
})