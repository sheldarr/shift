var bodyParser = require('body-parser');
var express = require('express');

var app = express();      

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8088;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'OK' });   
});

app.use('/api', router);

app.listen(port);
console.log('Shift api is running on port: ' + port);