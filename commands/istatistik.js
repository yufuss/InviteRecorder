const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const istatistikozel = new Discord.RichEmbed()
    .setColor(0x36393F)
.setTitle(`**${ client.user.username} İstatistikleri**`)

    .addField("Bellek Kullanımı ", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
  .addField("Sunucu Sayısı ", `${client.guilds.size.toLocaleString()}`)
  .addField("Toplam Kullanıcı Sayısı ", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`)
  .addField(" Kanal Sayısı ", `${client.channels.size.toLocaleString()}`)
  .addField(`Ne Kadar Süredir Aktif `, `${duration}`)
  .addField("Ping" , `${client.ping}`)
  .addField("Discord.js Sürümü ", `${Discord.version}`)  
  .addField(`Destek Sunucum`, `[Tıkla](https://discord.gg/QmstbTT)`)
  .addField(`Botu Davet Et`, `[Tıkla](https://bit.ly/InviteRecorder)`)
  message.channel.send(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};