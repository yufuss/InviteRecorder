const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db");

exports.run = async function (client, message, args) {

  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!')

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  let mesaj = args.slice(0).join(' ')
  
  if(!mesaj) {
    
    let embed = new Discord.RichEmbed()
    .setTitle(':x: Bir Çıkış Mesajı Belirtiniz')
    .setDescription(`:white_check_mark: Örnek Kullanım ${prefix}çıkış-mesaj -üye-isim- gitti onu davet eden -davetçi-isim- kalan davet sayısı -davet-`)
    .setColor("RED")
  return message.channel.send(embed)
  }
    let kanal = await db.fetch(`davetkanal2_${message.guild.id}`)
  db.set(`cikismesaj_${message.guild.id}`, mesaj)

  let embed2 = new Discord.RichEmbed()
  .setTitle(':white_check_mark: Başarıyla Tamamlandı')
  .setDescription(`Yeni Davet Çıkış Mesajı:
\`\`\`${mesaj}\`\`\` 

Giriş Davet Mesaj Kanalı:
 <#${kanal}>`)
  .setColor("RED")
  message.channel.send(embed2)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['leaveMessage'],
  permLevel: 0
};

exports.help = {
  name: 'çıkış-mesaj',
  description: '',
  usage: ''
};