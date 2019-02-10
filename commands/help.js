exports.helpCommand = function(receivedMessage, client) {
	// Check if the bot's user was tagged in the message
	if (receivedMessage.content.includes('!help')) {
		if (receivedMessage.channel.type == 'text') {
			receivedMessage.channel.send(
				'Link for the documentation: https://github.com/fernandosutter/SutterBot/blob/master/README.md '
			);
		}
	}
};
