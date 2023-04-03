import { Client, GatewayIntentBits } from 'discord.js';
import { config } from './config';
import { onInteraction, onReady } from './events';

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

async function start() {
	client.on('ready', async () => await onReady(client));

	client.on(
		'interactionCreate',
		async (interaction) => await onInteraction(interaction)
	);
	await client.login(config.BOT_TOKEN);
}

start();
