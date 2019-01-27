const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.on('ready', () => {
	console.log('Connected as ' + client.user.tag);
	// List servers the bot is connected to
	console.log('Servers:');

	client.guilds.forEach(guild => {
		console.log(' - ' + guild.name);
	});

	client.channels.forEach(channel => {
		console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
	});
	var generalChannel = client.channels.get('539101792697450517'); // Replace with known channel ID
	generalChannel.send('Hello, world!');
});

client.on('message', receivedMessage => {
	// Prevent bot from responding to its own messages
	if (receivedMessage.author == client.user) {
		return;
	}

	// Check if the bot's user was tagged in the message
	if (receivedMessage.content.includes(client.user.toString())) {
		// Send acknowledgement message
		receivedMessage.channel.send(
			'Message received from ' +
				receivedMessage.author.toString() +
				': ' +
				receivedMessage.content
		);
	}
});

client.login(process.env.BOT_SECRET_TOKEN);
