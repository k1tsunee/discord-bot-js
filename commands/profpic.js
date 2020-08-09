const Discord = require('discord.js');

module.exports = {
    name: 'profpic',
    description: `Shows the quoted user's profile pic`,
    execute(message, args){
        if(message.mentions.users.size){
            const mentionedUser = message.mentions.users.first();
            const mentionedUserProfPicEmbed = new Discord.RichEmbed()
            .setColor('#a55dfc')
            .setTitle(`${mentionedUser.username}'s profile pic is:`)
            .setImage(mentionedUser.displayAvatarURL)
        message.channel.send(mentionedUserProfPicEmbed);
        }
    },
};
