//Node.js modules
const Discordie = require('discordie');
const connect = require('./connect.js');
const pokemon = require('./pokemon.js');
const language = require('./language.js');
const prefix = require('./prefix.js');
const move = require('./move.js');
const Events = Discordie.Events;
const client = new Discordie({autoReconnect: true});

connect.connect(client);

client.Dispatcher.on("GATEWAY_READY", e => {
    console.log("bot.js: connected as " + client.User.username);
    client.User.setGame({name: "pokedex help", type: 0});
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    var content = e.message.content.toLowerCase();
    var channel = e.message.channel;

    //Check if message starts with prefix
    if (e.message.guild)
        var guildPrefix = prefix.get(e.message.channel.guild.id, 'guild');
    else
        var guildPrefix = prefix.get(e.message.author.id, 'user');
    if (content.startsWith("pokedex"))
        content = content.substring(8);
    else if (guildPrefix && content.startsWith(guildPrefix))
        content = content.substring(guildPrefix.length + 1);
    else
        return;

    //Language handling
    if (content == "language list") {
        if (e.message.guild)
            console.log("bot.js: guild " + e.message.guild.id + " asked for available languages");
        else
            console.log("bot.js: user " + e.message.author.id + " asked for available languages");
        language.list(channel);
        return;
    } else if (content.startsWith("language ")) {
        if (e.message.guild)
            language.set(content.substring(9), channel, e.message.channel.guild.id, 'guild');
        else
            language.set(content.substring(9), channel, e.message.author.id, 'user');
        return;
    }

    //Check if language is set
    if (e.message.guild)
        guildLanguage = language.get(e.message.channel.guild.id, 'guild');
    else
        guildLanguage = language.get(e.message.author.id, 'user');
    if (!guildLanguage) {
        channel.sendMessage("English: no language set for this guild, use \'pokedex language list\' to set a language for this guild.\n" + 
        "Français: aucune langue n'a été définie pour ce serveur, tapez \'pokedex language list\' pour définir une langue sur ce serveur.");
        return;
    }

    //Prefix hangling
    if (content == "prefix")
        prefix.show(guildPrefix, guildLanguage, channel);
    else if (content.startsWith("prefix ")) {
        if (e.message.guild)
            prefix.set(e.message.channel.guild.id, 'guild', content.substring(7), guildLanguage, channel);
        else
            prefix.set(e.message.author.id, 'user', content.substring(7), guildLanguage, channel);
    }

    //Help message
    else if(content == "help") {
        switch (guildLanguage) {
            case "francais":
            case "français":
                channel.sendMessage("```Avoir les informations d'un Pokémon: pokedex <mega> [nom du Pokémon] <shiny>\n" + 
                "Voir le préfix actuel: pokedex prefix\nChanger le préfix: pokedex prefix [prefix]\nVoir la liste des langues supportées: pokedex language list\n" +
                "Changer la langue du serveur: pokedex language [langue]\nVoir les affinités de type d'un Pokémon: pokedex type [nom du Pokémon]```");
                break;
            case "english":
                    channel.sendMessage("```Get informations about a Pokémon: pokedex <mega> [Pokémon name] <shiny>\n" + 
                    "See configured prefix: pokedex prefix\nChange prefix: pokedex prefix [prefix]\nSee the list of supported language: pokedex language list\n" +
                    "Change guild language: pokedex language [language]\nSee type affinity of a Pokémon: `pokedex type [nom du Pokémon]``");
                break;
        }
        
    }

    //Pokémon infos
    else 
        pokemon.pokemon(guildLanguage, content, channel);
});
