//Node.js modules
const Discordie = require('discordie');
const pokemon = require('./src/pokemon.js');
const language = require('./src/language.js');
const prefix = require('./src/prefix.js');
const spoiler = require('./src/spoiler.js');
const move = require('./src/move.js');
const Events = Discordie.Events;
const client = new Discordie({autoReconnect: true});
const fs = require('fs');
var playing = 0;

function changePlaying() {
    if (playing == 8)
        playing = 0;
    else
        playing++;
    if (playing % 4 == 0)
        client.User.setGame({name: "Gen 8 is in progress", type: 0});
    if (playing == 1)
        client.User.setGame({name: "is available on GitHub", type: 0});
    else if (playing == 2)
        client.User.setGame({name: "Eevee > Pikachu", type: 0});
    else if (playing == 3) {
        rawData = fs.readFileSync('language.json');
        data = JSON.parse(rawData);
        client.User.setGame({name: 'on ' + data.servers.length + ' servers', type: 0});
    } else if (playing == 5)
        client.User.setGame({name: "pokedex help", type: 0});
    else if (playing == 6)
        client.User.setGame({name: "Sobble > all", type: 0});
    else if (playing == 7)
        client.User.setGame({name: "7.8/10 Too much water", type: 0});
}

console.log("connect.js: connecting");
token = fs.readFileSync('token', 'utf8').replace('\n', '');
client.connect({token});

client.Dispatcher.on("DISCONNECTED", e => {
    console.log("connect.js: can not connect to Discord, please verify your token and check Discord's server statues.");
});

client.Dispatcher.on("GATEWAY_READY", e => {
    console.log("bot.js: connected as " + client.User.username);
    if (process.env.PORT) {
        express = require('express');
        app = express();
        app.listen(process.env.PORT, function () {
            console.log('bot.js: app listening on port ' + process.env.PORT);
        });
    }
    client.User.setGame({name: "pokedex help", type: 0});
    if (!fs.existsSync('language.json')) {
        rawData = '{"servers":[{}]}'
        fs.writeFileSync('language.json', rawData);
    } else
        rawData = fs.readFileSync('language.json');
    try {
        JSON.parse(rawData);
    } catch {
        rawData = '{"servers":[{}]}';
        fs.writeFileSync('language.json', rawData);
    }
    setInterval(changePlaying, 120000);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    var content = e.message.content.toLowerCase();
    var channel = e.message.channel;
    var id = e.message.id;

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

    //Prefix handling
    if (content == "prefix")
        prefix.show(guildPrefix, guildLanguage, channel);
    else if (content.startsWith("prefix ")) {
        if (e.message.guild)
            prefix.set(e.message.channel.guild.id, 'guild', content.substring(7), guildLanguage, channel);
        else
            prefix.set(e.message.author.id, 'user', content.substring(7), guildLanguage, channel);
    }

    //Spoiler handling
    if (content.startsWith("spoiler ")) {
        if (e.message.guild)
            spoiler.set(e.message.channel.guild.id, 'guild', content.substring(8), guildLanguage, channel);
        else
            spoiler.set(e.message.author.id, 'user', content.substring(8), guildLanguage, channel);
    }
    //Help message
    else if(content == "help") {
        switch (guildLanguage) {
            case "francais":
            case "français":
                channel.sendMessage("```Avoir les informations d'un Pokémon: pokedex <mega> [nom du Pokémon] <shiny>\n" + 
                "Voir le préfix actuel: pokedex prefix\nChanger le préfix: pokedex prefix [prefix]\nVoir la liste des langues supportées: pokedex language list\n" +
                "Changer la langue du serveur: pokedex language [langue]\nVoir les affinités de type d'un Pokémon: pokedex type [nom du Pokémon]\nAvoir les informations d'une attaque: " + 
                "pokedex move <move>```");
                break;
            case "english":
                    channel.sendMessage("```Get informations about a Pokémon: pokedex <mega> [Pokémon name] <shiny>\n" + 
                    "See configured prefix: pokedex prefix\nChange prefix: pokedex prefix [prefix]\nSee the list of supported language: pokedex language list\n" +
                    "Change guild language: pokedex language [language]\nSee type affinity of a Pokémon: pokedex type [nom du Pokémon]\nGet informations about a move: " + 
                    "pokedex move <move>```");
                break;
        }
        
    }

    //Move infos
    else if (content.startsWith("move "))
        move.move(guildLanguage, content.substring(5), channel);

    //Pokémon infos
    else {
        if (e.message.guild)
            pokemon.pokemon(guildLanguage, content, channel, e.message.channel.guild.id, 'guild');
        else
            pokemon.pokemon(guildLanguage, content, channel, e.message.author.id, 'user');
    }
});
