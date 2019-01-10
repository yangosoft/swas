  const NodeID3 = require('node-id3');
class Scanner {


  constructor(lstPath) {
    this.lstPath = lstPath;
    this.lstFiles = [];
  }

  scan() {
    this.lstPath.forEach(p => {
      //console.log(p);
      this.walkSync(p, this.lstFiles);
    });
  }

  walkSync(dir, filelist) {
    var that = this;
    var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
      if (fs.statSync(dir + file).isDirectory()) {
        filelist = that.walkSync(dir + file + '/', filelist);
      } else {

        if (file.endsWith("mp3")) {
          var tags = {
            title: "unkwnow",
            album: "unkwnow",
            artist: "unkwnow"
          };
        /*  try {
            tags = NodeID3.read(dir+file);
          } catch (e) {
              console.error(e);
          } finally {

          }*/

          //console.log(tags);
          let p = {
            title: file,
            id: filelist.length,
            path: dir + file,
            tags: tags
          };

          filelist.push(p);
        }


      }
    });
    return filelist;
  }

  getPathById(id) {
    if (id >= this.lstFiles.length) {
      console.error("id doesn't exists");
      return null;
    }
    return this.lstFiles[id].path;
  }

  getFileList() {
    return this.lstFiles;
  }


};



module.exports = Scanner;
