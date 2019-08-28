const fs = require('fs');

module.exports = {
    set: function(language, channel, id, type)
    {
        if (e.message.guild)
            console.log("language.js: setting guild " + e.message.guild.id + " language to " + language);
        else
            console.log("language.js: setting user " + e.message.author.id + " language to " + language);

        found = 0;
        rawData = fs.readFileSync('language.json');
        data = JSON.parse(rawData);

        switch (language) {
            case "francais":
            case "français":
            case "english":
                break;
            default:
                channel.sendMessage("English: unkown or unsupported language, type \'pokedex language list\' to view supported languages.\n"
                + "Français: langue inconnue ou non supportée, tapez \'pokedex language list'\ pour voir la liste des langues supportées.");
                return;
        }
        for (i in data.servers) {
            if (data.servers[i].id == id && data.servers[i].type == type) {
                data.servers[i].language = language;
                found = 1;
            }
        }
        if (!found)
            data.servers.push({"id": id, "language": language, "type": type});
        json = JSON.stringify(data);
        fs.writeFileSync('language.json', json);

        if (e.message.guild)
            console.log("language.js: guild " + e.message.guild.id + " set it's language to " + language);
        else
            console.log("language.js: user " + e.message.author.id + " set it's language to " + language);

        switch (language) {
            case "francais":
            case "français":
                channel.sendMessage("La langue a bien été définie.");
                break;
            case "english":
                channel.sendMessage("Language successfully set.");
                break;
        }
    },
    get: function(id, type)
    {
        rawData = fs.readFileSync('language.json');
        data = JSON.parse(rawData);
        for (i in data.servers) {
            if (data.servers[i].id == id && data.servers[i].type == type)
                return data.servers[i].language;
        }
        return null;
    },
    list: function(channel)
    {
        channel.sendMessage("Français\nEnglish");
    }
};