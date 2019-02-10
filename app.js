const Discord = require('discord.js');
const client = new Discord.Client();
const allCommand = require('./commands/all');
require('dotenv').config();

client.on('ready', () => {
	client.user.setActivity(`Serving ${client.guilds.size} servers`);
	console.log('Connected as ' + client.user.tag);
	// List servers the bot is connected to
	console.log('Servers:');

	client.guilds.forEach(guild => {
		console.log(' - ' + guild.name);
	});

	client.channels.forEach(channel => {
		console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
	});
});

client.on('message', receivedMessage => {
	if (receivedMessage.author == client.user) {
		return;
	}

	// Command that send a massage to all text channels
	allCommand.allCommand(receivedMessage, client);
});

client.login(process.env.BOT_SECRET_TOKEN);
