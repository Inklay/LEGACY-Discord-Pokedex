const request = require('request');
const $ = require('cheerio');

module.exports = {
    move: function(move, channel) {
        var search = "https://pokepedia.fr/" + move;
        var found = 0;
        var title;
        var color = 0xffffff;
        var pp;
        var ppMax;
        var accuray;
        var power;
        var type;
        var desc;
            
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
                channel.sendMessage("Impossible de trouver la capacité \"" + move.charAt(0).toUpperCase() + move.slice(1) + "\" merci de vérifier l'orthographe.");
                return;
            }
            title = $('.firstHeading', body).text();
            $('tr > th > a', body).each(function() {
                if ($(this)[0].attribs.href == "/PP") {
                    pp = $(this).parent().next()[0].children[0].data;
                    pp = pp.substring(0, pp.length - 2);
                }
            });
            description = "PP: " + pp;
            console.log(pp);
            channel.sendMessage("", false, {
                color: color,
                title: title,
                description: description,
                url: search, 
                footer : {
                    text: "Informations de Poképedia"
                }
            });
            console.log("move/french.js: successfully gathered info about " + move);
        });
    }
}