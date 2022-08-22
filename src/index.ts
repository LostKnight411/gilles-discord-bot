import { Client, Collection, GatewayIntentBits } from "discord.js";
import { token } from "./config.json";
import commands from "./commands";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection();
// Load all commands into Client collection
commands.forEach((command) => client.commands.set(command.data.name, command));

client.once("ready", () => {
  console.log("Bot is started");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);

  // If the command exists, execute it
  if (command) {
    command
      .execute(interaction)
      .then(/* Any follow-up code */)
      .catch(async (error: unknown) => {
        console.log(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      });
  }

  return;
});

client.login(token);
