const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Shows help',
    execute(message, args){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#a55dfc')
        .setTitle('Commands')
        .setAuthor('k1tsunee', 'https://i.imgur.com/D655GD6.png', 'https://github.com/k1tsunee')
        .setDescription('Bot commands!')
        .addField("--myprofpic", "Shows your profile pic.")
        .addField("--profpic @someone", "Shows someone's profile pic")
        .addField(`--votekick`, `Vote kick someone. Syntax:\n--votekick @<user you want to vote kick> <max vote number (minimum 3)> <time to vote (minimum 10 seconds)>`)
        .setTimestamp()
        .setFooter('k1tsunee');
    message.channel.send(helpEmbed);
    },
};
