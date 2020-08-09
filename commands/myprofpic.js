const Discord = require('discord.js');

module.exports = {
  name: 'myprofpic',
  description: 'Shows user profile pic',
  execute(message, args){
    const myProfPicEmbed = new Discord.RichEmbed()
    .setColor('#a55dfc')
    .setTitle('Your profile pic is:')
    .setImage(message.author.displayAvatarURL);
  message.channel.send(myProfPicEmbed)
  },
};
