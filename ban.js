const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
   
   if(message.author.bot) return;
   if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
       message.reply("Vous n'avez pas la permission de ban un utilisateur :(")
   }

   let target = message.mentions.users.first();
   let reason = args.slice(1).join(' ');

   if(!target) {
       message.reply("Vous n'avez pas mentionné d'utilisateur à ban !")
   }

   if(target.id === message.author.id) {
       message.reply(":x: |Vous ne pouvez pas vous ban vous-même !")
   }

   if(!reason) {
       message.guild.ban(target)
       return message.channel.send(`**${target.tag}** a été ban du serveur par **${message.author.tag}** sans raison donnée.`)
       message.delete()
    }

    if(reason) {
        message.guild.ban(target)
        message.channel.send(`**${target.tag}** a été ban du serveur par **${message.author.tag}$** pour cause de **${reason}**`)
        message.delete()
    }
};


module.exports.help = {
    name: "ban",
    alias: ['expulse', 'dégage']
}
