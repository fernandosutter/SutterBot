const Discord = require('discord.js');
const client = new Discord.Client();
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

	// Check if the bot's user was tagged in the message
	if (receivedMessage.content.includes('!all')) {
		client.channels.forEach(channel => {
			if (
				channel.type == 'text' &&
				channel.id !== receivedMessage.channel.id
			) {
				let receiverChannel = client.channels.get(channel.id);
				receiverChannel.send(
					'Message sent from ' +
						receivedMessage.author.toString() +
						': ' +
						receivedMessage.content.replace('!all', '')
				);
			}
		});
	}
});

client.login(process.env.BOT_SECRET_TOKEN);
