const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Bot Online!");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = config.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Total Commands!`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
};
let regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(config.token);

//KOMUTLAR-----------------------------------
const invites = {};

// A pretty useful method to create a delay without blocking the whole script.
const wait = require("util").promisify(setTimeout);

client.on("ready", async () => {
  // "ready" isn't really ready. We need to wait a spell.
  await wait(1000);

  // Load all invites for all guilds and save them to the cache.
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberRemove", async member => {
  let kanal = await db.fetch(`davetkanal2_${member.guild.id}`);
  let js1 = await db.fetch(`js1_${member.guild.id}`);
  let js2 = await db.fetch(`js2_${member.guild.id}`);
  let js3 = await db.fetch(`js3_${member.guild.id}`);
  let js4 = await db.fetch(`js4_${member.guild.id}`);
  let js5 = await db.fetch(`js5_${member.guild.id}`);
  let js6 = await db.fetch(`js6_${member.guild.id}`);
  let js7 = await db.fetch(`js7_${member.guild.id}`);
  let js8 = await db.fetch(`js8_${member.guild.id}`);
  let js9 = await db.fetch(`js9_${member.guild.id}`);
  let js10 = await db.fetch(`js10_${member.guild.id}`);
  let js11 = await db.fetch(`js11_${member.guild.id}`);
  let js22 = await db.fetch(`js22_${member.guild.id}`);
  let js33 = await db.fetch(`js33_${member.guild.id}`);
  let js44 = await db.fetch(`js44_${member.guild.id}`);
  let js55 = await db.fetch(`js55_${member.guild.id}`);
  let js66 = await db.fetch(`js66_${member.guild.id}`);
  let js77 = await db.fetch(`js77_${member.guild.id}`);
  let js88 = await db.fetch(`js88_${member.guild.id}`);
  let js99 = await db.fetch(`js99_${member.guild.id}`);
  let js100 = await db.fetch(`js100_${member.guild.id}`);
  let mesaj = await db.fetch(`cikismesaj_${member.guild.id}`);
  let d = db.fetch(`bunudavet_${member.id}_${member.guild.id}`);
  const sa = client.users.get(d);
  const sasad = member.guild.members.get(d);

  let ddd = await db.fetch("fakecik_" + member.id + "_" + member.guild.id);
  if (ddd) {
    await db.add("fake_" + ddd + "_" + member.guild.id, -1);
    await db.delete("fakecik_" + member.id + "_" + member.guild.id);
  }
  if (!ddd) {
    await db.add(`davet_${d}_${member.guild.id}`, -1);
  }
  await db.add(`ayrilan_${d}_${member.guild.id}`, 1);

  if (!d) {
    if (mesaj) {
      member.guild.channels
        .get(kanal)
        .send(
          `**\`${member.user.tag}\` Sunucudan Ayrıldı Davet Eden \`Bulunamadı!\`**`
        );
    }
  }
  let davet = await db.get(`davet_${d}_${member.guild.id}`);
  if (d) {
    if (mesaj) {
      var mesaj2 = await db
        .fetch(`cikismesaj_${member.guild.id}`)
        .replace("-üye-etiket-", `<@${member.user.id}>`)
        .replace("-sunucu-adı-", `${member.guild.name}`)
        .replace("-kişi-sayısı-", `${member.guild.memberCount}`)
        .replace("-üye-isim-", `${member.user.tag}`)
        .replace("-davetçi-isim-", `${sa.tag}`)
        .replace("davetçi-etiket", `<@${sa.id}>`)
        .replace("-davet-", `${davet}`);
      member.guild.channels.get(kanal).send(mesaj2);
    }
    let kişi = member.guild.members.get(d);
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
  }
});

