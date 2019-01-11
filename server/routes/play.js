var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET users listing. */
router.get('/play/:id', function(req, res, next) {
  var app = require('../app');
  var s = app.get('scanner');
  var path = s.getPathById(parseInt(req.params.id),10);
  console.log("Param " + req.params.id + " path " + path);

  if (path === null) {
    res.end(404);
  } else {


    if (req.headers.range) {
      var stat = fs.statSync(path);
      var total = stat.size;
      var range = req.headers.range;
      var parts = range.replace(/bytes=/, "").split("-");
      var partialstart = parts[0];
      var partialend = parts[1];

      var start = parseInt(partialstart, 10);
      var end = partialend ? parseInt(partialend, 10) : total - 1;
      var chunksize = (end - start) + 1;
      var readStream = fs.createReadStream(path, {
        start: start,
        end: end
      });
      res.writeHead(206, {
        'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4'
      });
      readStream.pipe(res);
    } else {
      var inputStream = fs.createReadStream(path);
      inputStream.pipe(res);
    }

  }
});

router.get('/list', function(req, res, next) {
  var app = require('../app');
  var s = app.get('scanner');
  var l = s.getFileList();
  res.json(l);
});

module.exports = router;
