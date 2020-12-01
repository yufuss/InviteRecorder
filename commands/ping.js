
const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    const hayda = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(`
Pingim: ${client.ping} MS
`)
    message.channel.send(hayda)
    }
//BUMBEGABRAK
module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ping'],
  permLevel: 0,
  kategori: "kullanıcı"
};

module.exports.help = {
  name: "Ping",
  description: "",
  usage: ""
};