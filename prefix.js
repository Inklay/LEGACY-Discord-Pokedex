const fs = require('fs');

module.exports = {
    set: function(id, type, prefix, language, channel) {
        rawData = fs.readFileSync('language.json');
        data = JSON.parse(rawData);
        for (i in data.servers) {
            if (data.servers[i].id == id && data.servers[i].type == type) {
                data.servers[i].prefix = prefix;
            }
        }
        json = JSON.stringify(data);
        fs.writeFileSync('language.json', json);
        switch (language) {
            case "français":
            case "francais":
                channel.sendMessage("Le préfix "  + prefix + " a bien été défini");
                break;
            case "english":
                channel.sendMessage("Prefix " + prefix + " successfully set.");
                break;
        }
    },
    get: function(id, type) {
        rawData = fs.readFileSync('language.json');
        data = JSON.parse(rawData);
        for (i in data.servers) {
            if (data.servers[i].id == id && data.servers[i].type == type) {
                if (data.servers[i].hasOwnProperty('prefix'))
                    return data.servers[i].prefix;
                else
                    return null;
            }
        }
    },
    show: function(prefix, language, channel) {
        switch (language) {
            case "français":
            case "francais":
                if (prefix)
                    channel.sendMessage("Le préfix configuré pour ce serveur est: " + prefix);
                else
                    channel.sendMessage("Aucun préfix configuré pour ce serveur");
                break;
            case "english":
                if (prefix)
                    channel.sendMessage("The configured prefix for this guild is: " + prefix);
                else
                    channel.sendMessage("No configured prefix for this guild");
                break;
            default:
                break;
        }
    }
};