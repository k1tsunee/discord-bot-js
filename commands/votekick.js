const Discord = require('discord.js');
const filter = (reaction) => {
    return reaction.emoji.name === '👍';
};

module.exports = {
    name: 'votekick',
    description: 'Starts a vote kicking proccess',
    async execute(message, args) {
        const mentionedUserForKick = message.mentions.members.first();
        let timeForVoting = args[2];
        let voteKickNumber = args[1];

        if (timeForVoting < 10) {
            message.channel.send(`You can't put a time less than 10 seconds.`);
            return;
        }

        else if (voteKickNumber < 3) {
            message.channel.send(`The minimum vote number is 3.`);
            return;
        }

        if (mentionedUserForKick.user.username === message.author.username) {
            message.channel.send(`You cannot kick yourself, ${message.author.username}. (I guess...)`);
            return;
        }

        message.channel.send(`${message.author} wants to kick ${mentionedUserForKick}. React to kick. The maximum number of reactions is currently ${voteKickNumber}`);
        message.react('👍');

        let auxiliaryVote;
        let collected = await message.awaitReactions(filter, { time: timeForVoting * 1000 })
        collected.map(messageReaction => {
            auxiliaryVote = messageReaction.count;
            if (auxiliaryVote >= (voteKickNumber - 1)) {
                mentionedUserForKick.kick("Voted off.");
                message.channel.send(`${mentionedUserForKick} was kicked. get lost kiddo lol`);
                return;
            }
            message.channel.send(`Not enough votes for kicking ${mentionedUsersForKick}. We only got ${auxiliaryVote} votes.`);
        })
    },
};
