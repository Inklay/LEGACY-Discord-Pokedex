const Discordie = require('discordie');
const connect = require('./connect.js');
const pokemon = require('./pokemon.js');
const language = require('./language.js');
const Events = Discordie.Events;
const client = new Discordie({autoReconnect: true});

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
        if (guild_language != null)
            pokemon.pokemon(guild_language, content, channel);
        else
            channel.sendMessage("English: no language set for this guild, use \'pokedex language list\' to set a language for ths guild.\n" + 
            "Français: aucune langue n'a été définie pour ce serveur, tapez \'pokedex language list\' pour définir une langue sur ce serveur.");
    }
});
