import { Interaction } from 'discord.js';
import { commandHash } from '../commands';

export async function onInteraction(interaction: Interaction) {
	if (!interaction.isChatInputCommand()) return;
	const { commandName: command, user } = interaction;

	// NOTE: no need to check if command is valid as slashcommands must be registered by the bot for use
	// const command = interaction.client.commands.get(interaction.commandName);
	// if (!command) {
	// 	console.error(`Invalid command: ${interaction.command}.`);
	// 	return;
	// }

	try {
		await commandHash[command](interaction);
	} catch (e) {
		console.error(e);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({
				content: 'There was an error while executing this command!',
				ephemeral: true,
			});
		} else {
			await interaction.reply({
				content: 'There was an error while executing this command!',
				ephemeral: true,
			});
		}
	}
}
