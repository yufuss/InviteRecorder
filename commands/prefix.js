const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let prefix = args.slice(0).join(" ");
  if (!prefix) {
    const hayda = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(`Lütfen bir prefix belirtiniz!`)
  .setAuthor(`Hatalı Giriş`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(hayda);
    return;
  }
  const emirhansarac = new Discord.RichEmbed()
    .setColor("#0BF3B7")
      .setDescription(`Prefix; \`${prefix}\` olarak ayarlandı!`)
  .setAuthor(`Başarılı`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     

    message.channel.send(emirhansarac);
  db.set(`prefix_${message.guild.id}`, prefix)
};
//BUMBEGABRAK
module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "sunucu"
};

module.exports.help = {
  name: "prefix",
  description: "prefix",
  usage: "prefix"
};
