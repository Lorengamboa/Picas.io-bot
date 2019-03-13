require("dotenv").config();

const request = require("request");
const Discord = require("discord.js");

const token = process.env.DISCORD_TOKEN;
const client = new Discord.Client();

client.on("message", msg => {

  /**
   * 
   */
  if (msg.content === "ping") return msg.channel.send(`Pong`);

  /**
   * 
   */
  if (msg.content.includes("!add")) {
    const message = msg.content.replace("!add", "").replace(" ", "");
    request.post(
      "http://localhost:5001/api/dictionary/word",
      { json: { keyword: message } },
      function(error, response, body) {
        if (error!==null) return msg.channel.send(`Failed adding new keyword!`);
        else msg.channel.send(`New keyword added`);
      }
    );
  }

  /**
   * 
   */
  if (msg.content.includes("!idea")) {
    //
  }
});

client.on("ready", () => {
  client.channels.find(x => x.name === "general😉").send("Hello! I'm connected!");
});

client.login(token);
