const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write(`
        
        <html>
        <head>
            <title>Assignment | Node Complete Guide Section 2</title>
        </head>
        <body>
            <h1>Create an account</h1>
            <form action="/create-user" method="POST">
                <input type="text" name="username" placeholder="Enter Username" />
                <button type="submit">Create User</button>
            </form>
        </body>
        </html>
        
        `)
        return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html')
        res.write(`
        
        <html>
        <head>
            <title>Assignment | Node Complete Guide Section 2</title>
        </head>
        <body>
            <ul>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
                <li>User 4</li>
            </ul>
        </body>
        </html>
        
        `)
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            const username = parsedBody.split('=')[1]
            console.log(`Username: ${username}`)
            setTimeout(() => {
                res.statusCode = 302;
                res.setHeader('Location', '/')
                res.end();
            }, 2000)
            
        })
    }

}

module.exports = requestHandler;