const Discord = require("discord.js");


exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(':no_entry: Bu komudu kullanabilmek için **Mesajları Yönet** yetkisine sahip olman gerek')
  if(!args[0]) return message.reply("`1 - 5000` Arasında Bir Değer Girmelisiniz.");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`**${args[0]} Mesaj Temizlendi.**`).then(msg => msg.delete(5000));
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'sil',
  description: '',
  usage: '',
}