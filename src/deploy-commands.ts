import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";
import { clientId, guildId, token } from "./config.json";
import commands from "./commands";

// Load each command's data to be pushed to a Guild's command list
const commandData = [];
commands.forEach((command) => commandData.push(command.data.toJSON()));

const rest = new REST({ version: "10" }).setToken(token);

// Using Discord's REST API register client command list to Guild
rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
