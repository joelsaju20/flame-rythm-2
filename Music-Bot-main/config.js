module.exports = {
    Admins: ["flamy_burns#6666", "flamy_burns#6666"], //Admins of the bot
    ExpressServer: false,
    DefaultPrefix: process.env.Prefix || "", 
    Port: 3000, //Which port website gonna be hosted
    SupportServer: "https://discord.gg/jxwpDMFUEJ", //Support Server Link
    Token: process.env.Token || "", //Discord Bot Token
    ClientID: process.env.Discord_ClientID || "", //Discord Client ID
    ClientSecret: process.env.Discord_ClientSecret || "", //Discord Client Secret
    Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
    CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
    "24/7": true, //If you want the bot to be stay in the vc 24/7
    CookieSecret: "Pikachu is cute", //A Secret like a password
    IconURL:
      "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
    Permissions: 2205280576, //Bot Inviting Permissions
    Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  
    //Please go to https://developer.spotify.com/dashboard/
    Spotify: {
      ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
      ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
    },
  };
