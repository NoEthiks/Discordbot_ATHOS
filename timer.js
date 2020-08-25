const Discord = require('discord.js');
const ms = require('ms')

module.exports.run = async (bot, message, args) => {
    let Timer = args[0];

    if(!args[0]){
        return message.channel.send(":x: " + "| Veuillez entrer un temps suivi de \"s ou m ou h\"");
    }

    if(args[0] <= 0){
        return message.channel.send(":x: " + "| Veuillez entrer un temps suivi de \"s ou m ou h\"");
    }

    message.channel.send(":white_check_mark: " + "| Le minuteur a débuté pour : " + `${ms(ms(Timer), {long: true})}`)

    setTimeout(function(){
        message.channel.send(message.author.toString() + ` Le minuteur a pris fin ! Il a duré : ${ms(ms(Timer), {long: true})}`)

    }, ms(Timer));
};

module.exports.help = {
    name: 'timer',
    alias: ['minuteur', 'chrono']
}