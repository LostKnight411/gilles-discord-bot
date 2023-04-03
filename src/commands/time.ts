import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../interfaces';

const command: Command = {
	data: new SlashCommandBuilder()
		.setName('time')
		.setDescription('Gives the current time in UTC'),
	run: async (interaction) => {
		var nowDate = new Date();
		var dateString = nowDate.getUTCHours() + ':' + nowDate.getUTCMinutes();
		await interaction.reply({
			content: 'It is currently ' + dateString + ' UTC.',
			ephemeral: true,
		});
	},
};

export default command;
