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
          let p =
          {
            title:  dir + file,
            id: filelist.length
          };

        filelist.push(p);

        //console.log(dir + file);
      }
    });
    return filelist;
  }

  getPathById(id)
  {
    if(id >= this.lstFiles.length)
    {
      return null;
    }
    return this.lstFiles[id];
  }

  getFileList()
  {
    return this.lstFiles;
  }


};



module.exports = Scanner;
