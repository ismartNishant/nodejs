const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    console.log(req.url);
    if (req.url == '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('my.html');
        res.end(data.toString());
    }
    else if (req.url == '/lisa') {
        res.statusCode = 200;
        res.end('<h1> Say alisa love me</h1> <p>i love lalisa monoban so much</p>');
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> Nishant loves nancy </h1> <p> and lalisa monoban so much</p>');
    }
    else if (req.url == '/about-me') {
        res.statusCode = 301;
        //this is redirecting
        res.setHeader("Location","/about")
        res.end();
    }

    else {
        res.statusCode = 404;
        res.end('<h1> not found on server</h1>');

    }
})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});