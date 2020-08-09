const Discord = require('discord.js');
const filter = (reaction) => {
	return reaction.emoji.name === '👍';
};

module.exports = {
  name: 'votekick',
  description: 'Starts a vote kicking proccess',
  execute(message, args){
    const mentionedUserForKick = message.mentions.members.first();
    let timeForVoting = args[2];
    var voteKickNumber = args[1];

    if(timeForVoting < 10){
        message.channel.send(`You can't put a time less than 10 seconds.`);
        return;
    }

    else if(voteKickNumber < 3){
        message.channel.send(`The minimum vote number is 3.`);
        return;
    }

    const collector = message.createReactionCollector(filter, { time: timeForVoting * 1000 });

    if(mentionedUserForKick.username === message.author.username){
        message.channel.send(`You cannot kick yourself, ${message.author.username}. (I guess...)`);
        return;
    }

    else{
        let auxiliaryVote = 0;
        message.channel.send(`${message.author} wants to kick ${mentionedUserForKick}. React to kick. The maximum number of reactions is currently ${voteKickNumber}`);
        message.react('👍');

        collector.on('collect', (reaction, user) => {
            auxiliaryVote++;
        });
        
        collector.on('end', collected => {
            if(auxiliaryVote >= voteKickNumber){
                mentionedUserForKick.kick("Voted off.");
                message.channel.send(`${mentionedUserForKick} was kicked, lol. Get lost kiddo.`);
            }
        });  
    }
  },
};
