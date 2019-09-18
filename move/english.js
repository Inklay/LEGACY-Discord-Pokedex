const request = require('request');
const $ = require('cheerio');

module.exports = {
    move: function(move, channel) {
        var search = "https://bulbapedia.bulbagarden.net/wiki/";
        var found = 0;
        var title;
        var color = 0xffffff;
        var pp;
        var cat;
        var ppMax;
        var accuray;
        var power;
        var type = "NULL";
            
        console.log("move/english.js: gathering info about " + move);
        move = move.charAt(0).toUpperCase() + move.slice(1)
        move = move.replace(" ", "_");
        if (move.search("_" != -1))
            move = move.substring(0, move.search("_") + 1) + move.charAt(move.search("_") + 1).toUpperCase() + move.substring(move.search("_") + 2);
        search += move;
        request(search, { json: true }, (err, res, body) => {
            if (err) {
                channel.sendMessage("Can not reach the sever, please try again in 5 minutes.\nInformations about the error: " + err);
                return;
            }
            $('ul > li > a', body).each(function() {
                if ($(this)[0].attribs.href == "#Effect")
                    found = 1;
            });
            if (!found) {
                channel.sendMessage("Can not find move \"" + move + "\".");
                return;
            }
            title = $('.firstHeading', body).text().substring(0, $('.firstHeading', body).text().length - 7);
            $('tr > td > a', body).each(function() {
                if ($(this)[0].attribs.href != null && $(this)[0].attribs.href.search("(type)") != -1 && type == "NULL")
                    type = $(this)[0].children[0].children[0].children[0].data;
            });
            $('tr > th > a', body).each(function() {
                if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Damage_category")
                    cat = $(this)[0].parent.next.next.children[1].children[0].children[0].data;
                if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Power_Point") {
                    pp = $(this)[0].parent.next.next.children[0].data;
                    pp = pp.substring(2);
                    ppMax = cat = $(this)[0].parent.next.next.children[1].children[0].data;
                    ppMax = ppMax.substring(ppMax.search(" "));
                    ppMax = ppMax.substring(0, ppMax.length - 1);
                }
                if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Power")
                    power = $(this)[0].parent.next.next.children[1].children[0].data;
                if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Accuracy")
                    accuray = $(this)[0].parent.next.next.children[1].children[0].data + "%";
            });
            switch (type) {
                case "Steel":
                    color = 0xadadc6;
                    break;
                case "Fighting":
                    color = 0xa55239;
                    break;
                case "Dragon":
                    color = 0x8858f6;
                    break;
                case "Water":
                    color = 0x399cff;
                    break;
                case "Electric":
                    color = 0xffc631;
                    break;
                case "Fairy":
                    color = 0xe09ae3;
                    break;
                case "Fire":
                    color = 0xf75231;
                    break;
                case "Ice":
                    color = 0x5acee7;
                    break;
                case "Bug":
                    color = 0xadbd21;
                    break;
                case "Grass":
                    color = 0xadbd21;
                    break;
                case "Poison":
                    color = 0xb55aa5;
                    break;
                case "Psychic":
                    color = 0xff73a5;
                    break;
                case "Rock":
                    color = 0xbda55a;
                    break;
                case "Ground":
                    color = 0xd6b55a;
                    break;
                case "Ghost":
                    color = 0x6363b5;
                    break;
                case "Dark":
                    color = 0x735a4a;
                    break;
                case "Flying":
                    color = 0x9cadf7;
                    break;
                default:
                    color = 0xada594;
                    break;
            }
            description = "Category: " + cat;
            description += "\nType: " + type;
            description += "\nPP: " + pp;
            description += "\nPP Max: " + ppMax;
            description += "\nPower: " + power;
            description += "\nAccuracy: " + accuray;
            channel.sendMessage("", false, {
                color: color,
                title: title,
                description: description,
                url: search, 
                footer : {
                    text: "Informations from Bulbapedia"
                }
            });
            console.log("move/english.js: successfully gathered info about " + move);
        });
    }
}