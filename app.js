try{
    var settings = require("./settings.json");
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

client.on('message', message => {
    if (message.content === settings.prefix + "ping") {
        message.channel.send("🏓" + parseInt(client.ping) + " ms");
    }else if(message.content === settings.prefix + "uptime") {
        let totalSeconds = (client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        message.channel.send(":timer: " + hours + " Hours " + minutes+ " Minutes " + parseInt(seconds) + " Seconds");
    }else if(message.content === settings.prefix + "avatar"){
        message.reply(message.author.avatarURL);
    }else if(message.content === settings.prefix + "user"){
        message.reply(client.user);
    } else {
    	message.reply("Unknown command");
    }
});

client.login(settings.token);
