const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args, tools) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setDescription(`
**Davet Komutları**
\`${prefix}addInvite\` Davet Eklersiniz.
\`${prefix}removeInvite\` Davet Silersiniz.

\`${prefix}deleteRanks\` Rütbeleri Silersiniz.
\`${prefix}addRank\` Rütbe Eklersiniz.

\`${prefix}rank\` Davetinize Bakarsınız.
\`${prefix}ranks\` Rütbe Listesine Bakarsınız.

\`${prefix}log\` Giriş Ve Çıkış Davet Mesajlarının Atılacağı Kanalı Belirlersiniz.
\`${prefix}giriş-mesaj\` Giriş Mesajını Belirlersiniz.
\`${prefix}çıkış-mesaj\` Çıkış Mesajını Belilersiniz.

\`${prefix}kodlar\` Davet Giriş/Çıkış Mesaj Kodlarını Listeler.
\`${prefix}testJoin\` Giriş Mesajını Test Eder.
\`${prefix}testLeave\` Giriş Mesajını Test Eder.

**Bot**
\`${prefix}add-bot\` Botu Sunucunuza Eklemek İçin Link Atar.
\`${prefix}istatistik\` Botun İstatistiklerini Görüntülersiniz.
\`${prefix}prefix\` Botun Prefixini Değiştirirsiniz.
 
**Moderasyon Komutları**
\`${prefix}ban\` Etiketlediğiniz Kişiyi Sunucudan Yasaklar.
\`${prefix}sil\` Belirttiğini Miktarda Mesajı Siler.

**Linkler**
[Botu Sunucuna Ekle](https://bit.ly/InviteRecorder) [Destek Sunucuma Katıl](https://discord.gg/QmstbTT)`)
  
    .setTitle("Yardım Menüsü")
    .setThumbnail(client.user.avatarURL);

  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help", "yardım", "Yardım"],
  permLevel: 0
};

exports.help = {
  name: "Help"
};
