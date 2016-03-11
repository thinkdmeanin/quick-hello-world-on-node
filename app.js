var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.listen(12345, function () {
	console.log('app is listening at port 12345');
});

