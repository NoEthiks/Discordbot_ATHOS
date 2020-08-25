const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async (bot, message, args) => {
    let inline = true
    let presence = true
    
    const status = {
        online: "En ligne",
        idle: "Inactif",
        dnd: "Ne pas déranger",
        offline: "Hors ligne/Invisible"
    }
    
    let mentionned = message.mentions.users.first() || message.author;
    const member = message.mentions.users.first() || message.member;
    let target = message.mentions.users.first() || message.author;

    let statsEmbed = new Discord.MessageEmbed()
        
        .setAuthor(member.user.tag)
        //.setThumbnail((target.displayAvatarURL))
        .setColor("RANDOM")
        .addField(":two_women_holding_hands: Pseudo", `${member.user.tag}`, inline)
        .addField(":mouse_three_button: Statut", `${status[member.user.presence.status]}`, inline, true)
        .addField("Joue à 🎮", `${member.user.presence.activity ? `${member.user.presence.activity.name}` : ":no_entry_sign: Ne joue pas"}`, inline, true)
        .addField("🛠 Compte créé le", moment(member.user.createdAt).format("LL"), true)
        .addField(":id: ID", `${member.user.id}`, inline)
        .setTimestamp()
        .setFooter(`Infos de ${member.user.tag}`)

        message.channel.send(statsEmbed)
        message.delete()
};
    

module.exports.help = {
    name: "stats",
    alias: ['infos', 'info', 'userinfo']
}