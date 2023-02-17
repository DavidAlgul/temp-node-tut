const http = require('http');

const server = http.createServer((req,res) => { //Beide Parameter in der Callback Funktionen sind Objekte, die man nennen kann wie man möchte.
// Der erste Parameter repräsentiert den Incoming Request (zb vom Client). Der Response ist, was wir zurücksennden
    if (req.url === "/"){
    res.write("Welcome to our home  Page")
}
if (req.url === "/about"){
    res.write("Here is our shot history")
}

res.write(`<h1>Ooops!<h1>
    <p>We cant seem to find the page you are looking for </p>
    <a href ="/">back home </a>
`); // Um den Response zu beenden

})

server.listen(3000)