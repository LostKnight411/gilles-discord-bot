import { CommandInteraction } from 'discord.js';
import { Command } from '../interfaces';
import time from './time';

export const commandList: Command[] = [time];

export const commandHash: Record<
	string,
	(interaction: CommandInteraction) => Promise<void>
> = { time: time.run };
