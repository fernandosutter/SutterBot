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

client.login(process.env.BOT_SECRET_TOKEN);
