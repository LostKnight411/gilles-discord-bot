const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('time')
        .setDescription('Gives the current time in UTC'),
    async execute(interaction) {
        var nowDate = new Date();
        var dateString = nowDate.getUTCHours() + ":" + nowDate.getUTCMinutes();
        await interaction.reply({content: "It is currently " + dateString + " UTC.", ephemeral: true});
    }
};