const Discordie = require('discordie');
const Events = Discordie.Events;
const client = new Discordie();
const request = require('request');
const $ = require('cheerio');
const connect = require('./connect.js')

connect.connect(client);

client.Dispatcher.on("GATEWAY_READY", e => {
    client.User.setGame("pokedex + nom du pokemon");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    var content = e.message.content.toLowerCase();
    var channel = e.message.channel;
    var url = "https://pokepedia.fr/";
    var gif_url = "http://play.pokemonshowdown.com/sprites/xyani/";
    var sprite;
    var name;
    var color = 0xffffff;
    var title;
    var description;
    var number;
    var type1;
    var type2 = "NULL";
    var found;
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
    var typed;
    var searched_name;

    if(content.startsWith("pokedex ") || content.startsWith("pokédex ")) {
        found = 0;
        typed = content.substring(8);
        if (typed.search(" shiny")) {
            searched_name = typed.substring(0, typed.search(" "));
            gif_url = "http://play.pokemonshowdown.com/sprites/xyani-shiny/";
            search = url.concat(searched_name);
        } else
            search = url.concat(typed);
        request(search, { json: true }, (err, res, body) => {
            if (err)
                channel.sendMessage("Impossible de communiquer avec le serveur, merci de réessayer dans 5 minutes.\nInformations sur l'erreur: " + err);
            else {
                $('.toctext', body).each(function(i) {
                    if ($(this).text() == "À propos du Pokémon" && !i)
                        found = 1;
                });
                if (!found) {
                    channel.sendMessage("Impossible de trouver \"" + content.substring(8) + "\" merci de vérifier l'orthographe.");
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
            }
        });
    }
});
