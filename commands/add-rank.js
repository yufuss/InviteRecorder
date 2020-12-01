const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
      .setDescription("Yetersiz Yetki Gereken Yönetici Yetkisi")
      .setColor("BLUE")
      .setTitle("UYARI")
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL);
    message.channel.send(embed);
  } else {
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

  if (js10) {
    const embed = new Discord.RichEmbed()
      .setDescription(`En Fazla 10 Adet Davet ile Alınan Rol Eklene Bilir!`)
      .setColor("BLUE")
      .setTimestamp()
      .setTitle("UYARI")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }

  if (!js1) {
    let davet = args[1];
    let rol = message.mentions.roles.first();
    if (!rol) {
      const embed = new Discord.RichEmbed()
        .setDescription(`Davet ile Alınacak Rolü Yazmalısın!`)
        .setColor("BLUE")
        .setTimestamp()
        .setTitle("UYARI")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    }
    if (!davet) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `${rol} İsimli Rolün Kaç Davet Sayısına Ulaşıldığında Verileceğini Yazmalısın!`
        )
        .setColor("BLUE")
        .setTitle("UYARI")
        .setTimestamp()
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    }
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Artık ${rol} İsimli Rolü **${davet}** Davet Sayısına Ulaşan Herkese Vereceğim!`
      )
      .setColor("BLUE")
      .setTimestamp()
      .setTitle("BAŞARILI")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    await db.set(`js1_${message.guild.id}`, rol.id);
    await db.set(`js11_${message.guild.id}`, davet);
  } else {
    if (!js2) {
      let davet = args[1];
      let rol = message.mentions.roles.first();
      if (!rol) {
        const embed = new Discord.RichEmbed()
          .setDescription(`Davet ile Alınacak Rolü Yazmalısın!`)
          .setColor("BLUE")
          .setTitle("UYARI")
          .setTimestamp()
          .setFooter(client.user.username, client.user.avatarURL);

        message.channel.send(embed);
        return;
      }
      if (!davet) {
        const embed = new Discord.RichEmbed()
          .setDescription(
            `${rol} İsimli Rolün Kaç Davet Sayısına Ulaşıldığında Verileceğini Yazmalısın!`
          )
          .setColor("BLUE")
          .setTitle("UYARI")
          .setTimestamp()
          .setFooter(client.user.username, client.user.avatarURL);

        message.channel.send(embed);
        return;
      }
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Artık ${rol} İsimli Rolü **${davet}** Davet Sayısına Ulaşan Herkese Vereceğim!`
        )
        .setColor("BLUE")
        .setTitle("BAŞARILI")
        .setTimestamp()
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      await db.set(`js2_${message.guild.id}`, rol.id);
      await db.set(`js22_${message.guild.id}`, davet);
    } else {
      if (!js3) {
        let davet = args[1];
        let rol = message.mentions.roles.first();
        if (!rol) {
          const embed = new Discord.RichEmbed()
            .setDescription(`Davet ile Alınacak Rolü Yazmalısın!`)
            .setColor("BLUE")
            .setTitle("UYARI")
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL);

          message.channel.send(embed);
          return;
        }
        if (!davet) {
          const embed = new Discord.RichEmbed()
            .setDescription(
              `${rol} İsimli Rolün Kaç Davet Sayısına Ulaşıldığında Verileceğini Yazmalısın!`
            )
            .setColor("BLUE")
            .setTitle("UYARI")
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL);

          message.channel.send(embed);
          return;
        }
        const embed = new Discord.RichEmbed()
          .setDescription(
            `Artık ${rol} İsimli Rolü **${davet}** Davet Sayısına Ulaşan Herkese Vereceğim!`
          )
          .setColor("BLUE")
          .setTitle("BAŞARILI")
          .setTimestamp()
          .setFooter(client.user.username, client.user.avatarURL);

        message.channel.send(embed);
        await db.set(`js3_${message.guild.id}`, rol.id);
        await db.set(`js33_${message.guild.id}`, davet);
        return;
      } else {
        if (!js4) {
          let davet = args[1];
          let rol = message.mentions.roles.first();
          if (!rol) {
            const embed = new Discord.RichEmbed()
              .setDescription(`Davet ile Alınacak Rolü Yazmalısın!`)
              .setColor("BLUE")
              .setTitle("UYARI")
              .setTimestamp()
              .setFooter(client.user.username, client.user.avatarURL);

            message.channel.send(embed);
            return;
          }
          if (!davet) {
            const embed = new Discord.RichEmbed()
              .setDescription(
                `${rol} İsimli Rolün Kaç Davet Sayısına Ulaşıldığında Verileceğini Yazmalısın!`
              )
              .setColor("BLUE")
              .setTitle("UYARI")
              .setTimestamp()
              .setFooter(client.user.username, client.user.avatarURL);

            message.channel.send(embed);
            return;
          }
          const embed = new Discord.RichEmbed()
            .setDescription(
              `Artık ${rol} İsimli Rolü **${davet}** Davet Sayısına Ulaşan Herkese Vereceğim!`
            )
            .setColor("BLUE")
            .setTitle("BAŞARILI")
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL);

          message.channel.send(embed);
          await db.set(`js4_${message.guild.id}`, rol.id);
          await db.set(`js44_${message.guild.id}`, davet);
          return;
        } else {
          if (!js5) {
            let davet = args[1];
            let rol = message.mentions.roles.first();
            if (!rol) {
              const embed = new Discord.RichEmbed()
                .setDescription(`Davet ile Alınacak Rolü Yazmalısın!`)
                .setColor("BLUE")
                .setTitle("UYARI")
                .setTimestamp()
                .setFooter(client.user.username, client.user.avatarURL);

              message.channel.send(embed);
              return;
            }
            if (!davet) {
              const embed = new Discord.RichEmbed()
                .setDescription(
                  `${rol} İsimli Rolün Kaç Davet Sayısına Ulaşıldığında Verileceğini Yazmalısın!`
                )
                .setColor("BLUE")
                .setTitle("UYARI")
                .setTimestamp()
                .setFooter(client.user.username, client.user.avatarURL);

              message.channel.send(embed);
              return;
            }
            const embed = new Discord.RichEmbed()
              .setDescription(
                `Artık ${rol} İsimli Rolü **${davet}** Davet Sayısına Ulaşan Herkese Vereceğim!`
              )
              .setColor("BLUE")
              .setTitle("BAŞARILI")
              .setTimestamp()
              .setFooter(client.user.username, client.user.avatarURL);

            message.channel.send(embed);
            await db.set(`js5_${message.guild.id}`, rol.id);
            await db.set(`js55_${message.guild.id}`, davet);
          } else {
            if (!js6) {
              let davet = args[1];
              let rol = message.mentions.roles.first();
              if (!rol) {
                const embed = new Discord.RichEmbed()
                  .setDescription(`Davet ile Alınacak Rolü Yazmalısın!`)
                  .setColor("BLUE")
                  .setTitle("UYARI")
                  .setTimestamp()
                  .setFooter(client.user.username, client.user.avatarURL);

                message.channel.send(embed);
                return;
              }
              if (!davet) {
                const embed = new Discord.RichEmbed()
                  .setDescription(
                    `${rol} İsimli Rolün Kaç Davet Sayısına Ulaşıldığında Verileceğini Yazmalısın!`
                  )
                  .setColor("BLUE")
                  .setTitle("UYARI")
                  .setTimestamp()
                  .setFooter(client.user.username, client.user.avatarURL);

                message.channel.send(embed);
                return;
              }
              const embed = new Discord.RichEmbed()
                .setDescription(
                  `Artık ${rol} İsimli Rolü **${davet}** Davet Sayısına Ulaşan Herkese Vereceğim!`
                )
                .setColor("BLUE")
                .setTitle("BAŞARILI")
                .setTimestamp()
                .setFooter(client.user.username, client.user.avatarURL);

              message.channel.send(embed);
              await db.set(`js6_${message.guild.id}`, rol.id);
              await db.set(`js66_${message.guild.id}`, davet);
            } else {
              if (!js7) {
                let davet = args[1];
                let rol = message.mentions.roles.first();
                if (!rol) {
                  const embed = new Discord.RichEmbed()
                    .setDescription(`Davet ile Alınacak Rolü Yazmalısın!`)
                    .setColor("BLUE")
                    .setTitle("UYARI")
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.avatarURL);

                  message.channel.send(embed);
                  return;
                }
                if (!davet) {
                  const embed = new Discord.RichEmbed()
                    .setDescription(
                      `${rol} İsimli Rolün Kaç Davet Sayısına Ulaşıldığında Verileceğini Yazmalısın!`
                    )
                    .setColor("BLUE")
                    .setTitle("UYARI")
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.avatarURL);

                  message.channel.send(embed);
                  return;
                }
                const embed = new Discord.RichEmbed()
                  .setDescription(
                    `Artık ${rol} İsimli Rolü **${davet}** Davet Sayısına Ulaşan Herkese Vereceğim!`
                  )
                  .setColor("BLUE")
                  .setTitle("BAŞARILI")
                  .setTimestamp()
                  .setFooter(client.user.username, client.user.avatarURL);

                message.channel.send(embed);
                await db.set(`js7_${message.guild.id}`, rol.id);
                await db.set(`js77_${message.guild.id}`, davet);
              } else {
                if (!js8) {
                  let davet = args[1];
                  let rol = message.mentions.roles.first();
                  if (!rol) {
                    const embed = new Discord.RichEmbed()
                      .setDescription(`Davet ile Alınacak Rolü Yazmalısın!`)
                      .setColor("BLUE")
                      .setTitle("UYARI")
                      .setTimestamp()
                      .setFooter(client.user.username, client.user.avatarURL);

                    message.channel.send(embed);
                    return;
                  }
                  if (!davet) {
                    const embed = new Discord.RichEmbed()
                      .setDescription(
                        `${rol} İsimli Rolün Kaç Davet Sayısına Ulaşıldığında Verileceğini Yazmalısın!`
                      )
                      .setColor("BLUE")
                      .setTitle("UYARI")
                      .setTimestamp()
                      .setFooter(client.user.username, client.user.avatarURL);

                    message.channel.send(embed);
                    return;
                  }
                  const embed = new Discord.RichEmbed()
                    .setDescription(
                      `Artık ${rol} İsimli Rolü **${davet}** Davet Sayısına Ulaşan Herkese Vereceğim!`
                    )
                    .setColor("BLUE")
                    .setTitle("BAŞARILI")
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.avatarURL);

                  message.channel.send(embed);
                  await db.set(`js8_${message.guild.id}`, rol.id);
                  await db.set(`js88_${message.guild.id}`, davet);
                } else {
                  if (!js9) {
                    let davet = args[1];
                    let rol = message.mentions.roles.first();
                    if (!rol) {
                      const embed = new Discord.RichEmbed()
                        .setDescription(`Davet ile Alınacak Rolü Yazmalısın!`)
                        .setColor("BLUE")
                        .setTitle("UYARI")
                        .setTimestamp()
                        .setFooter(client.user.username, client.user.avatarURL);

                      message.channel.send(embed);
                      return;
                    }
                    if (!davet) {
                      const embed = new Discord.RichEmbed()
                        .setDescription(
                          `${rol} İsimli Rolün Kaç Davet Sayısına Ulaşıldığında Verileceğini Yazmalısın!`
                        )
                        .setColor("BLUE")
                        .setTitle("UYARI")
                        .setTimestamp()
                        .setFooter(client.user.username, client.user.avatarURL);

                      message.channel.send(embed);
                      return;
                    }
                    const embed = new Discord.RichEmbed()
                      .setDescription(
                        `Artık ${rol} İsimli Rolü **${davet}** Davet Sayısına Ulaşan Herkese Vereceğim!`
                      )
                      .setColor("BLUE")
                      .setTitle("BAŞARILI")
                      .setTimestamp()
                      .setFooter(client.user.username, client.user.avatarURL);

                    message.channel.send(embed);
                    await db.set(`js9_${message.guild.id}`, rol.id);
                    await db.set(`js99_${message.guild.id}`, davet);
                  } else {
                    if (!js10) {
                      let davet = args[1];
                      let rol = message.mentions.roles.first();
                      if (!rol) {
                        const embed = new Discord.RichEmbed()
                          .setDescription(`Davet ile Alınacak Rolü Yazmalısın!`)
                          .setColor("BLUE")
                          .setTitle("UYARI")
                          .setTimestamp()
                          .setFooter(
                            client.user.username,
                            client.user.avatarURL
                          );

                        message.channel.send(embed);
                        return;
                      }
                      if (!davet) {
                        const embed = new Discord.RichEmbed()
                          .setDescription(
                            `${rol} İsimli Rolün Kaç Davet Sayısına Ulaşıldığında Verileceğini Yazmalısın!`
                          )
                          .setColor("BLUE")
                          .setTitle("UYARI")
                          .setTimestamp()
                          .setFooter(
                            client.user.username,
                            client.user.avatarURL
                          );

                        message.channel.send(embed);
                        return;
                      }
                      const embed = new Discord.RichEmbed()
                        .setDescription(
                          `Artık ${rol} İsimli Rolü **${davet}** Davet Sayısına Ulaşan Herkese Vereceğim!`
                        )
                        .setColor("BLUE")
                        .setTitle("BAŞARILI")
                        .setTimestamp()
                        .setFooter(client.user.username, client.user.avatarURL);

                      message.channel.send(embed);
                      await db.set(`js10_${message.guild.id}`, rol.id);
                      await db.set(`js100_${message.guild.id}`, davet);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["addrank"],
  permLevel: 0
};
exports.help = {
  name: "addRank",
  description: "rütbe-ekle",
  usage: "rütbe-ekle"
};
