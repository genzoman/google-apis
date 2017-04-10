var exec = require("child_process").exec
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
var request = require("request");
// z
// function get(url, dest) {
//   let imagePromise = new Promise((resolve, reject)=> {
//     exec(`curl ${url} > ${dest}`, (err,data) => {
//       return resolve(data);
//     });
//   });
//   return imagePromise;
// }
var url = "https://lh3.googleusercontent.com/-SCOqsw5hQcY/WOq1kagTmCI/AAAAAAAAP4U/sBMdas7ZUVItsLIuPtzhFSlE29WVcoLKwCK8B/s512/403869038063832704%253Faccount_id%253D1";
var dest = "omg.png"
// module.exports = get;
// get(url, dest)
//   .then(data => {
//     var
//   });

// z
var chunk
class Image {
  constructor(opts) {
    this.isRemote = !!eopts.url
    this.filePath = opts.filePath;
    this.url = opts.url;
    this.chunk = "";
  }
  async get() {
    if (isRemote) {
      return new Promise(resolve => {
        return request.get(this.url, (err, response, body) => {
          return resolve(response);
        });
      });
    } else {
      return fs.readFileAsync(this.filePath, "utf-8")
        .then(data => data.toString("base64"));
    }
  }
}


request
  .get(url)
  .on('error', function(err) {
    console.log(err)
  })
  .on("data", (data) => {
    chunk += data;
  })
  .pipe(fs.createWriteStream('doodle5.png'))

  .on("finish", (a, b, c) => {
    chunk;
    debugger;
  });

//https://lh3.googleusercontent.com/-SCOqsw5hQcY/WOq1kagTmCI/AAAAAAAAP4U/sBMdas7ZUVItsLIuPtzhFSlE29WVcoLKwCK8B/s512/403869038063832704%253Faccount_id%253D1
