var http = require("http"),
	// if the environment PORT is set up,
	// listen on that one, otherwise listen
	// on port 3000
	port = process.env.PORT || 3000;

var server = http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end("<h2>Hello from Cloud Foundry!</h2>");
});

server.listen(port);

console.log("Server listening on port " + port);