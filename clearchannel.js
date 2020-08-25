const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("vous n'avez pas la permssion de gérer les messages :(");
    if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peux pas faire cela !");

    message.channel.bulkDelete(10000)

};

module.exports.help = {
    name: 'clearchannel',
    alias: ['purgechannel', 'cleanchannel', 'clschannel']
}