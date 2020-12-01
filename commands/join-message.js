const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db");

exports.run = async function (client, message, args) {

  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!')
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  
  let mesaj = args.slice(0).join(' ')
  
  if(!mesaj) {
    
    let embed = new Discord.RichEmbed()
    .setTitle(':x: Bir Giriş Mesajı Belirtiniz')
    .setDescription(`:white_check_mark: Örnek Kullanım ${prefix}giriş-mesaj -üye-etiket- hoşgeldin onu davet eden -davetçi-isim- davet sayısı -davet-`)
    .setColor("RED")
  return message.channel.send(embed)
  }
  let kanal = await db.fetch(`davetkanal1_${message.guild.id}`)
  db.set(`girismesaj_${message.guild.id}`, mesaj)

  let embed2 = new Discord.RichEmbed()
  .setTitle(':white_check_mark: Başarıyla Tamamlandı')
  .setDescription(`Yeni Davet Giriş Mesajı: 
\`\`\`${mesaj}\`\`\`

Giriş Davet Mesaj Kanalı:
 <#${kanal}>`)
  .setColor("RED")
  message.channel.send(embed2)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['joinMessage'],
  permLevel: 0
};

exports.help = {
  name: 'giriş-mesaj',
  description: '',
  usage: ''
};