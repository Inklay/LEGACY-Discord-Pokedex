const fs = require('fs');

module.exports = {
    set: function(id, type, spoiler, language, channel) {
        rawData = fs.readFileSync('language.json');
        data = JSON.parse(rawData);
        for (i in data.servers) {
            if (data.servers[i].id == id && data.servers[i].type == type) {
                data.servers[i].spoiler = spoiler;
            }
        }
        json = JSON.stringify(data);
        fs.writeFileSync('language.json', json);
        if (spoiler == "off") {
            switch (language) {
                case "français":
                case "francais":
                    channel.sendMessage("Les spoilers ne seront plus affichés.");
                    break;
                case "english":
                    channel.sendMessage("Spoilers won't be shown.");
                    break;
            }
        } else {
            switch (language) {
                case "français":
                case "francais":
                    channel.sendMessage("Les spoilers seront affichés.");
                    break;
                case "english":
                    channel.sendMessage("Spoilers will be shown.");
                    break;
            }
        }
    },
    get: function(id, type) {
        rawData = fs.readFileSync('language.json');
        data = JSON.parse(rawData);
        for (i in data.servers) {
            if (data.servers[i].id == id && data.servers[i].type == type) {
                if (data.servers[i].hasOwnProperty('spoiler'))
                    return data.servers[i].spoiler;
                else
                    return "on";
            }
        }
    }
};