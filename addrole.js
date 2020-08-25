const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) {
        return message.reply("Vous n'avez pas la permission de gérer les rôles :(")
    };
    if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) {
        return message.reply("Je ne peux pas faire cela.")
    };
    
    let mentionned = message.mentions.users.first()
    let role = message.guild.roles.find(x => x.name === "Développeur");

    if(message.mentions.users.size === 0) {
        return message.reply("Vous n'avez pas mentionné d'utilisateur !")
    } else {
        const args = message.content.split(' ').slice(1)
        if(args[0] === "<@!" + mentionned.id + ">"|| args[0] === "<@" + mentionned.id + ">") {
            if(args.slice(1).length != 0) {
                message.send(`${mentionned.tag} a maintenant le rôle ${role.name} !`)
            } else {
                return message.reply('Utilisation incorrecte de la commande addrole :(')
            }
        } else {
            return message.reply('Utilisation incorrecte de la commande addrole :(')
        }
    }
};

module.exports.help = {
    name: 'addrole',
    alias: ['addRole']
}