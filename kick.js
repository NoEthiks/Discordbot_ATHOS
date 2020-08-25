const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return;
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return;
    const target = message.mentions.users.first();
    //if(target.id === message.author.id) return message.reply("Vous ne pouvez pas vous kick vous-même :)");
    if(target) {
        const member = message.guild.member(target)
        if(member) {
            member.kick(' ').then(() => {
                message.reply(`${target} a été kick avec succès !`)
            }).catch(error => {
                message.reply("vous n'avez pas la permission pour kick un utilisateur :(")
            });
        } else {
            message.reply("cet utilisateur n'est pas dans le serveur !")
        }
    } else {
        message.reply("Vous n'avez mentionné personne à kick!")
    }
    message.delete();
};

module.exports.help = {
    name: "kick",
    alias: ['sorsducercle']
}