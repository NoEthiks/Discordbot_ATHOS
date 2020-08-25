const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    
    const subReddits = ["dankmeme", "meme", "me_irl"];
        
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
        
        const memeEmbed = new Discord.MessageEmbed()
            
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(memeEmbed);
};

module.exports.help = {
    name: 'meme',
    alias: ['dankmeme', 'memedealer']
}