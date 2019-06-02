const fs = require('fs');

module.exports = {
    set: function(content, channel, id)
    {
        language = content.substring(17);
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
            if (data.servers[i].id == id) {
                data.servers[i].language = language;
                found = 1;
            }
        }
        if (!found)
            data.servers.push({"id": id, "language": language});
        json = JSON.stringify(data);
        fs.writeFileSync('language.json', json);
    },
    get: function(id)
    {
        rawData = fs.readFileSync('language.json');
        data = JSON.parse(rawData);
        for (i in data.servers) {
            if (data.servers[i].id == id)
                return data.servers[i].language;
        }
        return null;
    },
    list: function(channel)
    {
        channel.sendMessage("Français\nEnglish");
    }
};