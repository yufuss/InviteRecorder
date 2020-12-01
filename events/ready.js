const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../config.json");
var prefix = ayarlar.prefix;

module.exports = client => {
  setInterval(function() {}, 8000);
  client.user.setPresence({
    game: {
      name: `Invite Recorder`,
      type: "WATCHING"
    },
    status: "online"
  });
  console.log(`[BOT]: Login! Commands Login! Made By Code Share!`);
};
