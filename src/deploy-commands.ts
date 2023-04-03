import { REST, Routes } from 'discord.js';
import { config } from './config';
// Grab all the command files from the commands directory you created earlier
import { commandList } from './commands';

const { BOT_TOKEN, CLIENT_ID, GUILD_ID } = config;

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
const commands = commandList.map((command) => command.data.toJSON());
// NOTE: identical to the following:
// const commands = [];
// for (const command of commandList) {
// 	commands.push(command.data.toJSON());
// }

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);

// and deploy your commands!
(async () => {
	try {
		console.log(
			`Started refreshing ${commands.length} application (/) commands.`
		);

		// The put method is used to fully refresh all commands in the guild with the current set
		await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
			body: commands,
		});

		console.log(
			`Successfully reloaded ${commands.length} application (/) commands.`
		);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
