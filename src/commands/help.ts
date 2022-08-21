import { SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("Help")
        .setDescription("Lists available commands"),
    async execute(interaction: any) {
        await interaction.reply("");
    }
}