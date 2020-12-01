const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args, member) => {


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
  
  let kanal = await db.fetch(`davetkanal1_${message.guild.id}`);
    let mesaj = await db.fetch(`girismesaj_${message.guild.id}`);
   if (mesaj) {
      var mesaj2 = await db
        .fetch(`girismesaj_${message.guild.id}`)
        .replace("-üye-etiket-", `<@772760768554598420>`)
        .replace("-sunucu-adı-", `${message.guild.name}`)
        .replace("-kişi-sayısı-", `${message.guild.memberCount}`)
        .replace("-üye-isim-", `InviteRecorder#9268`)
        .replace("-davetçi-isim-", `${message.author.tag}`)
        .replace("davetçi-etiket", `<@${message.author.id}>`)
        .replace("-davet-", `30`);
      message.guild.channels.get(kanal).send(mesaj2);
    }
message.channel.send('Komut Test Edildi!')
}
                      
module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['joinTest', 'testJoin'],
  permLevel: 0,
  kategori: "kullanıcı"
};

module.exports.help = {
  name: "giriş-test",
  description: "",
  usage: ""
};
