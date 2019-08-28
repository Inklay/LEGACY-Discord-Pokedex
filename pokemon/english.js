const request = require('request');
const $ = require('cheerio');

module.exports = {
    pokemon: function (content, channel)
    {
        console.log("pokemon/english.js: gathering info about " + content);
        var found = 0;
        var description;
        var url = "https://bulbapedia.bulbagarden.net/wiki/";
        var gif_url = "http://play.pokemonshowdown.com/sprites/xyani/";
        var sprite;
        var color = 0xffffff;
        var title;
        var number;
        var type1;
        var type2;
        var family
        var height;
        var weight;
        var ability1;
        var ability2 = "NULL";
        var ability3 = "NULL";
        var egg1;
        var egg2 = "NULL";
        var rate;
        var hp = 0;
        var atk = 0;
        var def = 0;
        var spa = 0;
        var spd = 0;
        var spe = 0;
        var alola = 0;
        var is_mega = 0;
        var mega = "Méga-";
        var mega_type = "";
        var shiny = 0;

        if (content.search(" shiny") != -1) {
            gif_url = "http://play.pokemonshowdown.com/sprites/xyani-shiny/";
            shiny = 1;
            content = content.substring(0, content.length - 6);
        }
        if (content.search(" mega") != -1 || content.startsWith("mega ")) {
            is_mega = 1;
            if (content.startsWith("mega "))
                content = content.substring(5);
            if (content.search(" ") != -1)
                search = url.concat(content.substring(0, content.search(" ")));
            else
                search = url.concat(content);
            if (content.search(" x") != -1)
                mega_type = " X ";
            else if (content.search(" y") != -1)
                mega_type = " Y ";
        }
        if (content.search(" ") != -1 && !is_mega)
            search = url.concat(content.substring(0, content.search(" ")));
        else if (!is_mega)
            search = url.concat(content);
        if (content.search(" alolan") != -1 || content.startsWith("alolan ")) {
            if (content.startsWith("alolan "))
                content = content.substring(7);
            title = "Alolan ";
            alola = 1;
            if (content.search(" ") != -1)
                search = url.concat(content.substring(0, content.search(" ")));
            else
                search = url.concat(content);
        }
        request(search, { json: true }, (err, res, body) => {
            if (err) {
                channel.sendMessage("Can not reach the sever, please try again in 5 minutes.\nInformations about the error: " + err);
                return;
            }
            $('ul > li > a', body).each(function() {
                if ($(this)[0].attribs.href == "#Biology")
                    found = 1;
            });
            if (!found) {
                if (alola)
                    channel.sendMessage("Can not find \"Alolan " + search.substring(40).charAt(0).toUpperCase() + search.substring(40).slice(1) + "\".");
                else
                    channel.sendMessage("Can not find \"" + search.substring(40).charAt(0).toUpperCase() + search.substring(40).slice(1) + "\".");
                return;
            }
            if (alola)
                title = title.concat($('.firstHeading', body).text().substring(0, $('.firstHeading', body).text().length - 10));
            else
                title = $('.firstHeading', body).text().substring(0, $('.firstHeading', body).text().length - 10);
            $('big > big > a', body).each(function () {
                if ($(this)[0].attribs.href == "/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number")
                    number = $(this)[0].children[0].children[0].data.substring(1);
            });
            found = 0;
            $('tr > td > a', body).each(function() {
                if (alola && $(this)[0].attribs.class != null && $(this)[0].attribs.class == "image" && $(this)[0].attribs.title != null && $(this)[0].attribs.title.search("Alolan") != -1)
                    found = 1;
                else if (is_mega && $(this)[0].attribs.class != null && $(this)[0].attribs.class == "image" && $(this)[0].attribs.title != null && $(this)[0].attribs.title.search("Mega") != -1)
                    found = 1;
            });
            if (!found) {
                if (alola) {
                    channel.sendMessage("\"" + search.substring(40).charAt(0).toUpperCase() + search.substring(40).slice(1) + "\" Does not have an alolan form.");
                    return;
                } else if (is_mega) {
                    channel.sendMessage("\"" + search.substring(40).charAt(0).toUpperCase() + search.substring(40).slice(1) + "\" Does not have a mega evolution.");
                    return;
                } 
            }
            $('tr > td > a', body).each(function() {
                if ($(this)[0].attribs.href != null && $(this)[0].attribs.href.search("(type)") != -1) {
                    if (alola && type1 == null) {
                        if ($(this).parent().parent().parent().parent().next()[0].type == "tag" && $(this).parent().parent().parent().parent().next()[0].name == "small"
                        && $(this).parent().parent().parent().parent().next()[0].children[0].data.search("Alolan") != -1) {
                            type1 = $(this)[0].attribs.href.substring(6, ($(this)[0].attribs.href.length - 7));
                            type2 = $(this).parent().next().children()[0].attribs.href.substring(6, ($(this).parent().next().children()[0].attribs.href.length - 7));
                        }
                    } else if (is_mega && type1 == null) {
                        if ($(this).parent().parent().parent().parent().next()[0].type == "tag" && $(this).parent().parent().parent().parent().next()[0].name == "small"
                        && $(this).parent().parent().parent().parent().next()[0].children[0].data.search("Mega") != -1) {
                            type1 = $(this)[0].attribs.href.substring(6, ($(this)[0].attribs.href.length - 7));
                            type2 = $(this).parent().next().children()[0].attribs.href.substring(6, ($(this).parent().next().children()[0].attribs.href.length - 7));
                        }
                    } else if (type1 == null) {
                        type1 = $(this)[0].attribs.href.substring(6, ($(this)[0].attribs.href.length - 7));
                        type2 = $(this).parent().next().children()[0].attribs.href.substring(6, ($(this).parent().next().children()[0].attribs.href.length - 7));
                    }
                } else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Pok%C3%A9mon_category") {
                    if ($(this)[0].children[0].children[0].type == "text")
                        family = $(this)[0].children[0].children[0].data;
                    else {
                        family = $(this)[0].children[0].children[0].children[0].data;
                        family += " Pokémon";
                    }
                }
            });
            $('tr > td > b > a', body).each(function() {
                if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/List_of_Pok%C3%A9mon_by_height"){
                    color = parseInt("0x" + $(this).parent().parent()[0].attribs.style.substring(12));
                    if (is_mega || alola) {
                        height = $(this).parent().next()[0].children[1].children[4].children[1].children[0].data;
                        height = height.substring(0, height.length - 1) + "/";
                        height = height.concat($(this).parent().next()[0].children[1].children[4].children[3].children[0].data.substring(1));
                    } else {
                        height = $(this).parent().next()[0].children[1].children[0].children[1].children[0].data;
                        height = height.substring(0, height.length - 1) + "/";
                        height = height.concat($(this).parent().next()[0].children[1].children[0].children[3].children[0].data.substring(1));
                    }
                } else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/List_of_Pok%C3%A9mon_by_weight"){
                    if (is_mega || alola) {
                        weight = $(this).parent().next()[0].children[1].children[4].children[1].children[0].data;
                        weight = weight.substring(0, weight.length - 1) + "/";
                        weight = weight.concat($(this).parent().next()[0].children[1].children[4].children[3].children[0].data.substring(1));
                    } else {
                        weight = $(this).parent().next()[0].children[1].children[0].children[1].children[0].data;
                        weight = weight.substring(0, weight.length - 1) + "/";
                        weight = weight.concat($(this).parent().next()[0].children[1].children[0].children[3].children[0].data.substring(1));
                    }
                } 
            });
            description = "Pokédex number: " + number + "\n";
            if (type2 == "Unknown")
                description += "Type: " + type1.charAt(0).toUpperCase() + type1.slice(1) + "\n";
            else
                description += "Types: " + type1.charAt(0).toUpperCase() + type1.slice(1) + ", " + type2.charAt(0).toUpperCase() + type2.slice(1) + "\n";
            description += "Category: " + family + "\nHeight: " + height + "Weight: " + weight;
            /*if (ability2 == "NULL")
                description += "Ability: " + ability1 + "\n";
            else {
                if (ability3 == "NULL")
                    description += "Abilities: " + ability1 + "/" + ability2 + "\n";
                else
                    description += "Abilities: " + ability1 + "/" + ability2 + "/" + ability3 + "\n";
            }
            if (!is_mega) {
                if (egg2 == "NULL")
                    description += "Egg group: " + egg1 + "\n";
                else
                    description += "Egg groups: " + egg1 + ", " + egg2 + "\n";
                description += "Catch rate: " + rate;
            }
            description += "Hp: " + hp + "Attack: " + atk + "Defense: " + def + "Special Attack: " + spa + "Special Defense : " + spd + "Spee : " + spe;*/
            if (alola) {
                sprite = gif_url.concat(title.slice(7));
                sprite = sprite.concat("-alola.gif");
            } else if (!is_mega) {
                sprite = gif_url.concat(title);
                sprite = sprite.concat(".gif");
            } else if (is_mega) {
                if (mega_type == "") {
                    sprite = gif_url.concat(title);
                    sprite = sprite.concat("-mega.gif");
                } else if (mega_type == " X ") {
                    sprite = gif_url.concat(title);
                    sprite = sprite.concat("-megax.gif");
                } else if (mega_type == " Y ") {
                    sprite = gif_url.concat(title);
                    sprite = sprite.concat("-megay.gif");
                }
            }
            sprite = sprite.toLocaleLowerCase();
            channel.sendMessage("", false, {
                color: color,
                title: title,
                description: description,
                image: {
                    url: sprite
                },
                url: search, 
                footer : {
                    text: "Informations from Bulbapedia"
                }
            });
            console.log("pokemon/english.js: successfully gathered info about " + content);
        });
    }
};