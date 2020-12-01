const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    const hayda = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(`
-üye-etiket- Sunucuya giren/çıkan kişiyi etiketler.

-üye-isim- Sunucuya giren/çıkan kişinin ismini söyler.

-sunucu-adı- Sunucunun ismini söyler.

-davet- Davet eden kişinin kaç daveti olduğunu söyler.

-davetçi-isim- Davet Eden Kişinin İsmini Söyler.

-davetçi-etiket- Davet Eden Kişiyi Etiketler.

-kişi-sayısı- Sunucudaki Kişi Sayısını Gösterir.
`)
    message.channel.send(hayda)
    }
//BUMBEGABRAK
module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kodlar'],
  permLevel: 0,
  kategori: "kullanıcı"
};

module.exports.help = {
  name: "kod-listesi",
  description: "",
  usage: ""
};