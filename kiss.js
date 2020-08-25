const Discord = require('discord.js')

module.exports.run = async (message, bot, args) => {
    if (!args[0]) {
        return message.reply(':x: |Veuillez mentionnner une cible !')
    }

    else {   
        target = message.mentions.users.first()

        kissEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag)
            .setColor("RANDOM")
            .setThumbnail('https://cdn.discordapp.com/attachments/702483116379602954/703924529663049800/Atos.jpg')
            .addField(`${message.author.tag} veut embrasser ${target.tag} !`)
            .setTimestamp()
            .setFooter('Un amour naît !')
    }
}

module.exports.help = {
    name: "kiss"
}