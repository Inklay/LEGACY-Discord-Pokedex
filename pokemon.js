const request = require('request');
const $ = require('cheerio');

function french_mega(content, channel)
{
    var found = 0;
    var description;
    var typed = content.substring(8);
    var url = "https://pokepedia.fr/";
    var gif_url = "http://play.pokemonshowdown.com/sprites/xyani/";
    var sprite;
    var name;
    var color = 0xffffff;
    var title;
    var number;
    var type1;
    var type2 = "NULL";
    var family
    var height;
    var weight;
    var ability1;
    var ability2 = "NULL";
    var ability3 = "NULL";
    var hp = 0;
    var atk = 0;
    var def = 0;
    var spa = 0;
    var spd = 0;
    var spe = 0;
    var search = "Méga-";
    var mega_type = "";

    if (typed.startsWith("mega ") || typed.startsWith("méga "))
        typed = typed.substring(5);
    typed = typed.charAt(0).toUpperCase() + typed.slice(1);
    search = url.concat(search);
    if (typed.search(" ") == -1)
        search = search.concat(typed.substring(0));
    else
        search = search.concat(typed.substring(0, typed.search(" ")));
    if (typed.search(" x") != -1) {
        search = search.concat("_X");
        mega_type = " X ";
    } else if (typed.search(" y") != -1) {
        search = search.concat("_Y");
        mega_type = " Y ";
    }
    if (typed.search(" shiny") != -1)
        gif_url = "http://play.pokemonshowdown.com/sprites/xyani-shiny/";
    request(search, { json: true }, (err, res, body) => {
        if (err) {
            channel.sendMessage("Impossible de communiquer avec le serveur, merci de réessayer dans 5 minutes.\nInformations sur l'erreur: " + err);
            return;
        }
        $('.toctext', body).each(function(i) {
            if ($(this).text() == "À propos du Méga-Pokémon" && !i)
                found = 1;
        });
        if (!found) {
            console.log(search);
            channel.sendMessage("Impossible de trouver \"Méga " + typed.substring(0, typed.search(" ")) + mega_type + "\" merci de vérifier l'orthographe.");
            return;
        }
        title = $('.firstHeading', body).text();
        $('th', body).each(function() {
            if ($(this).text().startsWith("Nom anglais"))
                name = $(this).next().text();
        });
        number = $('.entêtesection > big > span', body).text().substring(2);
        color = parseInt("0x" + ($('tr > .entêtesection', body)[0].attribs.style.substring(13, 19)));
        $('tr > th > a', body).each(function() {
            if ($(this)[0].attribs.href == "/Type" && $(this).parent().next()[0].attribs.colspan == "3") {
                type1 = $(this).parent().next()[0].children[0].children[0].attribs.alt;
                if ($(this).parent().next()[0].children.length == 4)
                    type2 = $(this).parent().next()[0].children[2].children[0].attribs.alt;
            }
            if ($(this)[0].attribs.href == "/Famille" && $(this).parent().next()[0].attribs.colspan == "3")
                family = "Pokémon " + $(this).parent().next()[0].children[1].data;
            if ($(this)[0].attribs.href == "/Liste_des_Pok%C3%A9mon_par_taille" && $(this).parent().next()[0].attribs.colspan == "3")
                height = $(this).parent().next()[0].children[0].data;
            if ($(this)[0].attribs.href == "/Liste_des_Pok%C3%A9mon_par_poids" && $(this).parent().next()[0].attribs.colspan == "3")
                weight = $(this).parent().next()[0].children[0].data;
            if ($(this)[0].attribs.href == "/Talent" && $(this).parent().next()[0].attribs.colspan == "3") {
                if ($(this).parent().next()[0].children.length == 2)
                    ability1 = $(this).parent().next()[0].children[0].children[0].data;
                else {
                    ability1 = $(this).parent().next()[0].children[1].children[0].data;
                    ability2 = $(this).parent().next()[0].children[4].children[0].data;
                    if ($(this).parent().next()[0].children.length == 10)
                        ability3 = $(this).parent().next()[0].children[7].children[0].data;
                }
            }
        });
        $('td > a', body).each(function() {
            if ($(this)[0].attribs.href == "/Statistique#Points_de_Vie" && !hp)
                hp = $(this).parent().next()[0].children[0].data;
            if ($(this)[0].attribs.href == "/Statistique#Attaque" && !atk)
                atk = $(this).parent().next()[0].children[0].data;
            if ($(this)[0].attribs.href == "/Statistique#D.C3.A9fense" && !def)
                def = $(this).parent().next()[0].children[0].data;
            if ($(this)[0].attribs.href == "/Statistique#Attaque_Sp.C3.A9ciale" && !spa)
                spa = $(this).parent().next()[0].children[0].data;
            if ($(this)[0].attribs.href == "/Statistique#D.C3.A9fense_sp.C3.A9ciale" && !spd)
                spd = $(this).parent().next()[0].children[0].data;
            if ($(this)[0].attribs.href == "/Statistique#Vitesse" && !spe)
                spe = $(this).parent().next()[0].children[0].data;
        });
        description = "Nom anglais: " + name + "Numéro du pokédex: " + number + "\n";
        if (type2 == "NULL")
            description += "Type: " + type1 + "\n";
        else
            description += "Types: " + type1 + ", " + type2 + "\n";
        description += "Famille: " + family + "Taille: " + height + "Poids: " + weight;
        if (ability2 == "NULL")
            description += "Talent: " + ability1 + "\n";
        else {
            if (ability3 == "NULL")
                description += "Talents: " + ability1 + "/" + ability2 + "\n";
            else
                description += "Talents: " + ability1 + "/" + ability2 + "/" + ability3 + "\n";
        }
        description += "Pv: " + hp + "Attaque: " + atk + "Défense: " + def + "Attaque Spéciale: " + spa + "Défense Spéciale: " + spd + "Vitesse: " + spe;
        if (mega_type == "") {
            sprite = gif_url.concat(name.slice(5, name.length - 1));
            sprite = sprite.concat("-mega.gif");
        } else if (mega_type == " X ") {
            sprite = gif_url.concat(name.slice(5, name.length - 3));
            sprite = sprite.concat("-megax.gif");
        } else if (mega_type == " Y ") {
            sprite = gif_url.concat(name.slice(5, name.length - 3));
            sprite = sprite.concat("-megay.gif");
        }
        sprite = sprite.toLowerCase();
        channel.sendMessage("", false, {
            color: color,
            title: title,
            description: description,
            image: {
                url: sprite
            },
            url: search, 
            footer : {
                text: "Informations de Poképedia"
            }
        });
    });
}

