const Discordie = require('discordie');
const connect = require('./connect.js');
const pokemon = require('./pokemon.js');
const language = require('./language');
const Events = Discordie.Events;
const client = new Discordie();

connect.connect(client);

client.Dispatcher.on("GATEWAY_READY", e => {
    client.User.setGame({name: "pokedex help", type: 0});
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    var content = e.message.content.toLowerCase();
    var channel = e.message.channel;

    if (content == "pokedex language list")
        language.list(channel);
    else if (content.startsWith("pokedex language"))
        language.set(content, channel, e.message.channel.guild.id);
    else if(content == "pokedex help") {
        channel.sendMessage("pokedex [pokemon name] <mega> <shiny>");
    } else if((content.startsWith("pokedex ") || content.startsWith("pokédex ")) && content != "pokedex [pokemon name] <mega> <shiny>") {
        guild_language = language.get(e.message.channel.guild.id);
        pokemon.pokemon(guild_language, content, channel);
    }
});
