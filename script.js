"use strict";

const { Client, MessageEmbed } = require("discord.js");
const config = require("./config.json");

const client = new Client();

const prefix = "#";

client.on("ready", () => {
  console.log("I am all set up!");
});

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "replytome") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`I hate ts. ${timeTaken}`);
    console.log(message.channel.id);
  }

  if (command === "embed") {
    const embed = new MessageEmbed()
      .setTitle("just testing embed, this is the title")
      .setColor(0xff0000)
      .setDescription("this is the description");
    message.channel.send(embed);
  }
});

client.login(config.BOT_TOKEN);
