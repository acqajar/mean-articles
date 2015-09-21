var express = require('express');
var app = express();
var mongoose   = require('mongoose');
var bodyParser = require('body-parser'); // express is an extremely minimalist framework so we need body-parser to help us handle req.body
var apiRouter = require('./app/config/routes');
var articlesController = require('./app/controllers/articles')


// configure body-parser so we can work with request.body
app.use(bodyParser.urlencoded({ extended: true })); // handle urleconded bodies; extended true means in any form (not just key-value pairs)
app.use(bodyParser.json()); // only parsing json




var DB = process.env.MONGOLAB_URI || "mongodb://localhost:27017/articles-app"



// connect to DB which is on port 27017
mongoose.connect(DB);








// apply router middleware or wont work!
app.use('/api', apiRouter);


// define port
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/public'));
app.listen(port);



// entry point for client side 
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/app/public/index.html');
});



console.log('Server is running on port', port);




