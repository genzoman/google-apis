var Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
var googleAuthFactory = require("./googleAuthFactory");

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

  static for(opts) {
    ///todo
  }
}

module.exports = Token;


