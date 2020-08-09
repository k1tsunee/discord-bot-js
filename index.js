'use strict';

const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const { prefix, token } = require('./config.json');
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.login(token);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  console.log(command);

  if(!bot.commands.has(command)) return;

  try{
    bot.commands.get(command).execute(message, args);
  }

  catch(error){
    console.error(error);
    message.reply('There was an error trying to execute that command!');
  }
});
