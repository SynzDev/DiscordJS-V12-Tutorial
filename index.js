const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log(`${client.user.tag} is now ready!\nPrefix: ${config.prefix}`);
});

client.on('message', message => {
    if (message.content === config.prefix + 'hello') {
        message.channel.send(`Hello there, ${message.author.tag}`);
    }
});

client.login(config.token);