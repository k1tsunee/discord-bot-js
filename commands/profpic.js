const Discord = require('discord.js');

module.exports = {
    name: 'profpic',
    description: `Shows the quoted user's profile pic`,
    execute(message, args){
        if(message.mentions.users.size){
            const mentionedUser = message.mentions.users.first();
            const mentionedUserProfPicEmbed = new Discord.MessageEmbed()
            .setColor('#a55dfc')
            .setTitle(`${mentionedUser.username}'s profile pic is:`)
            .setImage(mentionedUser.displayAvatarURL({format: "png", dynamic: "true", size: 4096}))
        message.channel.send(mentionedUserProfPicEmbed);
        }
    },
};
