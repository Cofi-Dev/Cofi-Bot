try{
    var settings = require("./settings.json");
    var Discord = require('discord.js');
    var client = new Discord.Client();
    var date = new Date();
}catch(e){
    console.log(e.stack);
	console.log(process.version);
	console.log("Please run npm install and ensure it passes with no errors!");
	process.exit();
}

console.log("Starting NaM-Bot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
    console.log("- - - - - - - - - - - - - - - -");
});

client.on('message', message => {
    if (message.content === settings.prefix+'ping') {
        message.channel.send(":ping_pong: "+parseInt(client.ping)+" ms");
    }else if(message.content === settings.prefix+'uptime'){
        // Server on dates
        var onDay = date.getHours();
        var onDay = date.getMinutes();
        var onDay = date.getMilliseconds();

        // Actual dates
        var actDate = new Date();
        var actDay = date.getHours();
        var actDay = date.getMinutes();
        var actDay = date.getMilliseconds();

        
    }
});

client.login(settings.token);