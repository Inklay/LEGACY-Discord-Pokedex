const request = require('request');
const $ = require('cheerio');

module.exports = {
    move: function(move, channel) {
        var search = "https://pokepedia.fr/" + move;
        var found = 0;
            
        console.log("move/french.js: gathering info about " + move);
        request(search, { json: true }, (err, res, body) => {
            if (err) {
                channel.sendMessage("Impossible de communiquer avec le serveur, merci de réessayer dans 5 minutes.\nInformations sur l'erreur: " + err);
                return;
            }
            $('.toctext', body).each(function(i) {
                if ($(this).text() == "Effet")
                    found = 1;
            });
            if (!found) {
                channel.sendMessage("Impossible de trouver la capacité \"" + content.charAt(0).toUpperCase() + content.slice(1) + "\" merci de vérifier l'orthographe.");
                return;
            }
        });
    }
}