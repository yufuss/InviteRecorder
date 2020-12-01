const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
      .setDescription("Yetersiz Yetki Gereken Yönetici Yetkisi")
      .setColor("BLUE")
      .setTitle("UYARI")
      .setTimestamp()
      .setFooter(bot.user.username, bot.user.avatarURL)
      .setThumbnail(bot.user.avatarURL);
    return message.channel.send(embed);
  }
  if (!args[0])
    return message.channel.send(
      new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle("UYARI")
        .setFooter(bot.user.username, bot.user.avatarURL)

        .setTimestamp()
        .setDescription(
          `Hatalı Kullanım\n\n\`${prefix}log giriş-ayarla #kanal\`\n\`${prefix}log giriş-sıfırla\`\n\n\`${prefix}log çıkış-ayarla #kanal\`\n\`${prefix}log çıkış-sıfırla\``
        )
    );
  if (args[0] === "giriş-ayarla") {
    let log;
    const etiket = message.mentions.channels.first();
    const id = message.guild.channels.get(args[0]);
    const isim = message.guild.channels.find(
      m => m.name === args.slice(0).join(" ")
    );
    if (etiket) {
      log = etiket;
    }
    if (id) {
      log = id;
    }
    if (isim) {
      log = isim;
    }
    if (!etiket && !id && !isim) {
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("BLUE")
          .setTitle("UYARI")
          .setFooter(bot.user.username, bot.user.avatarURL)
          .setTimestamp()
          .setDescription(
            `Giriş Logu Ayarlamak İçin Bir Kanal Etiketlemelisin!`
          )
      );
    }
    await db.set("davetkanal1_" + message.guild.id, log.id);
    return message.channel.send(
      new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle("BAŞARILI")
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setTimestamp()
        .setDescription(`${log} İsimli Kanal Giriş Logu Olarak Ayarlandı!`)
    );
  }

  if (args[0] === "giriş-sıfırla") {
    await db.delete("davetkanal1_" + message.guild.id);
    return message.channel.send(
      new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle("BAŞARILI")
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setTimestamp()
        .setDescription(`Başarıyla Giriş Logu Sıfırlandı!`)
    );
  }

  if (args[0] === "çıkış-ayarla") {
    const log = message.mentions.channels.first();
    if (!log)
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("BLUE")
          .setTitle("UYARI")
          .setFooter(bot.user.username, bot.user.avatarURL)
          .setTimestamp()
          .setDescription(
            `Çıkış Logu Ayarlamak İçin Bir Kanal Etiketlemelisin!`
          )
      );
    await db.set("davetkanal2_" + message.guild.id, log.id);
    return message.channel.send(
      new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle("BAŞARILI")
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setTimestamp()
        .setDescription(`${log} İsimli Kanal Çıkış Logu Olarak Ayarlandı!`)
    );
  }
  if (args[0] === "çıkış-sıfırla") {
    await db.delete("davetkanal2_" + message.guild.id);
    return message.channel.send(
      new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle("BAŞARILI")
        .setFooter(bot.user.username, bot.user.avatarURL)

        .setTimestamp()
        .setDescription(`Başarıyla Çıkış Logu Sıfırlandı!`)
    );
  }
};

module.exports.conf = {
  aliases: ["inviteLog", "invitelog"],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "log",
  description: "davet-kanal",
  usage: "davet-kanal"
};
