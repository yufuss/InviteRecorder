const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
 let kullanici = message.mentions.users.first()
 if(!kullanici) return message.channel.send("Banlamak İçin Birini Etiketle!")

const embed = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle(`${kullanici.tag} banlandı`)
message.channel.send(embed)
  message.guild.member(kullanici).ban();
}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['yasakla'],
        permLevel: 2,
    kategori: "moderasyon",
    };
      
    exports.help = {
        name: 'ban',
        description: 'ban',
        usage: 'ban',
    
    };