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
    message.channel.send(embed);
    return;
  }

  let js1 = await db.fetch(`js1_${message.guild.id}`);
  let js2 = await db.fetch(`js2_${message.guild.id}`);
  let js3 = await db.fetch(`js3_${message.guild.id}`);
  let js4 = await db.fetch(`js4_${message.guild.id}`);
  let js5 = await db.fetch(`js5_${message.guild.id}`);
  let js6 = await db.fetch(`js6_${message.guild.id}`);
  let js7 = await db.fetch(`js7_${message.guild.id}`);
  let js8 = await db.fetch(`js8_${message.guild.id}`);
  let js9 = await db.fetch(`js9_${message.guild.id}`);
  let js10 = await db.fetch(`js10_${message.guild.id}`);

  let js11 = await db.fetch(`js11_${message.guild.id}`);
  let js22 = await db.fetch(`js22_${message.guild.id}`);
  let js33 = await db.fetch(`js33_${message.guild.id}`);
  let js44 = await db.fetch(`js44_${message.guild.id}`);
  let js55 = await db.fetch(`js55_${message.guild.id}`);
  let js66 = await db.fetch(`js66_${message.guild.id}`);
  let js77 = await db.fetch(`js77_${message.guild.id}`);
  let js88 = await db.fetch(`js88_${message.guild.id}`);
  let js99 = await db.fetch(`js99_${message.guild.id}`);
  let js100 = await db.fetch(`js100_${message.guild.id}`);
  let kişi;
  let l = message.mentions.members.first();
  let i = message.guild.members.get(args[0]);
  if (l) {
    kişi = l;
  }
  if (i) {
    kişi = i;
  }

  let m = args.slice(1).join(" ");
  if (!l && !i) {
    return message.channel.send(
      new Discord.RichEmbed()

        .setDescription("Kimden Davet Silinecek Yazmalısın!")
        .setColor("BLUE")
        .setTitle("UYARI")
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
  if (!m) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("Kaç Davet Silinecek Yazmalısın!")
        .setColor("BLUE")
        .setTitle("UYARI")
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
  await db.add(`davet_${kişi.id}_${message.guild.id}`, -m);
  await db.add(`bonus_${kişi.id}_${message.guild.id}`, -m);
  const davet = await db.get("davet_" + kişi.id + "_" + message.guild.id);
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle("BAŞARILI")
    .setTimestamp()
    .setFooter(bot.user.username, bot.user.avatarURL)

    .setDescription(
      `${kişi} İsimli Kişiden **${m}** Davet Silindi Toplam Daveti **${davet}**`
    );
  message.channel.send(embed);
  if (js11) {
    if (davet >= js11) {
      if (!kişi.roles.has(js1)) {
        kişi.addRole(js1);
      }
    }
  }
  if (js22) {
    if (davet >= js22) {
      if (!kişi.roles.has(js2)) {
        kişi.addRole(js2);
      }
    }
  }
  if (js33) {
    if (davet >= js33) {
      if (!kişi.roles.has(js3)) {
        kişi.addRole(js3);
      }
    }
  }
  if (js44) {
    if (davet >= js44) {
      if (!kişi.roles.has(js4)) {
        kişi.addRole(js4);
      }
    }
  }
  if (js55) {
    if (davet >= js55) {
      if (!kişi.roles.has(js5)) {
        kişi.addRole(js5);
      }
    }
  }
  if (js66) {
    if (davet >= js66) {
      if (!kişi.roles.has(js6)) {
        kişi.addRole(js6);
      }
    }
  }
  if (js77) {
    if (davet >= js77) {
      if (!kişi.roles.has(js7)) {
        kişi.addRole(js7);
      }
    }
  }
  if (js88) {
    if (davet >= js88) {
      if (!kişi.roles.has(js8)) {
        kişi.addRole(js8);
      }
    }
  }
  if (js99) {
    if (davet >= js99) {
      if (!kişi.roles.has(js9)) {
        kişi.addRole(js9);
      }
    }
  }
  if (js100) {
    if (davet >= js100) {
      if (!kişi.roles.has(js10)) {
        kişi.addRole(js10);
      }
    }
  }
  if (js11) {
    if (davet < js11) {
      if (kişi.roles.has(js1)) {
        kişi.removeRole(js1);
      }
    }
  }
  if (js22) {
    if (davet < js22) {
      if (kişi.roles.has(js2)) {
        kişi.removeRole(js2);
      }
    }
  }
  if (js33) {
    if (davet < js33) {
      if (kişi.roles.has(js3)) {
        kişi.removeRole(js3);
      }
    }
  }
  if (js44) {
    if (davet < js44) {
      if (kişi.roles.has(js4)) {
        kişi.removeRole(js4);
      }
    }
  }
  if (js55) {
    if (davet < js55) {
      if (kişi.roles.has(js5)) {
        kişi.removeRole(js5);
      }
    }
  }
  if (js66) {
    if (davet < js66) {
      if (kişi.roles.has(js6)) {
        kişi.removeRole(js6);
      }
    }
  }
  if (js77) {
    if (davet < js77) {
      if (kişi.roles.has(js7)) {
        kişi.removeRole(js7);
      }
    }
  }
  if (js88) {
    if (davet < js88) {
      if (kişi.roles.has(js8)) {
        kişi.removeRole(js8);
      }
    }
  }
  if (js99) {
    if (davet < js99) {
      if (kişi.roles.has(js9)) {
        kişi.removeRole(js9);
      }
    }
  }
  if (js100) {
    if (davet < js100) {
      if (kişi.roles.has(js10)) {
        kişi.removeRole(js10);
      }
    }
  }
};

module.exports.conf = {
  aliases: [
    "davetsil",
    "deleteinvite",
    "removeinvite",
    "removeInvite",
    "removeinvites",
    "removeInvites"
  ],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "deleteInvite",
  description: "davet-sil",
  usage: "davet-sil"
};
