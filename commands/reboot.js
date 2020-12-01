const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== ayarlar.owner)
    return message.channel.send(
      "Only The Owner Of The Bot Can Use This Command!"
    );

  message.channel.sendMessage(`Operation Successful Bot Restarted!`);
  message.delete(60).then(msg => {
    console.log(`✅ | Bot Restarted!`);

    process.exit(0);
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r", "reboot"],
};

module.exports.help = {
  name: "reboot",
  description: "",
  usage: "reboot"
};
