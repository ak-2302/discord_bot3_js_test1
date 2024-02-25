const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: Object.values(GatewayIntentBits).reduce((a, b) => a | b)
});


client.login("MTE2MTg5NzIyODY1NTQwMzA5OA.GnUvc3.fYDK0WmKGMSofYG_OlLieWyJwAwbGyBUJb-pgE");
