var Token = require("./token");
var google = require("googleapis");
const SECRET_PATH = "./secrets.json";
const TOKEN_PATH = "./client_secret.json";

const token = new Token({
  tokenPath: TOKEN_PATH,
  secretPath: SECRET_PATH
});
let authorize = async (token) => {
  let authClient = await token.authClient();
  return authClient;
}

authorize(token)
  .then(auth => {
    var gmail = google.gmail('v1');
    gmail.users.labels.list({
      auth: auth,
      userId: 'me',
    }, function (err, response) {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      var labels = response.labels;
      if (labels.length == 0) {
        console.log('No labels found.');
      } else {
        console.log('Labels:');
        for (var i = 0; i < labels.length; i++) {
          var label = labels[i];
          console.log('- %s', label.name);
        }
      }
    });
  })
