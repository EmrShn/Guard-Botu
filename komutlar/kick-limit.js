const Discord = require('discord.js') // EmrSahin Kick Limit
const db = require('quick.db')
exports.run = async(client, message, args) => {

  
  let limit = args.slice(0).join(' ')
  
  if (!limit) return message.channel.send(`Limit Belirt`)
  if (isNaN(limit)) return message.channel.send('Kick Limiti Sadece Sayılardan Oluşabilir!')
  
  db.set(`kicklimit_${message.guild.id}`, limit)
message.channel.send(`Kick Limiti **${limit}** Olarak Ayarlandı!`)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'kicklimit'
}; 