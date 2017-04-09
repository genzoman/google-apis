var Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
var googleAuthFactory = require("./googleAuthFactory");
const rl = require("readline");

class Token {
  constructor(opts) {
    this.auth = {};
    this.tokenPath = opts.tokenPath || "";
    this.secretPath = opts.secretPath || "";

  }
  async read() {
    let credentials = await fs.readFileAsync(this.tokenPath, "utf-8");
    return JSON.parse(credentials);
  }

  async secrets() {
    let secrets = await fs.readFileAsync(this.secretPath, "utf-8");
    return JSON.parse(secrets);
  }

  async authClient() {
    let secrets = await this.secrets();
    this.auth = googleAuthFactory(secrets);
    let credentials = await this.read();
    this.auth.credentials = credentials
    return this.auth;
  }

  async for(scope) {
    let auth = await this.authClient();
    let authUrl = auth.generateAuthUrl({
      access_type: "offline",
      scope: scope
    });

    console.log("Authorize this app by visiting: ", authUrl);
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    let newTokenPromise = new Promise(resolve => {
      rl.question('Enter the code from that page here: ', function (code) {
        rl.close();
        auth.getToken(code, function (err, token) {
          if (err) {
            console.log('Error while trying to retrieve access token', err);
            return;
          }
          auth.credentials = token;
          return resolve(auth);
        });
      });
    }, reject => {
      console.log("some error");
    })
    return newTokenPromise;
  }
}

module.exports = Token;


