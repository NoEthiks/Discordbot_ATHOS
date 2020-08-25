const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let waiting = await message.channel.send("J'attends le pong...").catch(console.error);
    
    let pingEmbed = new Discord.MessageEmbed()

        .setTitle(`Latence d'ATHOS`, bot.user.avatarURL)
        .setColor("RANDOM")
        .addField(":ping_pong: LATENCE :", `> ${waiting.createdTimestamp - message.createdTimestamp}ms`, true)
        //.addField("🛠 API :", `${Math.round(bot.ping)}ms`, true)
        .setTimestamp(message.createdAt)
        .setFooter(`Ping généré par ${message.author.tag}`)
    
    waiting.edit(message.delete(), pingEmbed).catch(console.error)
};

module.exports.help = {
    name: 'ping',
    aliases: ['latence']
}