const Discord = require('discord.js');
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;
    message.delete()
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args(1)));
    if(!tomute) {
        return message.reply(":x: |Mentionnez la personne à mute dans votre commande !")
    }
    if(tomute.hasPermission("ADMINISTRATOR")) return message.reply(":x: |Vous ne pouvez pas mute un administrateur !")
    let muterole = message.guild.roles.find('name', 'mute')
    if(!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "muted",
                color: "7334003",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e) {
            console.log(e.stack)
        }
    }
    let mutetime = args[1]
    if(!mutetime) return message.reply('Précisez la durée du mute')

    await(tomute.addRole(muterole.id));
    message.reply(`${tomute.tag} a été mute pendant ${ms(ms(mutetime))}`)

    setTimeout(function() {
        tomute.removeRole(muterole.id)
        message.channel.send(`<@${tomute.tag}> a été unmute`)
    }, ms(mutetime));
};

module.exports.help = {
    name: "mute",
    aias: ['chut', 'tg']
}