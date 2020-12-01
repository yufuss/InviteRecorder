const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args, member) => {


  const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", async () => {

  await wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
  
  let kanal = await db.fetch(`davetkanal2_${message.guild.id}`);
    let mesaj = await db.fetch(`cikismesaj_${message.guild.id}`);
   if (mesaj) {
      var mesaj2 = await db
        .fetch(`cikismesaj_${message.guild.id}`)
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
  aliases: ['leaveTest', 'testLeave'],
  permLevel: 0,
  kategori: "kullanıcı"
};

module.exports.help = {
  name: "çıkış-test",
  description: "",
  usage: ""
};
