import * as  _ from "lodash";
import * as Request from "request";
let getPromise = () => {
  return new Promise(resolve => {
    Request.get("http://www.google.com", (err, data) => {
      resolve(data);
    });
  });

}

class Google {
  async get() {
    var data = await getPromise();
    return data += "skinrevin";
  }
}

