const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", message => {
  if (message.author.bot) return;
  if (message.content === "!ping") {
    message.reply("Pong!");
  }
});

client.login(process.env.DISCORD_TOKEN);
Scroll down → Commit new file

🔹 STEP 4: Add package.json
Click Add file → Create new file

File name:

go
Copy code
package.json
Paste this 👇

json
Copy code
{
  "name": "discord-bot",
  "version": "1.0.0",
  "main": "index.js",
  "type": "commonjs",
  "dependencies": {
    "discord.js": "^14.14.1"
  }
}
