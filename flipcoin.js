const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    
    let random = (Math.floor(Math.random() * Math.floor(2)));
    
    if(random === 0) {
        message.channel.send('Pile')
    } else {
        message.channel.send('Face')
    }
};

module.exports.help = {
    name: 'flipcoin',
    aliases: ['pileouface', 'coinflip']
}