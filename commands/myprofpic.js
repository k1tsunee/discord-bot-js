const Discord = require('discord.js');

module.exports = {
  name: 'myprofpic',
  description: 'Shows user profile pic',
  execute(message, args){
    const myProfPicEmbed = new Discord.MessageEmbed()
    .setColor('#a55dfc')
    .setTitle('Your profile pic is:')
    .setImage(message.author.displayAvatarURL({format: "png", dynamic: "true", size: 4096}));
  message.channel.send(myProfPicEmbed)
  },
};
