/* HTTP Server */

express = require('express')
  , http = require('http')
  , port = 8080
  , app = express()
  , bodyParser = require('body-parser')
  , server = http.createServer(app).listen(port, 'localhost', function() {
    console.log('Server listening on ' + port);
  });

/* Web Host */
app.use('/', express.static(__dirname + '/../client/'));
app.use(bodyParser.json());
