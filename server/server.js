const 	express = require('express'),
		http = require('http'),
		app = express(),
		bodyParser = require('body-parser'),
		port = process.env.PORT || 8080;

app.use('/', express.static(__dirname + '/../client/'));
app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});