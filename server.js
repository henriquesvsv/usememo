const http = require('http');
const host = 'http://localhost';
const port = 3000;
const status = require(`./pcramusage.js`)
http.createServer((req, res) => {
    let url = req.url;
    if(url ==="/status"){
        res.end(JSON.stringify(status, null, 2));
    }
    else{`<h1>seja bem vindo<h1>`}
}).listen(port , () => console.log(`Server is Runing in ${host}:${port} `))