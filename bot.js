const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("559439686364299264")
setInterval(function() {
channel.send(`hi hello hi hello`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
