const chalk = require('chalk')
const { joinVoiceChannel } = require('@discordjs/voice');
const figlet = require('figlet')

module.exports = async (Spicey, client, message) => {
    const config = require('../config')
    console.log(chalk.blueBright(
        figlet.textSync('SPICETICKETS', { font: 'Standard', horizontalLayout: 'default', verticalLayout: 'default', width: '120' }))
        
        );
        console.log(chalk.blueBright`Created by Spicey - https://spicedevelopment.com
        `)


    console.log(chalk.red`Logged In As ${client.user.tag}`)


    const channel = client.channels.cache.get(config['main_config'].voicechannel);
    let connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });
    if (connection) {
        console.log(chalk.red`Successfully connected to the voice channel!`)
    }
}