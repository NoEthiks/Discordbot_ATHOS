const Discord = require('discord.js');
const { token, prefix } = require('D:\\Users\\Noé\\Desktop\\ATHOS\\config.js')

module.exports.run = async (bot, message, args) => {
    
    const helpEmbed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setThumbnail("https://cdn.discordapp.com/attachments/702483116379602954/703182076182003802/Atos.jpg")
    .setTitle(`Liste des commandes d'ATHOS`)
    .setDescription(`Les commandes d'ATHOS s'utilisent avec le préfixe : **${prefix}**`)
    .addField(">>>__**stats**__", `**Infos** -> Affiche les infos de l'utilisateur`)
    .addField(">>>__**kick**__", `**Modération** -> Expulsion temporaire du serveur l'utilisateur mentionné`)
    .addField(">>>__**ban**__", `**Modération** -> Expulsion permanente du serveur l'utilisateur mentionné`)
    .addField(">>>__**warn**__", `**Modération** -> Avertit l'utilisateur avec raison optionelle`)
    .addField(">>>__**clear**__", `**Modération** -> Efface un nombre de messages défini`)
    .addField(">>>__**addrole**__", `**Modération** -> Ajoute un rôle à l'utilisateur mentionné`)
    .addField(">>>__**8ball**__", `**Fun** -> Réponds à une question posée de manière aléatoire`)
    .addField(">>>__**flip**__", `**Fun** -> envoie un ASCII drôle`)
    .addField(">>>__**timer**__", `**Tools** -> Démarre un timer en heures minutes ou secondes`)
    .addField(">>>__**ping**__", `**Tools** -> Renvoie la latence de connexion du bot`)
    .setTimestamp()
    .setFooter('Made by NoEthik')
    
    message.channel.send('Les commandes vous ont été envoyées en DM.')
    
    message.author.send(helpEmbed)
    
    console.log(`Commandes d'aides demandées par ${message.author.tag}`)
    
    message.delete();
};

module.exports.help = {
    name: "help",
    aliases: ['aide', 'commandes', 'commandlist']
}