client.on("guildMemberAdd", async member => {
  member.guild.fetchInvites().then(async guildInvites => {
    let js1 = await db.fetch(`js1_${member.guild.id}`);
    let js2 = await db.fetch(`js2_${member.guild.id}`);
    let js3 = await db.fetch(`js3_${member.guild.id}`);
    let js4 = await db.fetch(`js4_${member.guild.id}`);
    let js5 = await db.fetch(`js5_${member.guild.id}`);
    let js6 = await db.fetch(`js6_${member.guild.id}`);
    let js7 = await db.fetch(`js7_${member.guild.id}`);
    let js8 = await db.fetch(`js8_${member.guild.id}`);
    let js9 = await db.fetch(`js9_${member.guild.id}`);
    let js10 = await db.fetch(`js10_${member.guild.id}`);
    let js11 = await db.fetch(`js11_${member.guild.id}`);
    let js22 = await db.fetch(`js22_${member.guild.id}`);
    let js33 = await db.fetch(`js33_${member.guild.id}`);
    let js44 = await db.fetch(`js44_${member.guild.id}`);
    let js55 = await db.fetch(`js55_${member.guild.id}`);
    let js66 = await db.fetch(`js66_${member.guild.id}`);
    let js77 = await db.fetch(`js77_${member.guild.id}`);
    let js88 = await db.fetch(`js88_${member.guild.id}`);
    let mesaj = await db.fetch(`girismesaj_${member.guild.id}`);
    let js99 = await db.fetch(`js99_${member.guild.id}`);
    let js100 = await db.fetch(`js100_${member.guild.id}`);
    let kanal = await db.fetch(`davetkanal1_${member.guild.id}`);
    let d = db.fetch(`bunudavet_${member.id}_${member.guild.id}`);

    const ei = invites[member.guild.id];
    if (d) {
      await db.add("ayrilan_" + d + "_" + member.guild.id, -1);
    }
    invites[member.guild.id] = guildInvites;
    const i = client.users.get(member.id);

    const invite = guildInvites.find(
      i => !ei.get(i.code) || ei.get(i.code).uses < i.uses
    );

    if (!invite) {
      if (kanal) {
        member.guild.channels
          .get(kanal)
          .send(`**${member.user} Hoş Geldin! Davet Eden \`Bulunamadı!\``);
      }
    } else {
      const sasad = member.guild.members.get(invite.inviter.id);
      const davetçi = client.users.get(invite.inviter.id);
      const kurulus = new Date().getTime() - i.createdAt.getTime();

      if (kurulus < 1296000000) {
        db.add(`fake_${invite.inviter.id}_${member.guild.id}`, +1);
        db.set(
          "fakecik_" + member.id + "_" + member.guild.id,
          invite.inviter.id
        );
      }
      if (kurulus > 604800000) {
        db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
      }
      if (!d) {
        await db.set(
          `bunudavet_${member.id}_${member.guild.id}`,
          invite.inviter.id
        );
      }

      let sayı = await db.get(`davet_${invite.inviter.id}_${member.guild.id}`);

      let davet;
      if (!sayı) {
        davet = 0;
      } else {
        davet = await db.get(`davet_${invite.inviter.id}_${member.guild.id}`);
      }

      if (mesaj) {
        var mesaj2 = await db
          .fetch(`girismesaj_${member.guild.id}`)
          .replace("-üye-etiket-", `<@${member.user.id}>`)
          .replace("-sunucu-adı-", `${member.guild.name}`)
          .replace("-kişi-sayısı-", `${member.guild.memberCount}`)
          .replace("-üye-isim-", `${member.user.tag}`)
          .replace("-davetçi-isim-", `${davetçi.tag}`)
          .replace("-davetçi-etiket-", `<@${davetçi.id}>`)
          .replace("-davet-", `${davet}`);
        member.guild.channels.get(kanal).send(mesaj2);
      }
      let kişi = member.guild.members.get(invite.inviter.id);
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
    }
  });
});
//-------------------------------------------------------------------------------------
client.on("guildCreate", guild => {
  let dcs_kanal = client.channels.get("772774791869628417");

  const dcs = new Discord.RichEmbed()
    .setTitle("SUNUCUYA EKLENDİM")
    .setColor("GREEN")
    .addField(":black_small_square: Sunucu İsmi", `\`${guild.name}\``)
    .addField(":black_small_square: Üye Sayısı", `\`${guild.members.size}\``)
    .addField(":black_small_square: Kurucu", `\`${guild.owner.user.tag}\``);
  dcs_kanal.send(dcs);
});

client.on("guildDelete", guild => {
  let dcs_kanal = client.channels.get("772774791869628417");

  const dcs = new Discord.RichEmbed()
    .setTitle("SUNUCUDAN AYRILDIM")
    .setColor("RED")
    .addField(":black_small_square: Sunucu İsmi", `\`${guild.name}\``)
    .addField(":black_small_square: Üye Sayısı", `\`${guild.members.size}\``)
    .addField(":black_small_square: Kurucu", `\`${guild.owner.user.tag}\``);
  dcs_kanal.send(dcs);
});
