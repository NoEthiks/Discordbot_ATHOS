const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    
    if (!args[0]) {
        return message.channel.send(":x: |Veuillez **poser une question** :/")
    }

    let rep = ["Non :x:", "Tu me fatigues :zzz:", "Rien à battre de ta question :face_palm:", "En vrai c'est possible :face_with_monocle:", "Peut être... :thinking:", "Absolument :interrobang:", "Sûr à 100% frérot :sunglasses:", "Aucune idée :rolling_eyes:", "Je suis pas là pour juger... Enfin, si, un peu. Bref, je vais répondre oui :poop:", "C'est quoi cette question là :face_with_raised_eyebrown:", "Grave :yum:", "Frérot j'ai loupé mon brevet, comment je peux savoir ça :man_facepalming:", "Tu demandes vraiment ça à un bot :weary:" ];
    let reptaille = Math.floor((Math.random() * rep.length));
    let question = args.slice(0).join(" ");
 
    let ballEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setThumbnail('https://cdn.discordapp.com/attachments/702483116379602954/703924529663049800/Atos.jpg')
        .setColor("RANDOM")
        .addField("Question:", question)
        .addField("Réponse:", rep[reptaille])
        .setTimestamp()
        .setFooter(`demandé par ${message.author.tag}`)
    message.channel.send(ballEmbed)
    message.delete()
}

module.exports.help = {
    name: '8ball',
    alias: ['question', 'voyant', 'medium']
}