const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    const hayda = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription('[Botu Sunucuna Ekle!](https://discord.com/oauth2/authorize?client_id=772760768554598420&scope=bot&permissions=8)')
    message.channel.send(hayda)
    }

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "kullanıcı"
};

module.exports.help = {
  name: "add-bot",
  description: "",
  usage: ""
};
