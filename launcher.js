bot_secret_token = "TOKEN";

try{
    var Discord = require('discord.js');
    var client = new Discord.Client();
}catch(e){
    console.log(e.stack);
	console.log(process.version);
	console.log("Please run npm install and ensure it passes with no errors!");
	process.exit();
}

console.log("Starting NaM-Bot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
});

var prefix = "!"

client.on('message', message => {
    if (message.content === prefix+'ping') {
      message.channel.send('pong :ping_pong:');
    }else if(message.content === prefix+'nam'){
        message.channel.send("NaM");
    }
});

client.login(bot_secret_token);