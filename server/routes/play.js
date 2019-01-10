var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET users listing. */
router.get('/play/:id', function(req, res, next) {
  var app = require('../app');
  var s = app.get('scanner');
  var path = s.getPathById(req.params.id);
  console.log("Param " + req.params.id + " path " + path);

  if (path === null) {
    res.end(404);
  } else {
    var inputStream = fs.createReadStream(path);
    inputStream.pipe(res);
  }
});

router.get('/list', function(req, res, next) {
    var app = require('../app');
    var s = app.get('scanner');
    var l = s.getFileList();
    res.json( l );
});

module.exports = router;
