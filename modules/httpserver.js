const http = require('http');
const fs = require('fs');
const res = require('express/lib/response');
//creating thr server
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log(req.url);
    //taking response from thr server
    res.setHeader('Content-Type', 'text/html');
    // res.write("Nancy is mine")
    // res.write("<h2> Momoland is the best</h2>")
    // res.end('<h1> Say lalisa love me again </h1> <p>I love lalisa monoban so much</p>');
    // taking response as html file
    fs.readFile('./my.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            // res.write(data)
            res.end(data);
        }
    })
})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});