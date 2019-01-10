var express = require('express');
var router = express.Router();

var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.end('OK');
});


router.get('/a.mp3', function(req, res, next) {
    var inputStream = fs.createReadStream(process.env.HOME+'/Music/01 - A Million.mp3');
    inputStream.pipe(res);
});


module.exports = router;