module.exports = {
    french: function (content, channel)
    {
        var found = 0;
        var description;
        var typed = content.substring(8);
        var url = "https://pokepedia.fr/";
        var gif_url = "http://play.pokemonshowdown.com/sprites/xyani/";
        var sprite;
        var name;
        var color = 0xffffff;
        var title;
        var number;
        var type1;
        var type2 = "NULL";
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

        if (typed.search(" ") != -1)
            search = url.concat(typed.substring(0, typed.search(" ")));
        else
            search = url.concat(typed);
        if (typed.search(" shiny") != -1)
            gif_url = "http://play.pokemonshowdown.com/sprites/xyani-shiny/";
        if (typed.search(" alola") != -1 || typed.search(" d'alola") != -1) {
            alola = 1;
            search = search.concat("_d%27Alola");
        }
        if (typed.search(" méga") != -1 || typed.search(" mega") != -1 || typed.startsWith("mega ") || typed.startsWith("méga ")) {
            french_mega(content, channel);
            return;
        }
        request(search, { json: true }, (err, res, body) => {
            if (err) {
                channel.sendMessage("Impossible de communiquer avec le serveur, merci de réessayer dans 5 minutes.\nInformations sur l'erreur: " + err);
                return;
            }
            $('.toctext', body).each(function(i) {
                if ($(this).text() == "À propos du Pokémon" && !i)
                    found = 1;
            });
            if (!found) {
                if (alola)
                    channel.sendMessage("Impossible de trouver \"" + typed.substring(0, typed.search(" ")) + " d\'Alola\" merci de vérifier l'orthographe.");
                else
                    channel.sendMessage("Impossible de trouver \"" + content.substring(8).charAt(0).toUpperCase() + content.substring(8).slice(1) + "\" merci de vérifier l'orthographe.");
                return;
            }
            title = $('.firstHeading', body).text();
            $('th', body).each(function() {
                if ($(this).text().startsWith("Nom anglais"))
                    name = $(this).next().text();
            });
            number = $('.entêtesection > big > span', body).text().substring(2);
            color = parseInt("0x" + ($('tr > .entêtesection', body)[0].attribs.style.substring(13, 19)));
            $('tr > th > a', body).each(function() {
                if ($(this)[0].attribs.href == "/Type" && $(this).parent().next()[0].attribs.colspan == "3") {
                    type1 = $(this).parent().next()[0].children[0].children[0].attribs.alt;
                    if ($(this).parent().next()[0].children.length == 4)
                        type2 = $(this).parent().next()[0].children[2].children[0].attribs.alt;
                }
                if ($(this)[0].attribs.href == "/Famille" && $(this).parent().next()[0].attribs.colspan == "3")
                    family = "Pokémon " + $(this).parent().next()[0].children[1].data;
                if ($(this)[0].attribs.href == "/Liste_des_Pok%C3%A9mon_par_taille" && $(this).parent().next()[0].attribs.colspan == "3")
                    height = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Liste_des_Pok%C3%A9mon_par_poids" && $(this).parent().next()[0].attribs.colspan == "3")
                    weight = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Talent" && $(this).parent().next()[0].attribs.colspan == "3") {
                    if ($(this).parent().next()[0].children.length == 2)
                        ability1 = $(this).parent().next()[0].children[0].children[0].data;
                    else {
                        ability1 = $(this).parent().next()[0].children[1].children[0].data;
                        ability2 = $(this).parent().next()[0].children[4].children[0].data;
                        if ($(this).parent().next()[0].children.length == 10)
                            ability3 = $(this).parent().next()[0].children[7].children[0].data;
                    }
                }
                if ($(this)[0].attribs.href == "/%C5%92uf" && $(this).parent().next()[0].attribs.colspan == "3") {
                    egg1 = $(this).parent().next()[0].children[0].children[0].data;
                    if ($(this).parent().next()[0].children.length == 4)
                        egg2 = $(this).parent().next()[0].children[2].children[0].data;
                }
                if ($(this)[0].attribs.href == "/Capture_des_Pok%C3%A9mon" && $(this).parent().next()[0].attribs.colspan == "3")
                    rate = $(this).parent().next()[0].children[0].data;
            });
            $('td > a', body).each(function() {
                if ($(this)[0].attribs.href == "/Statistique#Points_de_Vie" && !hp)
                    hp = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Statistique#Attaque" && !atk)
                    atk = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Statistique#D.C3.A9fense" && !def)
                    def = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Statistique#Attaque_Sp.C3.A9ciale" && !spa)
                    spa = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Statistique#D.C3.A9fense_sp.C3.A9ciale" && !spd)
                    spd = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Statistique#Vitesse" && !spe)
                    spe = $(this).parent().next()[0].children[0].data;
            });
            description = "Nom anglais: " + name + "Numéro du pokédex: " + number + "\n";
            if (type2 == "NULL")
                description += "Type: " + type1 + "\n";
            else
                description += "Types: " + type1 + ", " + type2 + "\n";
            description += "Famille: " + family + "Taille: " + height + "Poids: " + weight;
            if (ability2 == "NULL")
                description += "Talent: " + ability1 + "\n";
            else {
                if (ability3 == "NULL")
                    description += "Talents: " + ability1 + "/" + ability2 + "\n";
                else
                    description += "Talents: " + ability1 + "/" + ability2 + "/" + ability3 + "\n";
            }
            if (egg2 == "NULL")
                description += "Groupe œuf: " + egg1 + "\n";
            else
                description += "Groupe œuf: " + egg1 + ", " + egg2 + "\n";
            description += "Taux de capture: " + rate;
            description += "Pv: " + hp + "Attaque: " + atk + "Défense: " + def + "Attaque Spéciale: " + spa + "Défense Spéciale: " + spd + "Vitesse: " + spe;
            if (alola) {
                sprite = gif_url.concat(name.slice(7, name.length - 1));
                sprite = sprite.concat("-alola");
            } else
                sprite = gif_url.concat(name.slice(0, name.length - 1));
            sprite = sprite.concat(".gif");
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
                    text: "Informations de Poképedia"
                }
            });
        });
    }
};