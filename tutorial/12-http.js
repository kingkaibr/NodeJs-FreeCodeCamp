const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Welcome to our about page')
    }
    if (req.url != `about` && req.url != '/'){
        res.end(`
            <h1> Oops! </h1>
            <p> We can't seem to find the page you are looking for </p>
            <a href='/'> back home </a>
        `)
    }
})

server.listen(3000, () => {
    console.log('Server running on the port 3000')
}) 