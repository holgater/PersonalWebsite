var http = require('http');
//var sqlite = require('sqlite3');

//var database = new sqlite.Database(__dirname + '/db/database.sqlite');

http.createServer(function(req, res) {
	res.write("hellow orld");
	res.end();
}).listen(10293);

