const Discord = require("discord.js");
const bot = new Discord.Client;
const { token, prefix } = require('./config')
const fs = require('fs')
bot.commands = new Discord.Collection()

bot.on('ready', () => {
    
    bot.user.setActivity('être confiné').catch(console.error)
    console.log('Prêt à servir NoEthik !');
    
});


fs.readdir('./Commandes/', (err, files) => {
    
    console.log(`${files.length} commandes chargées !`);
    
    let jsfile = files.filter(f => f.split(".").pop() === "js");

    if(err) console.log('error');
    if(jsfile.length <= 0) {
        console.log("Pas de commandes trouvées !");
        return;
    }
    
    jsfile.forEach((f, i) => {
        let props = require(`./Commandes/${f}`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on('message', async message => {
    
    bot.emit('checkMessage', message);
    let spliteMessage = message.content.split(' ');
    let cmd = spliteMessage[0];
    let Args = spliteMessage.slice(1);
    var args = message.content.substring(prefix.length).split(" ");
    let commandeFile = bot.commands.get(cmd.slice(prefix.length));
    if(commandeFile) commandeFile.run(bot, message, Args, args)

})

bot.on('guildMemberAdd', member => {
    member.author.createdDM().then(channel => {
        return channel.send('Bienvenue sur le serveur de NoEthik,' + member.displayName + '!');
    }).catch(console.error);
});

bot.on('guildMemberBan', member => {
    member.author.createdDM().then(channel => {
        return channel.send('Vous avez été ban du serveur de NoEthik,' + member.displayName + '!');
    }).catch(console.error);
});

bot.login(token)