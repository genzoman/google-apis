var googleAuth = require("google-auth-library");

let googleAuthFactory = (secrets) => {
  let auth = new googleAuth();
  let oauth2Client = new auth.OAuth2(
    secrets.web.client_id,
    secrets.web.client_secret,
    secrets.web.redirect_uris[0]
  );

  return oauth2Client;
}
module.exports =  googleAuthFactory;
