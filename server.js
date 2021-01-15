const dbd = require("dbd.js"); 

const Api = require("dbd.js/package/handlers/api");

Api();

const bot = new dbd.Bot({
  token: process.env.TOKEN,

  prefix: "$getServerVar[prefix]"
});

bot.onMessage();

const fs = require("fs");

const folders = fs.readdirSync("./commands/");

for (const files of folders) {
  const folder = fs
    .readdirSync(`./commands/${files}/`)
    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`);

    bot.command({
      name: command.name,

      aliases: command.aliases,

      code: command.code,

      nonPrefixed: command.nonPrefixed
    });
  }
}

bot.variables({
  prefix: "!",
  user_ID: "undefinied",
  user_message: "undefinied",
  snipechannel: "undefined",
  warn: "0",
  Bank: "0",
  Balance: "0"
});

bot.deletedCommand({
  channel: "$channelID",
  code: `
$setChannelVar[user_message;$message]
$setChannelVar[user_ID;$authorID]
$setChannelVar[snipechannel;$channelID]
`
});
bot.onMessageDelete();

bot.status({
 
text: "BUDDY Support",
 
type: "PLAYING", 
 
time: 12
 
})

bot.status({
text: "BUDDY Support",
type:" Playing",
time: 12
})

bot.interactionCommand({
name: "say",
code: `$interactionReply[$message]
`
}) 

bot.interactionCommand({
  name: "ping", 
  code: `$interactionReply[Pong! $pingms] 
`
}) 
bot.onInteractionCreate() 

