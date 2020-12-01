const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
      .setDescription("Yetersiz Yetki Gereken Yönetici Yetkisi")
      .setColor("BLUE")
      .setTitle("UYARI")
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL);

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

  if (js1) {
    await db.delete("js1_" + message.guild.id);
    await db.delete("js11_" + message.guild.id);
  }
  if (js2) {
    await db.delete("js2_" + message.guild.id);
    await db.delete("js22_" + message.guild.id);
  }
  if (js3) {
    await db.delete("js3_" + message.guild.id);
    await db.delete("js33_" + message.guild.id);
  }
  if (js4) {
    await db.delete("js4_" + message.guild.id);
    await db.delete("js44_" + message.guild.id);
  }
  if (js5) {
    await db.delete("js5_" + message.guild.id);
    await db.delete("js55_" + message.guild.id);
  }
  if (js6) {
    await db.delete("js6_" + message.guild.id);
    await db.delete("js66_" + message.guild.id);
  }
  if (js7) {
    await db.delete("js7_" + message.guild.id);
    await db.delete("js77_" + message.guild.id);
  }
  if (js8) {
    await db.delete("js8_" + message.guild.id);
    await db.delete("js88_" + message.guild.id);
  }
  if (js9) {
    await db.delete("js9_" + message.guild.id);
    await db.delete("js99_" + message.guild.id);
  }
  if (js10) {
    await db.delete("js10_" + message.guild.id);
    await db.delete("js100_" + message.guild.id);
  }
  if (!js1) {
    const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setTitle("BAŞARILI")
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL)

      .setDescription("Zaten Hiç Davet ile Verilen Rol Ayarlanmamış!");
    message.channel.send(embed);
  } else {
    const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setTimestamp()
      .setTitle("BAŞARILI")
      .setFooter(client.user.username, client.user.avatarURL)

      .setDescription("Başarıyla Bütün Davet ile Alınan Roller Silindi!");
    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["deleteranks", "removeranks", "removeRanks"],
  permLevel: 0
};
exports.help = {
  name: "deleteRanks",
  description: "rütbe-sil",
  usage: "rütbe-sil"
};
