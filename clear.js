const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("vous n'avez pas la permssion de gérer les messages :(");
    if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peux pas faire cela !");
    if(!args[0]) return message.reply("Vous devez préciser le nombre de message à supprimer !");
    if(isNaN(args[0])) return message.reply("Veuillez spécifier un nombre !");

    message.channel.bulkDelete(args[0]);
    message.channel.send(`${args[0]} messages supprimés !`)

}

module.exports.help = {
    name: 'clear',
    alias: ['purge', 'cls', 'clean']
}