const Discord = require(`discord.js`)

exports.run = async (bot, message, args) => {
    let invite = await message.channel.createInvite({
      maxAge: args.age,
      maxUses: args.uses
    });
      const embed = new Discord.RichEmbed()
    .setColor("#0BF3B7")
        .setDescription(`Davet kodu oluşturuldu! (https://discord.gg/${invite.code})`)   
  message.channel.send(embed)

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['davetoluştur', 'inviteCreate'],
  permLevel: 0
};

exports.help = {
  name: 'davet-oluştur',
  description: 'davet-oluştur',
  usage: 'davet-oluştur'
};