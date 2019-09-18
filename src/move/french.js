const request = require('request');
const $ = require('cheerio');

module.exports = {
    move: function(move, channel) {
        var search = "https://pokepedia.fr/";
        var found = 0;
        var title;
        var color = 0xffffff;
        var pp;
        var name;
        var cat;
        var ppMax;
        var accuray;
        var power;
        var type;
            
        console.log("move/french.js: gathering info about " + move);
        move = move.charAt(0).toUpperCase() + move.slice(1)
        move = move.replace(" ", "-");
        if (move.search("-" != -1))
            move = move.substring(0, move.search("-") + 1) + move.charAt(move.search("-") + 1).toUpperCase() + move.substring(move.search("-") + 2);
        search += move;
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
                channel.sendMessage("Impossible de trouver la capacité \"" + move + "\" merci de vérifier l'orthographe.");
                return;
            }
            title = $('.firstHeading', body).text();
            $('th', body).each(function() {
                if ($(this).text().startsWith("Nom anglais"))
                    name = $(this).next().text();
            });
            $('tr > th > a', body).each(function() {
                if ($(this)[0].attribs.href == "/PP") {
                    pp = $(this).parent().next()[0].children[0].data;
                    pp = pp.substring(0, pp.length - 2);
                    ppMax = $(this).parent().next()[0].children[1].children[0].data;
                    ppMax = ppMax.substring(5);
                }
                if ($(this)[0].attribs.href == "/Puissance_(statistique)") {
                    power = $(this).parent().next()[0].children[0].data;
                    if (power.search(" ") != -1)
                        power = power.substring(0, power.search(" "));
                    if (power.search("\n") != -1)
                        power = power.substring(0, power.length - 1);
                }
                if ($(this)[0].attribs.href == "/Pr%C3%A9cision") {
                    accuray = $(this).parent().next()[0].children[0].data;
                    if (accuray.search("% ") != -1)
                        accuray = accuray.substring(0, accuray.search("% ") + 1);
                }
                if ($(this)[0].attribs.href == "/Cat%C3%A9gorie_de_Capacit%C3%A9") {
                    cat = $(this).parent().next()[0].children[0].children[0].attribs.src;
                    if (cat.search("Physique") != -1)
                        cat = "Physique";
                    else if (cat.search("Statut") != -1)
                        cat = "Statut";
                    else
                        cat = "Spéciale";
                }
                if ($(this)[0].attribs.href == "/Type")
                    type = $(this).parent().next()[0].children[0].children[0].attribs.alt;
            });
            switch (type) {
                case "Acier":
                    color = 0xadadc6;
                    break;
                case "Combat":
                    color = 0xa55239;
                    break;
                case "Dragon":
                    color = 0x8858f6;
                    break;
                case "Eau":
                    color = 0x399cff;
                    break;
                case "Électrik":
                    color = 0xffc631;
                    break;
                case "Fée":
                    color = 0xe09ae3;
                    break;
                case "Feu":
                    color = 0xf75231;
                    break;
                case "Glace":
                    color = 0x5acee7;
                    break;
                case "Insecte":
                    color = 0xadbd21;
                    break;
                case "Plante":
                    color = 0xadbd21;
                    break;
                case "Poison":
                    color = 0xb55aa5;
                    break;
                case "Psy":
                    color = 0xff73a5;
                    break;
                case "Roche":
                    color = 0xbda55a;
                    break;
                case "Sol":
                    color = 0xd6b55a;
                    break;
                case "Spectre":
                    color = 0x6363b5;
                    break;
                case "Ténèbres":
                    color = 0x735a4a;
                    break;
                case "Vol":
                    color = 0x9cadf7;
                    break;
                default:
                    color = 0xada594;
                    break;
            }
            description = "Nom Anglais: " + name;
            description += "Catégorie: " + cat;
            description += "\nType: " + type;
            description += "\nPP: " + pp;
            description += "\nPP Max: " + ppMax;
            description += "\nPuissance: " + power;
            description += "\nPrécision: " + accuray;
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