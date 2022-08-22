import { SlashCommandBuilder } from "discord.js";

const helpCommand = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Lists available commands"),
  async execute(interaction: any) {
    await interaction.reply("");
  },
};

export { helpCommand };
