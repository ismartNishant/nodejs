const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const data = fs.readFileSync('my.html');
    res.send(data.toString());
})
app.get('/about', (req, res) => {
    res.send('Welocome to the world of Webdev!')
})

app.get('/lisa', (req, res) => {
    res.send('<h1>Say lalisa love me</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})