exports.allCommand = function(receivedMessage, client) {
	// Check if the bot's user was tagged in the message
	if (receivedMessage.content.includes('!all')) {
		client.channels.forEach(channel => {
			if (
				channel.type == 'text' &&
				channel.id !== receivedMessage.channel.id &&
				channel.guild.id == receivedMessage.guild.id
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
};
