const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;
    
    message.delete()
    
    var mentionned = message.mentions.users.first()
    
    if(!message.guild.member(message.author).hasPermission("VIEW_AUDIT_LOG")) {
        return message.reply("Vous n'avez pas la permission pour warn un utilisateur :(")
    }
    if(message.mentions.users.size === 0) {
        return message.reply("Vous n'avez pas mentionné d'utilisateur à warn !")
    } else {
        const args = message.content.split(' ').slice(1)
        if(args[0] === "<@!" + mentionned.id + ">"|| args[0] === "<@" + mentionned.id + ">") {
            if(args.slice(1).length != 0) {
                message.send(`${mentionned.tag} a été averti !`)
                mentionned.send(`Vous avez été averti dans le serveur ${message.guild.name}. \nAttention à votre conduite, un deuxième avertissement entraînerait un kick. \nRaison : ${args.slice(1).join(' ')}`)
            } else {
                return message.reply('Utilisation incorrecte de la commande warn :(')
            }
        } else {
            return message.reply('Utilisation incorrecte de la commande warn :(')
        }
    }
}

module.exports.help = {
    name: "warn",
    alias: ['avertisement', 'faisgaffe']
}