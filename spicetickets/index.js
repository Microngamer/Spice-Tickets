const { red } = require('chalk');
const Spicey = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });
const config = require('./config')

client.commands = new Spicey.Collection();
client.events = new Spicey.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Spicey);
});


client.login(config["main_config"].token).catch(err => {
    console.log(red("Make Sure The Correct Token is specified in the config"))
})