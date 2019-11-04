const request = require('request');
const $ = require('cheerio');
const types = require('../type/english.js');

function specialCase(channel, content, shiny, type)
{
    var color = 0xffffff;
    var description;
    var url;
    var title;
    var sprite;
    var gif_url = "http://play.pokemonshowdown.com/sprites/xyani/";
    var sprite;
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
    var other_forms;

    if (shiny)
        gif_url = "http://play.pokemonshowdown.com/sprites/xyani-shiny/";
    switch (content) {
        case "castform":
            other_forms = "Other forms: castform sunny, castform rainy, castform snowy"
            title = "Castform";
            url = "https://bulbapedia.bulbagarden.net/wiki/Castform";
            color = 0xADA594;
            sprite = gif_url.concat("castform.gif");
            number = 351;
            type1 = "Normal";
            family = "Weather Pokémon";
            ability1 = "Forecast";
            egg1 = "Fairy";
            egg2 = "Amorphous";
            rate = 45;
            height = "1'00\"/0.3 m";
            weight = "1.8 lbs./0.8 kg";
            hp = 70;
            atk = 70;
            def = 70;
            spa = 70;
            spd = 70;
            spe = 70;
            break;
        case "castform sunny":
            other_forms = "Other forms: castform, castform rainy, castform snowy"
            title = "Castform Sunny";
            url = "https://bulbapedia.bulbagarden.net/wiki/Castform";
            color = 0xF75231;
            sprite = gif_url.concat("castform-sunny.gif");
            number = 351;
            type1 = "Fire";
            family = "Weather Pokémon";
            ability1 = "Forecast";
            egg1 = "Fairy";
            egg2 = "Amorphous";
            rate = 45;
            height = "1'00\"/0.3 m";
            weight = "1.8 lbs./0.8 kg";
            hp = 70;
            atk = 70;
            def = 70;
            spa = 70;
            spd = 70;
            spe = 70;
            break;
        case "castform rainy":
            other_forms = "Other forms: castform, castform sunny, castform snowy"
            title = "Castform rainy";
            url = "https://bulbapedia.bulbagarden.net/wiki/Castform";
            color = 0x399CFF;
            sprite = gif_url.concat("castform-rainy.gif");
            number = 351;
            type1 = "Water";
            family = "Weather Pokémon";
            ability1 = "Forecast";
            egg1 = "Fairy";
            egg2 = "Amorphous";
            rate = 45;
            height = "1'00\"/0.3 m";
            weight = "1.8 lbs./0.8 kg";
            hp = 70;
            atk = 70;
            def = 70;
            spa = 70;
            spd = 70;
            spe = 70;
            break;
        case "castform snowy":
            other_forms = "Other forms: morphéo, morphéo soleil, morphéo pluie"
            title = "Morphéo Forme Neige";
            url = "https://bulbapedia.bulbagarden.net/wiki/Castform";
            color = 0x5ACEE7;
            sprite = gif_url.concat("castform-snowy.gif");
            number = 351;
            type1 = "Ice";
            family = "Weather Pokémon";
            ability1 = "Forecast";
            egg1 = "Fairy";
            egg2 = "Amorphous";
            rate = 45;
            height = "1'00\"/0.3 m";
            weight = "1.8 lbs./0.8 kg";
            hp = 70;
            atk = 70;
            def = 70;
            spa = 70;
            spd = 70;
            spe = 70;
            break;
        case "deoxys":
            other_forms = "Other forms: deoxys attack, deoxys defense, deoxys speed"
            title = "Deoxys";
            url = "https://bulbapedia.bulbagarden.net/wiki/Deoxys";
            color = 0xF85888;
            sprite = gif_url.concat("deoxys.gif");
            number = 386;
            type1 = "Psychic";
            family = "DNA Pokémon";
            ability1 = "Pressure";
            egg1 = "Undiscovered";
            rate = 3;
            height = "5'07\"/1.7 m";
            weight = "134.0 lbs./60.8 kg";
            hp = 50;
            atk = 150;
            def = 50;
            spa = 150;
            spd = 50;
            spe = 150;
            break;
        case "deoxys attack":
            other_forms = "Other forms: deoxys, deoxys defense, deoxys speed"
            title = "Deoxys Attack";
            url = "https://bulbapedia.bulbagarden.net/wiki/Deoxys";
            color = 0xF85888;
            sprite = gif_url.concat("deoxys-attack.gif");
            number = 386;
            type1 = "Psychic";
            family = "DNA Pokémon";
            ability1 = "Pressure";
            egg1 = "Undiscovered";
            rate = 3;
            height = "5'07\"/1.7 m";
            weight = "134.0 lbs./60.8 kg";
            hp = 50;
            atk = 180;
            def = 20;
            spa = 180;
            spd = 20;
            spe = 150;
            break;
        case "deoxys defense":
            other_forms = "Other forms: deoxys, deoxys attack, deoxys speed"
            title = "Deoxys Defense";
            url = "https://bulbapedia.bulbagarden.net/wiki/Deoxys";
            color = 0xF85888;
            sprite = gif_url.concat("deoxys-defense.gif");
            number = 386;
            type1 = "Psychic";
            family = "DNA Pokémon";
            ability1 = "Pressure";
            egg1 = "Undiscovered";
            rate = 3;
            height = "5'07\"/1.7 m";
            weight = "134.0 lbs./60.8 kg";
            hp = 50;
            atk = 70;
            def = 160;
            spa = 70;
            spd = 160;
            spe = 90;
            break;
        case "deoxys speed":
            other_forms = "Other forms: deoxys, deoxys attack, deoxys defense"
            title = "Deoxys Speed";
            url = "https://bulbapedia.bulbagarden.net/wiki/Deoxys";
            color = 0xF85888;
            sprite = gif_url.concat("deoxys-speed.gif");
            number = 386;
            type1 = "Psychic";
            family = "DNA Pokémon";
            ability1 = "Pressure";
            egg1 = "Undiscovered";
            rate = 3;
            height = "5'07\"/1.7 m";
            weight = "134.0 lbs./60.8 kg";
            hp = 50;
            atk = 95;
            def = 90;
            spa = 950;
            spd = 90;
            spe = 180;
            break;
        case "wormadam plant":
        case "wormadam":
            other_forms = "Other forms: wormadam sandy, wormadam trash"
            title = "Wormadam";
            url = "https://bulbapedia.bulbagarden.net/wiki/Wormadam";
            color = 0xADBD21;
            sprite = gif_url.concat("wormadam.gif");
            number = 413;
            type1 = "Bug";
            type2 = "Grass";
            family = "Vagworm Pokémon";
            ability1 = "Anticipation";
            ability2 = "Overcoat"
            egg1 = "Bug";
            rate = 45;
            height = "1'08\"/0.5 m";
            weight = "14.3 lbs./6.5 kg";
            hp = 60;
            atk = 59;
            def = 85;
            spa = 79;
            spd = 105;
            spe = 36;
            break;
        case "wormadam sandy":
            other_forms = "Other forms: wormadam, wormadam trash"
            title = "Wormadam Sandy";
            url = "https://bulbapedia.bulbagarden.net/wiki/Wormadam";
            color = 0xADBD21;
            sprite = gif_url.concat("wormadam-sandy.gif");
            number = 413;
            type1 = "Bug";
            type2 = "Ground";
            family = "Vagworm Pokémon";
            ability1 = "Anticipation";
            ability2 = "Overcoat"
            egg1 = "Bug";
            rate = 45;
            height = "1'08\"/0.5 m";
            weight = "14.3 lbs./6.5 kg";
            hp = 60;
            atk = 79;
            def = 105;
            spa = 59;
            spd = 85;
            spe = 36;
            break;
        case "wormadam sandy":
            other_forms = "Other forms: wormadam, wormadam trash"
            title = "Wormadam Sandy";
            url = "https://bulbapedia.bulbagarden.net/wiki/Wormadam";
            color = 0xADBD21;
            sprite = gif_url.concat("wormadam-trash.gif");
            number = 413;
            type1 = "Bug";
            type2 = "Steel";
            family = "Vagworm Pokémon";
            ability1 = "Anticipation";
            ability2 = "Overcoat"
            egg1 = "Bug";
            rate = 45;
            height = "1'08\"/0.5 m";
            weight = "14.3 lbs./6.5 kg";
            hp = 60;
            atk = 69;
            def = 95;
            spa = 69;
            spd = 95;
            spe = 36;
            break;
        case "rotom":
            other_forms = "Other forms: rotom heat, rootm wash, rotom frost, rotom fan, rotom mow"
            title = "Rotom";
            url = "https://bulbapedia.bulbagarden.net/wiki/Rotom";
            color = 0xFFC631;
            sprite = gif_url.concat("rotom.gif");
            number = 479;
            type1 = "Electric";
            type2 = "Ghost";
            family = "Plasma Pokémon";
            ability1 = "Levitate";
            egg1 = "Amorphous";
            rate = 45;
            height = "1'00\"/0.3 m";
            weight = "0.7 lbs./0.3 kg";
            hp = 50;
            atk = 50;
            def = 77;
            spa = 95;
            spd = 77;
            spe = 91;
            break;
        case "rotom heat":
            other_forms = "Other forms: rotom, rootm wash, rotom frost, rotom fan, rotom mow"
            title = "Rotom Heat";
            url = "https://bulbapedia.bulbagarden.net/wiki/Rotom";
            color = 0xFFC631;
            sprite = gif_url.concat("rotom-heat.gif");
            number = 479;
            type1 = "Electric";
            type2 = "Fire";
            family = "Plasma Pokémon";
            ability1 = "Levitate";
            egg1 = "Amorphous";
            rate = 45;
            height = "1'00\"/0.3 m";
            weight = "0.7 lbs./0.3 kg";
            hp = 50;
            atk = 65;
            def = 107;
            spa = 105;
            spd = 107;
            spe = 86;
            break;
        case "rotom wash":
            other_forms = "Other forms: rotom, rootm heat, rotom frost, rotom fan, rotom mow"
            title = "Rotom Wash";
            url = "https://bulbapedia.bulbagarden.net/wiki/Rotom";
            color = 0xFFC631;
            sprite = gif_url.concat("rotom-wash.gif");
            number = 479;
            type1 = "Electric";
            type2 = "Water";
            family = "Plasma Pokémon";
            ability1 = "Levitate";
            egg1 = "Amorphous";
            rate = 45;
            height = "1'00\"/0.3 m";
            weight = "0.7 lbs./0.3 kg";
            hp = 50;
            atk = 65;
            def = 107;
            spa = 105;
            spd = 107;
            spe = 86;
            break;
        case "rotom frost":
            other_forms = "Other forms: rotom, rootm heat, rotom wash, rotom fan, rotom mow"
            title = "Rotom Frost";
            url = "https://bulbapedia.bulbagarden.net/wiki/Rotom";
            color = 0xFFC631;
            sprite = gif_url.concat("rotom-frost.gif");
            number = 479;
            type1 = "Electric";
            type2 = "Ice";
            family = "Plasma Pokémon";
            ability1 = "Levitate";
            egg1 = "Amorphous";
            rate = 45;
            height = "1'00\"/0.3 m";
            weight = "0.7 lbs./0.3 kg";
            hp = 50;
            atk = 65;
            def = 107;
            spa = 105;
            spd = 107;
            spe = 86;
            break;
        case "rotom fan":
            other_forms = "Other forms: rotom, rootm heat, rotom wash, rotom frost, rotom mow"
            title = "Rotom Fan";
            url = "https://bulbapedia.bulbagarden.net/wiki/Rotom";
            color = 0xFFC631;
            sprite = gif_url.concat("rotom-fan.gif");
            number = 479;
            type1 = "Electric";
            type2 = "Flying";
            family = "Plasma Pokémon";
            ability1 = "Levitate";
            egg1 = "Amorphous";
            rate = 45;
            height = "1'00\"/0.3 m";
            weight = "0.7 lbs./0.3 kg";
            hp = 50;
            atk = 65;
            def = 107;
            spa = 105;
            spd = 107;
            spe = 86;
            break;
        case "rotom mow":
            other_forms = "Other forms: rotom, rootm heat, rotom wash, rotom fan, rotom frost"
            title = "Rotom Frost";
            url = "https://bulbapedia.bulbagarden.net/wiki/Rotom";
            color = 0xFFC631;
            sprite = gif_url.concat("rotom-mow.gif");
            number = 479;
            type1 = "Electric";
            type2 = "Grass";
            family = "Plasma Pokémon";
            ability1 = "Levitate";
            egg1 = "Amorphous";
            rate = 45;
            height = "1'00\"/0.3 m";
            weight = "0.7 lbs./0.3 kg";
            hp = 50;
            atk = 65;
            def = 107;
            spa = 105;
            spd = 107;
            spe = 86;
            break;
        case "giratina":
            other_forms = "Other forms: giratina origin"
            title = "Giratina";
            url = "https://bulbapedia.bulbagarden.net/wiki/Giratina";
            color = 0x6363B5;
            sprite = gif_url.concat("giratina.gif");
            number = 487;
            type1 = "Ghost";
            type2 = "Dragon";
            family = "Renegade Pokémon";
            ability1 = "Pressure";
            ability2 = "Telepathy";
            egg1 = "Undiscovered";
            rate = 3;
            height = "14'09\"/4.5 m";
            weight = "1653.5 lbs./750 kg";
            hp = 150;
            atk = 100;
            def = 120;
            spa = 100;
            spd = 120;
            spe = 90;
            break;
        case "giratina origin":
            other_forms = "Other forms: giratina"
            title = "Giratina Origin Forme";
            url = "https://bulbapedia.bulbagarden.net/wiki/Giratina";
            color = 0x6363B5;
            sprite = gif_url.concat("giratina-origin.gif");
            number = 487;
            type1 = "Ghost";
            type2 = "Dragon";
            family = "Renegade Pokémon";
            ability1 = "Levitate";
            egg1 = "Undiscovered";
            rate = 3;
            height = "22'08\"/6.9 m";
            weight = "1433.0 lbs./650 kg";
            hp = 150;
            atk = 120;
            def = 100;
            spa = 120;
            spd = 100;
            spe = 90;
            break;
        case "shaymin":
            other_forms = "Other forms: shaymin sky"
            title = "Shaymine";
            url = "https://bulbapedia.bulbagarden.net/wiki/Shaymin";
            color = 0x7BCE52;
            sprite = gif_url.concat("shaymin.gif");
            number = 492;
            type1 = "Grass";
            family = "Gratitude Pokémon";
            ability1 = "Natural Cure";
            egg1 = "Undiscovered";
            rate = 3;
            height = "0'08\"/0.2 m";
            weight = "4.6 lbs./2.1 kg";
            hp = 100;
            atk = 100;
            def = 100;
            spa = 100;
            spd = 100;
            spe = 100;
            break;
        case "shaymin sky":
            other_forms = "Other forms: shaymin"
            title = "Shaymin Sky Forme";
            url = "https://bulbapedia.bulbagarden.net/wiki/Shaymin";
            color = 0x7BCE52;
            sprite = gif_url.concat("shaymin-sky.gif");
            number = 492;
            type1 = "Grass";
            type2 = "Flying"
            family = "Gratitude Pokémon";
            ability1 = "Serene Grace";
            egg1 = "Undiscovered";
            rate = 3;
            height = "1'04\"/0.4 m";
            weight = "11.5 lbs./5.2 kg";
            hp = 100;
            atk = 103;
            def = 75;
            spa = 120;
            spd = 75;
            spe = 127;
            break;
        case "darmanitan":
            other_forms = "Other forms: darmanitan zen"
            title = "Darmanitan";
            url = "https://bulbapedia.bulbagarden.net/wiki/Darmanitan";
            color = 0xF75231;
            sprite = gif_url.concat("darmanitan.gif");
            number = 555;
            type1 = "Fire";
            family = "Blazing Pokémon";
            ability1 = "Sheer Force";
            ability2 = "Zen Mode"
            egg1 = "Field";
            rate = 60;
            height = "4'03\"/1.3 m";
            weight = "204.8 lbs./92.9 kg";
            hp = 150;
            atk = 140;
            def = 55;
            spa = 30;
            spd = 55;
            spe = 95;
            break;
        case "darmanitan zen":
            other_forms = "Other forms: darmanitan"
            title = "Darmanitan Zen Mode";
            url = "https://bulbapedia.bulbagarden.net/wiki/Darmanitan";
            color = 0xF75231;
            sprite = gif_url.concat("darmanitan-zen.gif");
            number = 555;
            type1 = "Fire";
            type2 = "Psychic"
            family = "Blazing Pokémon";
            ability1 = "Sheer Force";
            ability2 = "Zen Mode"
            egg1 = "Field";
            rate = 60;
            height = "4'03\"/1.3 m";
            weight = "204.8 lbs./92.9 kg";
            hp = 105;
            atk = 30;
            def = 105;
            spa = 140;
            spd = 105;
            spe = 55;
            break;
        case "tornadus":
            other_forms = "Other forms: tornadus therian"
            title = "Tornadus";
            url = "https://bulbapedia.bulbagarden.net/wiki/Tornadus";
            color = 0x9CADF7;
            sprite = gif_url.concat("tornadus.gif");
            number = 641;
            type1 = "Flying";
            family = "Cyclone Pokémon";
            ability1 = "Prankster";
            ability2 = "Defiant"
            egg1 = "Undiscovered";
            rate = 3;
            height = "4'11\"/1.5 m";
            weight = "138.9 lbs./63.0 kg";
            hp = 79;
            atk = 115;
            def = 70;
            spa = 125;
            spd = 80;
            spe = 111;
            break;
        case "tornadus therian":
            other_forms = "Other forms: tornadus"
            title = "Tornadus Therian";
            url = "https://bulbapedia.bulbagarden.net/wiki/Tornadus";
            color = 0x9CADF7;
            sprite = gif_url.concat("tornadus-therian.gif");
            number = 641;
            type1 = "Flying";
            family = "Cyclone Pokémon";
            ability1 = "Regenerator";
            egg1 = "Undiscovered";
            rate = 3;
            height = "4'07\"/1.4 m";
            weight = "138.9 lbs./63.0 kg";
            hp = 79;
            atk = 100;
            def = 80;
            spa = 110;
            spd = 90;
            spe = 121;
            break;
        case "thundurus":
            other_forms = "Other forms: thundurus therian"
            title = "Thundurus";
            url = "https://bulbapedia.bulbagarden.net/wiki/Thundurus";
            color = 0x9CADF7;
            sprite = gif_url.concat("thundurus.gif");
            number = 642;
            type1 = "Electric";
            type2 = "Flying"
            family = "Bolt Strike Pokémon";
            ability1 = "Prankster";
            ability2 = "Defiant";
            egg1 = "Undiscovered";
            rate = 3;
            height = "4'11\"/1.5 m";
            weight = "134.5 lbs./61.0 kg";
            hp = 79;
            atk = 115;
            def = 70;
            spa = 125;
            spd = 80;
            spe = 111;
            break;
        case "thundurus therian":
            other_forms = "Other forms: thundurus"
            title = "Thundurus";
            url = "https://bulbapedia.bulbagarden.net/wiki/Thundurus";
            color = 0xFFC631;
            sprite = gif_url.concat("thundurus-therian.gif");
            number = 642;
            type1 = "Electric";
            type2 = "Flying"
            family = "Bolt Strike Pokémon";
            ability1 = "Volt Absorb";
            egg1 = "Undiscovered";
            rate = 3;
            height = "9'10\"/3.0 m";
            weight = "134.5 lbs./61.0 kg";
            hp = 79;
            atk = 105;
            def = 70;
            spa = 145;
            spd = 80;
            spe = 101;
            break;
        case "landorus":
            other_forms = "Other forms: landorus therian"
            title = "Landorus";
            url = "https://bulbapedia.bulbagarden.net/wiki/Landorus";
            color = 0xD6B55A;
            sprite = gif_url.concat("landorus.gif");
            number = 645;
            type1 = "Ground";
            type2 = "Flying"
            family = "Abundance Pokémon";
            ability1 = "Sand Force";
            ability2 = "Sheer Force";
            egg1 = "Undiscovered";
            rate = 3;
            height = "4'11\"/1.5 m";
            weight = "149.9 lbs./68.0 kg";
            hp = 89;
            atk = 125;
            def = 90;
            spa = 115;
            spd = 80;
            spe = 101;
            break;
        case "landorus therian":
            other_forms = "Other forms: landorus"
            title = "Landorus Therian";
            url = "https://bulbapedia.bulbagarden.net/wiki/Landorus";
            color = 0xD6B55A;
            sprite = gif_url.concat("landorus-therian.gif");
            number = 645;
            type1 = "Ground";
            type2 = "Flying"
            family = "Abundance Pokémon";
            ability1 = "Intimidate";
            egg1 = "Undiscovered";
            rate = 3;
            height = "4'03\"/1.3 m";
            weight = "149.9 lbs./68.0 kg";
            hp = 89;
            atk = 145;
            def = 90;
            spa = 105;
            spd = 80;
            spe = 91;
            break;
        case "kyurem":
            other_forms = "Other forms: kyurem white, kyurem black"
            title = "Kyurem";
            url = "https://bulbapedia.bulbagarden.net/wiki/Kyurem";
            color = 0x8858F6;
            sprite = gif_url.concat("kyurem.gif");
            number = 646;
            type1 = "Dragon";
            type2 = "Ice"
            family = "Boundary Pokémon";
            ability1 = "Pressure";
            egg1 = "Undiscovered";
            rate = 3;
            height = "9'10\"/3.0 m";
            weight = "716.5 lbs./325.0 kg";
            hp = 125;
            atk = 130;
            def = 90;
            spa = 130;
            spd = 90;
            spe = 95;
            break;
        case "kyurem white":
            other_forms = "Other forms: kyurem, kyurem black"
            title = "Kyurem White";
            url = "https://bulbapedia.bulbagarden.net/wiki/Kyurem";
            color = 0x8858F6;
            sprite = gif_url.concat("kyurem-white.gif");
            number = 646;
            type1 = "Dragon";
            type2 = "Ice"
            family = "Boundary Pokémon";
            ability1 = "Turboblaze";
            egg1 = "Undiscovered";
            rate = 3;
            height = "11'10\"/3.6 m";
            weight = "716.5 lbs./325.0 kg";
            hp = 125;
            atk = 120;
            def = 90;
            spa = 170;
            spd = 100;
            spe = 95;
            break;
        case "kyurem black":
            other_forms = "Other forms: kyurem, kyurem white"
            title = "Kyurem Black";
            url = "https://bulbapedia.bulbagarden.net/wiki/Kyurem";
            color = 0x8858F6;
            sprite = gif_url.concat("kyurem-black.gif");
            number = 646;
            type1 = "Dragon";
            type2 = "Ice"
            family = "Boundary Pokémon";
            ability1 = "Teravolt";
            egg1 = "Undiscovered";
            rate = 3;
            height = "10'10\"/3.3 m";
            weight = "716.5 lbs./325.0 kg";
            hp = 125;
            atk = 170;
            def = 100;
            spa = 120;
            spd = 90;
            spe = 95;
            break;
        case "meloetta":
            other_forms = "Other forms: meloetta pirouette"
            title = "Meloetta";
            url = "https://bulbapedia.bulbagarden.net/wiki/Meloetta";
            color = 0xADA594;
            sprite = gif_url.concat("meloetta.gif");
            number = 647;
            type1 = "Normal";
            type2 = "Psychic"
            family = "Melody Pokémon";
            ability1 = "Serene Grace";
            egg1 = "Undiscovered";
            rate = 3;
            height = "2'00\"/0.6 m";
            weight = "14.3 lbs./6.5 kg";
            hp = 100;
            atk = 77;
            def = 77;
            spa = 128;
            spd = 128;
            spe = 90;
            break;
        case "meloetta pirouette":
            other_forms = "Other forms: meloetta"
            title = "Meloetta Pirouette";
            url = "https://bulbapedia.bulbagarden.net/wiki/Meloetta";
            color = 0xADA594;
            sprite = gif_url.concat("meloetta-pirouette.gif");
            number = 647;
            type1 = "Normal";
            type2 = "Fighting"
            family = "Melody Pokémon";
            ability1 = "Serene Grace";
            egg1 = "Undiscovered";
            rate = 3;
            height = "2'00\"/0.6 m";
            weight = "14.3 lbs./6.5 kg";
            hp = 100;
            atk = 128;
            def = 90;
            spa = 77;
            spd = 77;
            spe = 128;
            break;
        case "greninja":
            other_forms = "Other forms: greninja ash"
            title = "Greninja";
            url = "https://bulbapedia.bulbagarden.net/wiki/Greninja";
            color = 0x399cff;
            sprite = gif_url.concat("greninja.gif");
            number = 658;
            type1 = "Water";
            type2 = "Dark"
            family = "Ninja Pokémon";
            ability1 = "Torrent";
            ability2 = "Battle Bond";
            ability3 = "Protean";
            egg1 = "Water 1";
            rate = 45;
            height = "4'11\"/1.5 m";
            weight = "88.2 lbs./40.0 kg";
            hp = 72;
            atk = 95;
            def = 67;
            spa = 103;
            spd = 71;
            spe = 122;
            break;
        case "greninja ash":
            other_forms = "Other forms: greninja"
            title = "Ash Greninja";
            url = "https://bulbapedia.bulbagarden.net/wiki/Greninja";
            color = 0x399cff;
            sprite = gif_url.concat("greninja-ash.gif");
            number = 658;
            type1 = "Water";
            type2 = "Dark"
            family = "Ninja Pokémon";
            ability1 = "Torrent";
            ability2 = "Battle Bond";
            ability3 = "Protean";
            egg1 = "Water 1";
            rate = 45;
            height = "4'11\"/1.5 m";
            weight = "88.2 lbs./40.0 kg";
            hp = 72;
            atk = 145;
            def = 67;
            spa = 153;
            spd = 71;
            spe = 132;
            break;
        case "greninja ash":
            other_forms = "Other forms: greninja"
            title = "Ash Greninja";
            url = "https://bulbapedia.bulbagarden.net/wiki/Greninja";
            color = 0x399cff;
            sprite = gif_url.concat("greninja-ash.gif");
            number = 658;
            type1 = "Water";
            type2 = "Dark"
            family = "Ninja Pokémon";
            ability1 = "Torrent";
            ability2 = "Battle Bond";
            ability3 = "Protean";
            egg1 = "Water 1";
            rate = 45;
            height = "4'11\"/1.5 m";
            weight = "88.2 lbs./40.0 kg";
            hp = 72;
            atk = 145;
            def = 67;
            spa = 153;
            spd = 71;
            spe = 132;
            break;
        case "aegislash":
            other_forms = "Other forms: aegislash blade"
            title = "Aegislash";
            url = "https://bulbapedia.bulbagarden.net/wiki/Aegislash";
            color = 0xADADC6;
            sprite = gif_url.concat("aegislash.gif");
            number = 681;
            type1 = "Steel";
            type2 = "Ghost"
            family = "Royal Sword Pokémon";
            ability1 = "Stance Change";
            egg1 = "Mineral";
            rate = 45;
            height = "5'07\"/1.7 m";
            weight = "116.8 lbs./53.0 kg";
            hp = 60;
            atk = 50;
            def = 150;
            spa = 50;
            spd = 150;
            spe = 60;
            break;
        case "aegislash blade":
            other_forms = "Other forms: aegislash"
            title = "Aegislash Blade";
            url = "https://bulbapedia.bulbagarden.net/wiki/Aegislash";
            color = 0xADADC6;
            sprite = gif_url.concat("aegislash-blade.gif");
            number = 681;
            type1 = "Steel";
            type2 = "Ghost"
            family = "Royal Sword Pokémon";
            ability1 = "Stance Change";
            egg1 = "Mineral";
            rate = 45;
            height = "5'07\"/1.7 m";
            weight = "116.8 lbs./53.0 kg";
            hp = 60;
            atk = 150;
            def = 50;
            spa = 150;
            spd = 50;
            spe = 60;
            break;
        case "pumpkaboo":
            other_forms = "Other forms: pumpkaboo small, pumpkaboo large, pumpkaboo super"
            title = "Pumpkaboo";
            url = "https://bulbapedia.bulbagarden.net/wiki/Pumpkaboo";
            color = 0x6363B5;
            sprite = gif_url.concat("pumpkaboo.gif");
            number = 710;
            type1 = "Ghost";
            type2 = "Grass"
            family = "Pumpkin Pokémon";
            ability1 = "Pick Up";
            ability2 = "Frisk";
            ability3 = "Insomnia";
            egg1 = "Amorphous";
            rate = 120;
            height = "1'04\"/0.4 m";
            weight = "11 lbs./5.0 kg";
            hp = 49;
            atk = 66;
            def = 70;
            spa = 44;
            spd = 55;
            spe = 51;
            break;
        case "pumpkaboo small":
            other_forms = "Other forms: pumpkaboo, pumpkaboo large, pumpkaboo super"
            title = "Pumpkaboo Small";
            url = "https://bulbapedia.bulbagarden.net/wiki/Pumpkaboo";
            color = 0x6363B5;
            sprite = gif_url.concat("pumpkaboo-small.gif");
            number = 710;
            type1 = "Ghost";
            type2 = "Grass"
            family = "Pumpkin Pokémon";
            ability1 = "Pick Up";
            ability2 = "Frisk";
            ability3 = "Insomnia";
            egg1 = "Amorphous";
            rate = 120;
            height = "1'00\"/0.3 m";
            weight = "7.7 lbs./3.5 kg";
            hp = 44;
            atk = 66;
            def = 70;
            spa = 44;
            spd = 55;
            spe = 56;
            break;
        case "pumpkaboo large":
            other_forms = "Other forms: pumpkaboo, pumpkaboo small, pumpkaboo super"
            title = "Pumpkaboo Large";
            url = "https://bulbapedia.bulbagarden.net/wiki/Pumpkaboo";
            color = 0x6363B5;
            sprite = gif_url.concat("pumpkaboo-large.gif");
            number = 710;
            type1 = "Ghost";
            type2 = "Grass"
            family = "Pumpkin Pokémon";
            ability1 = "Pick Up";
            ability2 = "Frisk";
            ability3 = "Insomnia";
            egg1 = "Amorphous";
            rate = 120;
            height = "1'08\"/0.5 m";
            weight = "16.5 lbs./7.5 kg";
            hp = 54;
            atk = 66;
            def = 70;
            spa = 44;
            spd = 55;
            spe = 46;
            break;
        case "pumpkaboo super":
            other_forms = "Other forms: pumpkaboo, pumpkaboo small, pumpkaboo large"
            title = "Pumpkaboo Super";
            url = "https://bulbapedia.bulbagarden.net/wiki/Pumpkaboo";
            color = 0x6363B5;
            sprite = gif_url.concat("pumpkaboo-super.gif");
            number = 710;
            type1 = "Ghost";
            type2 = "Grass"
            family = "Pumpkin Pokémon";
            ability1 = "Pick Up";
            ability2 = "Frisk";
            ability3 = "Insomnia";
            egg1 = "Amorphous";
            rate = 120;
            height = "2'07\"/0.8 m";
            weight = "33.1 lbs./15.0 kg";
            hp = 59;
            atk = 66;
            def = 70;
            spa = 44;
            spd = 55;
            spe = 41;
            break;
        case "gourgeist":
            other_forms = "Other forms: gourgeist small, gourgeist large, gourgeist super"
            title = "Gourgeist";
            url = "https://bulbapedia.bulbagarden.net/wiki/Gourgeist";
            color = 0x6363B5;
            sprite = gif_url.concat("gourgeist.gif");
            number = 711;
            type1 = "Ghost";
            type2 = "Grass"
            family = "Pumpkin Pokémon";
            ability1 = "Pick Up";
            ability2 = "Frisk";
            ability3 = "Insomnia";
            egg1 = "Amorphous";
            rate = 120;
            height = "2'11\"/0.9 m";
            weight = "27.6 lbs./12.5 kg";
            hp = 65;
            atk = 90;
            def = 122;
            spa = 58;
            spd = 75;
            spe = 84;
            break;
        case "gourgeist small":
            other_forms = "Other forms: gourgeist, gourgeist large, gourgeist super"
            title = "Gourgeist Small";
            url = "https://bulbapedia.bulbagarden.net/wiki/Gourgeist";
            color = 0x6363B5;
            sprite = gif_url.concat("gourgeist-small.gif");
            number = 711;
            type1 = "Ghost";
            type2 = "Grass"
            family = "Pumpkin Pokémon";
            ability1 = "Pick Up";
            ability2 = "Frisk";
            ability3 = "Insomnia";
            egg1 = "Amorphous";
            rate = 120;
            height = "2'04\"/0.7 m";
            weight = "20.9 lbs./9.5 kg";
            hp = 55;
            atk = 85;
            def = 122;
            spa = 58;
            spd = 75;
            spe = 99;
            break;
        case "gourgeist large":
            other_forms = "Other forms: gourgeist, gourgeist small, gourgeist super"
            title = "Gourgeist Large";
            url = "https://bulbapedia.bulbagarden.net/wiki/Gourgeist";
            color = 0x6363B5;
            sprite = gif_url.concat("gourgeist-large.gif");
            number = 711;
            type1 = "Ghost";
            type2 = "Grass"
            family = "Pumpkin Pokémon";
            ability1 = "Pick Up";
            ability2 = "Frisk";
            ability3 = "Insomnia";
            egg1 = "Amorphous";
            rate = 120;
            height = "3'07\"/1.1 m";
            weight = "30.9 lbs./14.0 kg";
            hp = 75;
            atk = 95;
            def = 122;
            spa = 58;
            spd = 75;
            spe = 69;
            break;
        case "gourgeist super":
            other_forms = "Other forms: gourgeist, gourgeist small, gourgeist large"
            title = "Gourgeist Super";
            url = "https://bulbapedia.bulbagarden.net/wiki/Gourgeist";
            color = 0x6363B5;
            sprite = gif_url.concat("gourgeist-super.gif");
            number = 711;
            type1 = "Ghost";
            type2 = "Grass"
            family = "Pumpkin Pokémon";
            ability1 = "Pick Up";
            ability2 = "Frisk";
            ability3 = "Insomnia";
            egg1 = "Amorphous";
            rate = 120;
            height = "5'07\"/1.7 m";
            weight = "86.0 lbs./39.0 kg";
            hp = 85;
            atk = 100;
            def = 122;
            spa = 58;
            spd = 75;
            spe = 54;
            break;
        case "zygarde":
        case "zygarde 50":
            other_forms = "Other forms: zygarde 10, zygarde 100"
            title = "Zygarde 50%";
            url = "https://bulbapedia.bulbagarden.net/wiki/Zygarde";
            color = 0x8858F6;
            sprite = gif_url.concat("zygarde.gif");
            number = 718;
            type1 = "Dragon";
            type2 = "Ground"
            family = "Order Pokémon";
            ability1 = "Aura Break";
            ability2 = "Power Construct";
            egg1 = "Undiscovered";
            rate = 3;
            height = "16'05\"/5.0 m";
            weight = "672.4lbs./305.0 kg";
            hp = 108;
            atk = 100;
            def = 121;
            spa = 81;
            spd = 95;
            spe = 95;
            break;
        case "zygarde 10":
            other_forms = "Other forms: zygarde, zygarde 100"
            title = "Zygarde 10%";
            url = "https://bulbapedia.bulbagarden.net/wiki/Zygarde";
            color = 0x8858F6;
            sprite = gif_url.concat("zygarde-10.gif");
            number = 718;
            type1 = "Dragon";
            type2 = "Ground"
            family = "Order Pokémon";
            ability1 = "Aura Break";
            ability2 = "Power Construct";
            egg1 = "Undiscovered";
            rate = 3;
            height = "3'11\"/1.2 m";
            weight = "73.9lbs./33.5 kg";
            hp = 54;
            atk = 100;
            def = 71;
            spa = 61;
            spd = 85;
            spe = 115;
            break;
        case "zygarde 100":
            other_forms = "Other forms: zygarde, zygarde 10"
            title = "Zygarde 100%";
            url = "https://bulbapedia.bulbagarden.net/wiki/Zygarde";
            color = 0x8858F6;
            sprite = gif_url.concat("zygarde-complete.gif");
            number = 718;
            type1 = "Dragon";
            type2 = "Ground"
            family = "Order Pokémon";
            ability1 = "Power Construct";
            egg1 = "Undiscovered";
            rate = 3;
            height = "14'09\"/4.5 m";
            weight = "1344.8lbs./610.0 kg";
            hp = 216;
            atk = 100;
            def = 121;
            spa = 91;
            spd = 95;
            spe = 85;
            break;
        case "hoopa":
            other_forms = "Other forms: hoopa unbound"
            title = "Hoopa";
            url = "https://bulbapedia.bulbagarden.net/wiki/Hoopa";
            color = 0xFF73A5;
            sprite = gif_url.concat("hoopa.gif");
            number = 720;
            type1 = "Psychic";
            type2 = "Gost"
            family = "Mischief Pokémon";
            ability1 = "Magician";
            egg1 = "Undiscovered";
            rate = 3;
            height = "1'08\"/0.5 m";
            weight = "19.8lbs./9.0 kg";
            hp = 80;
            atk = 110;
            def = 60;
            spa = 150;
            spd = 130;
            spe = 70;
            break;
        case "hoopa unbound":
            other_forms = "Other forms: hoopa"
            title = "Hoopa Unbound";
            url = "https://bulbapedia.bulbagarden.net/wiki/Hoopa";
            color = 0xFF73A5;
            sprite = gif_url.concat("hoopa-unbound.gif");
            number = 720;
            type1 = "Psychic";
            type2 = "Dark"
            family = "Mischief Pokémon";
            ability1 = "Magician";
            egg1 = "Undiscovered";
            rate = 3;
            height = "21'04\"/6.5 m";
            weight = "1080.3lbs./490.0 kg";
            hp = 80;
            atk = 160;
            def = 60;
            spa = 170;
            spd = 130;
            spe = 80;
            break;
        case "oricorio baile":
        case "oricorio":
            other_forms = "Other forms: oricorio pom-pom, oricorio pa'u, oricorio sensu"
            title = "Oricorio Baile Style";
            url = "https://bulbapedia.bulbagarden.net/wiki/Oricorio";
            color = 0x9CADF7;
            sprite = gif_url.concat("oricorio.gif");
            number = 741;
            type1 = "Fire";
            type2 = "Flying"
            family = "Dancing Pokémon";
            ability1 = "Dancer";
            egg1 = "Flying";
            rate = 45;
            height = "2'00\"/0.6 m";
            weight = "7.5lbs./3.4 kg";
            hp = 75;
            atk = 70;
            def = 70;
            spa = 98;
            spd = 70;
            spe = 93;
            break;
        case "oricorio pom pom":
        case "oricorio pom-pom":
        case "oricorio pompom":
            other_forms = "Other forms: oricorio, oricorio pa'u, oricorio sensu"
            title = "Oricorio Pom-Pom Style";
            url = "https://bulbapedia.bulbagarden.net/wiki/Oricorio";
            color = 0x9CADF7;
            sprite = gif_url.concat("oricorio-pompom.gif");
            number = 741;
            type1 = "Fire";
            type2 = "Electric"
            family = "Dancing Pokémon";
            ability1 = "Dancer";
            egg1 = "Flying";
            rate = 45;
            height = "2'00\"/0.6 m";
            weight = "7.5lbs./3.4 kg";
            hp = 75;
            atk = 70;
            def = 70;
            spa = 98;
            spd = 70;
            spe = 93;
            break;
        case "oricorio pa u":
        case "oricorio pau":
        case "oricorio pa'u":
            other_forms = "Other forms: oricorio, oricorio pom-pom, oricorio sensu"
            title = "Oricorio Pa'u Style";
            url = "https://bulbapedia.bulbagarden.net/wiki/Oricorio";
            color = 0x9CADF7;
            sprite = gif_url.concat("oricorio-pau.gif");
            number = 741;
            type1 = "Fire";
            type2 = "Psychic"
            family = "Dancing Pokémon";
            ability1 = "Dancer";
            egg1 = "Flying";
            rate = 45;
            height = "2'00\"/0.6 m";
            weight = "7.5lbs./3.4 kg";
            hp = 75;
            atk = 70;
            def = 70;
            spa = 98;
            spd = 70;
            spe = 93;
            break;
        case "oricorio sensu":
            other_forms = "Other forms: oricorio, oricorio pom-pom, oricorio pa'u"
            title = "Oricorio Sensu Style";
            url = "https://bulbapedia.bulbagarden.net/wiki/Oricorio";
            color = 0x9CADF7;
            sprite = gif_url.concat("oricorio-sensu.gif");
            number = 741;
            type1 = "Fire";
            type2 = "Psychic"
            family = "Dancing Pokémon";
            ability1 = "Dancer";
            egg1 = "Flying";
            rate = 45;
            height = "2'00\"/0.6 m";
            weight = "7.5lbs./3.4 kg";
            hp = 75;
            atk = 70;
            def = 70;
            spa = 98;
            spd = 70;
            spe = 93;
            break;
        case "lynaroc":
        case "lynaroc midday":
            other_forms = "Other forms: lynaroc midnight, lynaroc dusk";
            title = "Lynaroc";
            url = "https://bulbapedia.bulbagarden.net/wiki/Lynaroc";
            color = 0xDBA55A;
            sprite = gif_url.concat("lynaroc.gif");
            number = 745;
            type1 = "Rock";
            family = "Wolf Pokémon";
            ability1 = "Keen Eye";
            ability2 = "Sand Rush";
            ability3 = "Steadfast";
            egg1 = "Field";
            rate = 90;
            height = "2'07\"/0.8 m";
            weight = "55.1lbs./25.0 kg";
            hp = 75;
            atk = 115;
            def = 65;
            spa = 55;
            spd = 65;
            spe = 112;
            break;
        case "lynaroc midnight":
            other_forms = "Other forms: lynaroc, lynaroc dusk";
            title = "Lynaroc Midnigth";
            url = "https://bulbapedia.bulbagarden.net/wiki/Lynaroc";
            color = 0xDBA55A;
            sprite = gif_url.concat("lynaroc-midnight.gif");
            number = 745;
            type1 = "Rock";
            family = "Wolf Pokémon";
            ability1 = "Keen Eye";
            ability2 = "Vital Spirit";
            ability3 = "No Guard";
            egg1 = "Field";
            rate = 90;
            height = "3'07\"/1.1 m";
            weight = "55.1lbs./25.0 kg";
            hp = 85;
            atk = 115;
            def = 75;
            spa = 55;
            spd = 75;
            spe = 82;
            break;
        case "lynaroc duck":
            other_forms = "Other forms: lynaroc, lynaroc midnight";
            title = "Lynaroc Dusk";
            url = "https://bulbapedia.bulbagarden.net/wiki/Lynaroc";
            color = 0xDBA55A;
            sprite = gif_url.concat("lynaroc-dusk.gif");
            number = 745;
            type1 = "Rock";
            family = "Wolf Pokémon";
            ability1 = "Tough Claws";
            egg1 = "Field";
            rate = 90;
            height = "2'07\"/1.1 m";
            weight = "55.1lbs./25.0 kg";
            hp = 75;
            atk = 117;
            def = 65;
            spa = 55;
            spd = 65;
            spe = 110;
            break;
        case "wishwashi":
            other_forms = "Other forms: wishwashi school";
            title = "Wishwashi";
            url = "https://bulbapedia.bulbagarden.net/wiki/Wishwashi";
            color = 0x399CCF;
            sprite = gif_url.concat("wishwashi.gif");
            number = 746;
            type1 = "Water";
            family = "Small Fry Pokémon";
            ability1 = "Schooling";
            egg1 = "Water 2";
            rate = 90;
            height = "0'08\"/0.2 m";
            weight = "0.7lbs./0.3 kg";
            hp = 45;
            atk = 20;
            def = 20;
            spa = 25;
            spd = 25;
            spe = 40;
            break;
        case "wishwashi school":
            other_forms = "Other forms: wishwashi";
            title = "Wishwashi School";
            url = "https://bulbapedia.bulbagarden.net/wiki/Wishwashi";
            color = 0x399CCF;
            sprite = gif_url.concat("wishwashi-school.gif");
            number = 746;
            type1 = "Water";
            family = "Small Fry Pokémon";
            ability1 = "Schooling";
            egg1 = "Water 2";
            rate = 60;
            height = "26'11\"/8.2 m";
            weight = "173.3lbs./78.6 kg";
            hp = 45;
            atk = 140;
            def = 130;
            spa = 140;
            spd = 135;
            spe = 30;
            break;
        case "minior":
            other_forms = "Other forms: minior meteor";
            title = "Minior";
            url = "https://bulbapedia.bulbagarden.net/wiki/Minior";
            color = 0xBDA55A;
            sprite = gif_url.concat("minior.gif");
            number = 774;
            type1 = "Rock";
            typ2 = "Flying";
            family = "Meteor Pokémon";
            ability1 = "Sheilds Down";
            egg1 = "Mineral";
            rate = 30;
            height = "1'00\"/0.3 m";
            weight = "0.7lbs./0.3 kg";
            hp = 60;
            atk = 100;
            def = 60;
            spa = 100;
            spd = 65;
            spe = 120;
            break;
        case "minior metero":
            other_forms = "Other forms: minior";
            title = "Minior Meteor";
            url = "https://bulbapedia.bulbagarden.net/wiki/Minior";
            color = 0xBDA55A;
            sprite = gif_url.concat("minior-meteor.gif");
            number = 774;
            type1 = "Rock";
            typ2 = "Flying";
            family = "Meteor Pokémon";
            ability1 = "Sheilds Down";
            egg1 = "Mineral";
            rate = 30;
            height = "1'00\"/0.3 m";
            weight = "88.2lbs./40.0 kg";
            hp = 60;
            atk = 60;
            def = 100;
            spa = 60;
            spd = 100;
            spe = 60;
            break;
        case "necrozma":
            other_forms = "Other forms: necrozma dusk mane, necrozma dawn wings, ultra necrozma";
            title = "Necrozma";
            url = "https://bulbapedia.bulbagarden.net/wiki/Necrozma";
            color = 0xFF73A5;
            sprite = gif_url.concat("necrozma.gif");
            number = 800;
            type1 = "Psychic";
            family = "Prism Pokémon";
            ability1 = "Prism Armor";
            egg1 = "Undiscovered";
            rate = "3(SM)/255(USUM)";
            height = "7'10\"/2.4 m";
            weight = "507.1lbs./230.0 kg";
            hp = 97;
            atk = 107;
            def = 101;
            spa = 127;
            spd = 89;
            spe = 79;
            break;
        case "necrozma dusk mane":
            other_forms = "Other forms: necrozma, necrozma dawn wings, ultra necrozma";
            title = "Necrozma Dusk Mane";
            url = "https://bulbapedia.bulbagarden.net/wiki/Necrozma";
            color = 0xFF73A5;
            sprite = gif_url.concat("necrozma-duskmane.gif");
            number = 800;
            type1 = "Psychic";
            type2 = "Steel";
            family = "Prism Pokémon";
            ability1 = "Prism Armor";
            egg1 = "Undiscovered";
            rate = "3(SM)/255(USUM)";
            height = "12'06\"/3.8 m";
            weight = "1014.1lbs./460.0 kg";
            hp = 97;
            atk = 157;
            def = 127;
            spa = 113;
            spd = 109;
            spe = 77;
            break;
        case "necrozma dawn wings":
            other_forms = "Other forms: necrozma, necrozma dusk mane, ultra necrozma";
            title = "Necrozma Dawn Wings";
            url = "https://bulbapedia.bulbagarden.net/wiki/Necrozma";
            color = 0xFF73A5;
            sprite = gif_url.concat("necrozma-dawnwings.gif");
            number = 800;
            type1 = "Psychic";
            type2 = "Ghost";
            family = "Prism Pokémon";
            ability1 = "Prism Armor";
            egg1 = "Undiscovered";
            rate = "3(SM)/255(USUM)";
            height = "13'09\"/4.2 m";
            weight = "771.6lbs./350.0 kg";
            hp = 97;
            atk = 113;
            def = 109;
            spa = 157;
            spd = 127;
            spe = 77;
            break;
        case "ultra necrozma":
            other_forms = "Other forms: necrozma, necrozma dusk mane, necrozma dawn wings";
            title = "Ultra Necrozma";
            url = "https://bulbapedia.bulbagarden.net/wiki/Necrozma";
            color = 0xFF73A5;
            sprite = gif_url.concat("necrozma-ultra.gif");
            number = 800;
            type1 = "Psychic";
            type2 = "Dragon";
            family = "Prism Pokémon";
            ability1 = "Neuroforce";
            egg1 = "Undiscovered";
            rate = "3(SM)/255(USUM)";
            height = "24'07\"/7.5 m";
            weight = "507.1lbs./230.0 kg";
            hp = 97;
            atk = 167;
            def = 97;
            spa = 167;
            spd = 97;
            spe = 129;
            break;
        case "kyogre":
            other_forms = "";
            title = "Kyogre";
            url = "https://bulbapedia.bulbagarden.net/wiki/Kyogre";
            color = 0x399CCF;
            sprite = gif_url.concat("kyogre.gif");
            number = 382;
            type1 = "Water";
            family = "Sea Bassin";
            ability1 = "Drizzle";
            egg1 = "Undiscovered";
            rate = 3;
            height = "14'09\"/4.5 m";
            weight = "776.0lbs./352.0 kg";
            hp = 100;
            atk = 100;
            def = 90;
            spa = 150;
            spd = 140;
            spe = 90;
            break;
        case "primal kyogre":
            other_forms = "";
            title = "Primal Kyogre";
            url = "https://bulbapedia.bulbagarden.net/wiki/Kyogre";
            color = 0x399CCF;
            sprite = gif_url.concat("kyogre-primal.gif");
            number = 382;
            type1 = "Water";
            family = "Sea Bassin";
            ability1 = "Primordial Sea";
            egg1 = "Undiscovered";
            rate = 3;
            height = "32'02\"/9.8 m";
            weight = "948.0lbs./430.0 kg";
            hp = 100;
            atk = 150;
            def = 90;
            spa = 180;
            spd = 160;
            spe = 90;
            break;
        case "groudon":
            other_forms = "";
            title = "Groudon";
            url = "https://bulbapedia.bulbagarden.net/wiki/Groudon";
            color = 0xD6B55A;
            sprite = gif_url.concat("groudon.gif");
            number = 383;
            type1 = "Ground";
            family = "Continent";
            ability1 = "Drought";
            egg1 = "Undiscovered";
            rate = 3;
            height = "11'06\"/3.5 m";
            weight = "2,094.4lbs./950.0 kg";
            hp = 100;
            atk = 150;
            def = 140;
            spa = 100;
            spd = 90;
            spe = 90;
            break;
        case "primal groudon":
            other_forms = "";
            title = "Primal Groudon";
            url = "https://bulbapedia.bulbagarden.net/wiki/Groudon";
            color = 0xD6B55A;
            sprite = gif_url.concat("groudon-primal.gif");
            number = 383;
            type1 = "Ground";
            family = "Continent";
            ability1 = "Desolated Land";
            egg1 = "Undiscovered";
            rate = 3;
            height = "16'05\"/5.0 m";
            weight = "2,204.0lbs./999.7 kg";
            hp = 100;
            atk = 180;
            def = 160;
            spa = 150;
            spd = 90;
            spe = 90;
            break;
        //8th Generation pokemon, will be removed when Sword and Sheild will be released.
        case "meltan":
            other_forms = "";
            title = "Meltan";
            url = "https://bulbapedia.bulbagarden.net/wiki/Meltan";
            color = 0xADADC6;
            sprite = "https://www.pokepedia.fr/images/thumb/5/57/Meltan-LGPE.png/57px-Meltan-LGPE.png";
            number = 808;
            type1 = "Steel";
            family = "Nex Nut Pokémon";
            ability1 = "Magnet Pull";
            egg1 = "Undiscovered";
            rate = -1;
            height = "0'08\"/0.2 m";
            weight = "17.6lbs./8.0 kg";
            hp = 46;
            atk = 65;
            def = 65;
            spa = 55;
            spd = 35;
            spe = 34;
            break;
        case "melmetal":
            other_forms = "";
            title = "Melmetal";
            url = "https://bulbapedia.bulbagarden.net/wiki/Melmetal";
            color = 0xADADC6;
            sprite = "https://www.pokepedia.fr/images/thumb/d/d6/Melmetal-LGPE.png/131px-Melmetal-LGPE.png";
            number = 809;
            type1 = "Steel";
            family = "Nex Nut Pokémon";
            ability1 = "Iron Fist";
            egg1 = "Undiscovered";
            rate = -1;
            height = "8'02\"/2.5 m";
            weight = "1763.7lbs./800.0 kg";
            hp = 135;
            atk = 143;
            def = 143;
            spa = 80;
            spd = 65;
            spe = 34;
            break;
        case "grookey":
            other_forms = "";
            title = "Grookey";
            url = "https://bulbapedia.bulbagarden.net/wiki/Grookey";
            color = 0x7bce52;
            sprite = "https://www.pokepedia.fr/images/thumb/e/e1/Ouistempo-EB.png/182px-Ouistempo-EB.png";
            number = 810;
            type1 = "Grass";
            family = "Chimp Pokémon";
            ability1 = "Overgrow";
            egg1 = "???";
            rate = 0;
            height = "1'00\"/0.3 m";
            weight = "11.0lbs./5.0 kg";
            hp = 0;
            break;
        case "scorbunny":
            other_forms = "";
            title = "Scorbunny";
            url = "https://bulbapedia.bulbagarden.net/wiki/Scorbunny";
            color = 0xf75231;
            sprite = "https://www.pokepedia.fr/images/thumb/c/c6/Flambino-EB.png/118px-Flambino-EB.png";
            number = 813;
            type1 = "Fire";
            family = "Rabbit Pokémon";
            ability1 = "Blaze";
            egg1 = "???";
            rate = 0;
            height = "1'00\"/0.3 m";
            weight = "9.9lbs./4.5 kg";
            hp = 0;
            break;
        case "sobble":
            other_forms = "";
            title = "Sobble";
            url = "https://bulbapedia.bulbagarden.net/wiki/Sobble";
            color = 0x399cff;
            sprite = "https://www.pokepedia.fr/images/thumb/2/2c/Larm%C3%A9l%C3%A9on-EB.png/160px-Larm%C3%A9l%C3%A9on-EB.png";
            number = 816;
            type1 = "Water";
            family = "Water Lizard Pokémon";
            ability1 = "Torrent";
            egg1 = "???";
            rate = 0;
            height = "1'00\"/0.3 m";
            weight = "8.8lbs./4.0 kg";
            hp = 0;
            break;
        case "gossifleur":
            other_forms = "";
            title = "Gossifleur";
            url = "https://bulbapedia.bulbagarden.net/wiki/Gossifleur";
            color = 0x7bce52;
            sprite = "https://www.pokepedia.fr/images/thumb/2/20/Tournicoton-EB.png/253px-Tournicoton-EB.png";
            number = 0;
            type1 = "Grass";
            family = "Flowering Pokémon";
            ability1 = "Cotton Down";
            ability2 = "Regenerator";
            egg1 = "???";
            rate = 0;
            height = "1'03\"/0.4 m";
            weight = "4.9lbs./2.2 kg";
            hp = 0;
            break;
        case "eldegoss":
            other_forms = "";
            title = "Eldegoss";
            url = "https://bulbapedia.bulbagarden.net/wiki/Eldegoss";
            color = 0x7bce52;
            sprite = "https://www.pokepedia.fr/images/thumb/f/f7/Blancoton-EB.png/204px-Blancoton-EB.png";
            number = 0;
            type1 = "Grass";
            family = "Cotton Bloom Pokémon";
            ability1 = "Cotton Down";
            ability2 = "Regenerator";
            egg1 = "???";
            rate = 0;
            height = "1'06\"/0.5 m";
            weight = "5.5lbs./2.5 kg";
            hp = 0;
            break;
        case "wooloo":
            other_forms = "";
            title = "Wooloo";
            url = "https://bulbapedia.bulbagarden.net/wiki/Wooloo";
            color = 0xada594;
            sprite = "https://www.pokepedia.fr/images/thumb/7/75/Moumouton-EB.png/267px-Moumouton-EB.png";
            number = 0;
            type1 = "Normal";
            family = "Sheep Pokémon";
            ability1 = "Fluffy";
            ability2 = "Run Away";
            egg1 = "???";
            rate = 0;
            height = "2'00\"/0.6 m";
            weight = "13.2lbs./6.0 kg";
            hp = 0;
            break;
         case "corviknight":
            other_forms = "";
            title = "Corviknight";
            url = "https://bulbapedia.bulbagarden.net/wiki/Corviknight";
            color = 0x9cadf7;
            sprite = "https://www.pokepedia.fr/images/thumb/3/38/Corvaillus-EB.png/193px-Corvaillus-EB.png";
            number = 0;
            type1 = "Flying";
            type2 = "Steel"
            family = "Raven Pokémon";
            ability1 = "Pressure";
            ability2 = "Unnerve";
            ability3 = "Mirror Armor";
            egg1 = "???";
            rate = 0;
            height = "7'02\"/2.2 m";
            weight = "165.3lbs./75 kg";
            hp = 0;
            break;
        case "alcremie":
            other_forms = "";
            title = "Alcremie";
            url = "https://bulbapedia.bulbagarden.net/wiki/Alcremie";
            color = 0xe09ae3;
            sprite = "https://www.pokepedia.fr/images/thumb/e/ef/Charmilly-EB.png/183px-Charmilly-EB.png";
            number = 0;
            type1 = "Fairy";
            family = "Cream Pokémon";
            ability1 = "Sweet Veil";
            egg1 = "???";
            rate = 0;
            height = "1'00\"/0.3 m";
            weight = "1.1lbs./0.5 kg";
            hp = 0;
            break;
        case "yamper":
            other_forms = "";
            title = "Yamper";
            url = "https://bulbapedia.bulbagarden.net/wiki/Yamper";
            color = 0xffc631;
            sprite = "https://www.pokepedia.fr/images/thumb/e/eb/Voltoutou-EB.png/197px-Voltoutou-EB.png";
            number = 0;
            type1 = "Electric";
            family = "Puppy Pokémon";
            ability1 = "Ball Fetch";
            egg1 = "???";
            rate = 0;
            height = "1'00\"/0.3 m";
            weight = "29.8lbs./13.5 kg";
            hp = 0;
            break;
        case "rolycoly":
            other_forms = "";
            title = "Rolycoly";
            url = "https://bulbapedia.bulbagarden.net/wiki/Rolycoly";
            color = 0xbda55a;
            sprite = "https://www.pokepedia.fr/images/thumb/8/8d/Charbi-EB.png/286px-Charbi-EB.png";
            number = 0;
            type1 = "Rock";
            family = "Coal Pokémon";
            ability1 = "Steam Engine Fetch";
            ability2 = "heatproof"
            egg1 = "???";
            rate = 0;
            height = "1'00\"/0.3 m";
            weight = "26.5lbs./12.0 kg";
            hp = 0;
            break;
        case "duraludon":
            other_forms = "";
            title = "Duraludon";
            url = "https://bulbapedia.bulbagarden.net/wiki/Duraludon";
            color = 0xadadc6;
            sprite = "https://www.pokepedia.fr/images/thumb/6/6c/Duralugon-EB.png/199px-Duralugon-EB.png";
            number = 0;
            type1 = "Steel";
            type2 = "Dragon"
            family = "Alloy Pokémon";
            ability1 = "Light Metal";
            ability2 = "heavy Metal"
            egg1 = "???";
            rate = 0;
            height = "5'09\"/1.8 m";
            weight = "88.2lbs./40.0 kg";
            hp = 0;
            break;
        /*case "zacian":
            other_forms = "";
            title = "Zacian";
            url = "https://bulbapedia.bulbagarden.net/wiki/Zacian";
            sprite = "https://www.pokepedia.fr/images/thumb/c/cc/Zacian-EB.png/249px-Zacian-EB.png";
            number = 0;
            type1 = "???";
            family = "???";
            ability1 = "???";
            egg1 = "???";
            rate = 0;
            height = "???";
            weight = "???";
            hp = 0;
            break;*/
        case "zamazenta":
            other_forms = "";
            title = "Zamazenta";
            url = "https://bulbapedia.bulbagarden.net/wiki/Zamazenta";
            sprite = "https://www.pokepedia.fr/images/thumb/d/d7/Zamazenta-EB.png/209px-Zamazenta-EB.png";
            name = "Zamazenta";
            number = 0;
            type1 = "???";
            family = "???";
            ability1 = "???";
            ability2 = "???";
            egg1 = "???";
            rate = 0;
            height = "???";
            weight = "???";
            hp = 0;
            break;
        case "galar weezing":
        case "galarian weezing":
            other_forms = "";
            title = "Galarian Weezing";
            url = "https://bulbapedia.bulbagarden.net/wiki/Weezing";
            color = 0xE09AE3;
            sprite = "https://www.pokepedia.fr/images/thumb/1/15/Smogogo_de_Galar-EB.png/218px-Smogogo_de_Galar-EB.png";
            number = 110;
            type1 = "Poison";
            type2 = "Fairy"
            family = "Poison Gas Pokémon";
            ability1 = "Levitate";
            ability2 = "Neutralizing Gas"
            egg1 = "Amorphous"
            rate = 60;
            height = "9'08\"/3.0 m";
            weight = "35.3lbs./16.0 kg";
            hp = 0;
            break;
        case "galar zigzagoon":
        case "galarian zigzagoon":
            other_forms = "";
            title = "Galarian Zigzagoon";
            url = "https://bulbapedia.bulbagarden.net/wiki/Zigzagoon";
            color = 0xADA594;
            sprite = "https://www.pokepedia.fr/images/thumb/1/1b/Zigzaton_de_Galar-EB.png/314px-Zigzaton_de_Galar-EB.png";
            number = 263;
            type1 = "Dark";
            type2 = "Normal"
            family = "Tiny Raccoon Pokémon";
            ability1 = "Pickup";
            ability2 = "Gluttony"
            egg1 = "Field"
            rate = 255;
            height = "1'04\"/0.4 m";
            weight = "38.6lbs./17.5 kg";
            hp = 0;
            break;
        case "galar linoone":
        case "galarian linoone":
            other_forms = "";
            title = "Galarian Linoone";
            url = "https://bulbapedia.bulbagarden.net/wiki/Linoone";
            color = 0xADA594;
            sprite = "https://www.pokepedia.fr/images/thumb/1/1b/Zigzaton_de_Galar-EB.png/314px-Zigzaton_de_Galar-EB.png";
            number = 264;
            type1 = "Dark";
            type2 = "Normal"
            family = "Rushing Pokémon";
            ability1 = "Pickup";
            ability2 = "Gluttony";
            egg1 = "Field"
            rate = 90;
            height = "1'08\"/0.5 m";
            weight = "71.6lbs./32.5 kg";
            hp = 0;
            break;
        case "obstagoon":
            other_forms = "";
            title = "Obstagoon";
            url = "https://bulbapedia.bulbagarden.net/wiki/Obstagoon";
            color = 0xADA594;
            sprite = "https://www.pokepedia.fr/images/thumb/8/82/Ixon-EB.png/171px-Ixon-EB.png";
            number = 0;
            type1 = "Dark";
            type2 = "Normal"
            family = "Blocking Pokémon";
            ability1 = "Reckless";
            ability2 = "Cuts";
            egg1 = "Field";
            rate = 0;
            height = "5'03\"/1.6 m";
            weight = "101.4lbs./46.0 kg";
            hp = 0;
            break;
        case "morpeko":
            other_forms = "";
            title = "Morpeko";
            url = "https://bulbapedia.bulbagarden.net/wiki/Morpeko";
            color = 0x735A4A;
            sprite = "https://www.pokepedia.fr/images/thumb/c/c8/Morpeko_%28Mode_Rassasi%C3%A9%29-EB.png/179px-Morpeko_%28Mode_Rassasi%C3%A9%29-EB.png";
            number = 0;
            type1 = "Electrik";
            type2 = "Dark";
            family = "Two-Sided Pokémon";
            ability1 = "Hunger Switch";
            egg1 = "???";
            rate = 0;
            height = "1'00\"/0.3 m";
            weight = "6.6lbs./3.0 kg";
            hp = 0;
            break;
        case "polteageist":
            other_forms = "";
            title = "Polteageist";
            url = "https://bulbapedia.bulbagarden.net/wiki/Polteageist";
            color = 0x6363b5;
            sprite = "https://www.pokepedia.fr/images/thumb/f/f6/Polth%C3%A9geist-EB.png/257px-Polth%C3%A9geist-EB.png";
            number = 0;
            type1 = "Ghost";
            family = "Black Tea Pokémon";
            ability1 = "Weak Armor";
            egg1 = "???";
            rate = 0;
            height = "0'08\"/0.2 m";
            weight = "0.9lbs./0.4 kg";
            hp = 0;
            break;
        case "sirfetch'd":
        case "sirfetch d":
            other_forms = "";
            title = "Sirfetch'd";
            url = "https://bulbapedia.bulbagarden.net/wiki/Sirfetch'd";
            color = 0x399CFF;
            sprite = "https://swordshield.pokemon.com/assets/img/articles/pokemon_sirfetchd.png";
            number = 0;
            type1 = "Fighting";
            family = "Wild Duck Pokémon";
            ability1 = "Steadfast";
            egg1 = "???";
            rate = 0;
            height = "2'70\"/0.8 m";
            weight = "257.9lbs./117.0 kg";
            hp = 0;
            break;
        case "galarian ponyta":
        case "galar ponyta":
            other_forms = "";
            title = "Galarian Ponyta";
            url = "https://bulbapedia.bulbagarden.net/wiki/Ponyta";
            color = 0xff73a5;
            sprite = "https://www.pokepedia.fr/images/thumb/0/0c/Ponyta_de_Galar-EB.png/260px-Ponyta_de_Galar-EB.png";
            number = 77;
            type1 = "Psychic";
            family = "Unique Horn";
            ability1 = "Run away";
            ability2 = "Pastel Veil";
            egg1 = "???";
            rate = 0;
            height = "2'70\"/0.8 m";
            weight = "25.9lbs./24.0 kg";
            hp = 0;
            break;
        default:
            return false;
    }
    if (!type) {
        if (number != 0)
            description = "\nPokédex Number: " + number + "\n";
        else
            description = "\nPokédex Number: ???\n";
        if (type2 == "NULL")
            description += "Type: " + type1 + "\n";
        else
            description += "Types: " + type1 + ", " + type2 + "\n";
        description += "Category: " + family + "\nHeight: " + height + "\nWidth: " + weight;
        if (ability1 != "NULL") {
            if (ability2 == "NULL")
                description += "\nAbility: " + ability1 + "\n";
            else {
                if (ability3 == "NULL" || ability1 != ability2)
                    description += "\nAbilities: " + ability1 + "/" + ability2 + "\n";
                else if (ability1 != ability3 && ability2 != ability3)
                    description += "\nAbilities: " + ability1 + "/" + ability2 + "/" + ability3 + "\n";
                else
                description += "\nAbility: " + ability1 + "\n";
            }
        } else
            description += "\n";
        if (egg1 != "NULL") {
            if (egg2 == "NULL")
                description += "Egg group: " + egg1 + "\n";
            else
                description += "Egg group: " + egg1 + ", " + egg2 + "\n";
        }
        if (rate != -1) {
            if (rate == 0)
                description += "Catch rate: ???\n";
            else
                description += "Catch rate: " + rate + "\n";
        }
        if (hp != 0)
            description += "Hp: " + hp + "\nAttack: " + atk + "\nDefense: " + def + "\nSpeciale Attaque: " + spa + "\nSpeciale Defense: " + spd + "\nSpeed: " + spe;
        else
            description += "Hp: ???\nAttack: ???\nDefense: ???\nSpecial Attaque: ???\nSpecial Defense: ???\nSpeed: ???";
        channel.sendMessage(other_forms, false, {
            color: color,
            title: title,
            description: description,
            image: {
                url: sprite
            },
            url: url, 
            footer : {
                text: "Informations from Bulbapedia"
            }
        });
    } else
        types.show(type1, type2, channel);
    return true;
}

function getByNumber(content, channel) {
    var shiny = false;

    if (content.search(" shiny") != -1)
        shiny = true;
    if (parseInt(content) >= 10 && parseInt(content) < 100)
        content = "0" + parseInt(content);
    else if (parseInt(content) >= 1 && parseInt(content) < 10)
        content = "00" + parseInt(content);
    request("https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_National_Pokédex_number", { json: true }, (err, res, body) => {
        var found = false;

        if (err) {
            channel.sendMessage("Can not reach the sever, please try again in 5 minutes.\nInformations about the error: " + err);
            return;
        }
        $('tr > td', body).each(function(i) {
            if ($(this).text().substring(2, 5) == content) {
                if ($(this).next()[0].children.length > 1) {
                    if (shiny)
                        module.exports.pokemon($(this).next().next()[0].children[1].children[0].data + " shiny", channel);
                    else
                        module.exports.pokemon($(this).next().next()[0].children[1].children[0].data, channel);
                    found = true;
                }
            }
        });
        if (!found)
            channel.sendMessage("No Pokémon found with this pokedex nunmber: " + parseInt(content));
    });
}

function getColor(type) {
    switch (type) {
        case "Fire":
            return 0xf75231;
        case "Water":
            return 0x399cff;
        case "Grass":
            return 0x7bce52;
        case "Electric":
            return 0xffc631;
        case "Ice":
            return 0x5acee7;
        case "Fighting":
            return 0xa55239;
        case "Poison":
            return 0xb55aa5;
        case "Ground":
            return 0xd6b55a;
        case "Fly":
            return 0x9cadf7;
        case "Psychic":
            return 0xff73a5;
        case "Bug":
            return 0xadbd21;
        case "Rock":
            return 0xbda55a;
        case "Ghost":
            return 0x6363b5;
        case "Dragon":
            return 0x8858f6;
        case "Steel":
            return 0x735a4a;
        case "Dark":
            return 0xadadc6;
        case "Fairy":
            return 0xe09ae3;
        default:
            return 0xada594;
    }
}

module.exports = {
    pokemon: function (content, channel, id, guildType)
    {
        if (parseInt(content)) {
            getByNumber(content, channel)
            return;
        }
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
        var ability1 = "NULL"
        var ability2 = "NULL";
        var ability3 = "NULL";
        var egg1 = "NULL";
        var egg2 = "NULL";
        var rate;
        var hp = 0;
        var atk = 0;
        var def = 0;
        var spa = 0;
        var spd = 0;
        var spe = 0;
        var alola = 0;
        var galar = 0;
        var is_mega = 0;
        var mega = "Méga-";
        var mega_type = "";
        var shiny = 0;
        var type = false;
        const spoiler = require('../spoiler.js');

        if (content.startsWith("type ")) {
            type = true;
            content = content.substring(5);
        }
        if (content.search(" shiny") != -1 || content.search("shiny ") != -1) {
            gif_url = "http://play.pokemonshowdown.com/sprites/xyani-shiny/";
            shiny = 1;
            if (content.search(" shiny") != -1)
                content = content.substring(0, content.length - 6);
            else if (content.search("shiny ") != -1)
                content = content.substring(6);
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
        } else if (content.search(" galarian") != -1 || content.startsWith("galarian ")) {
            if (content.startsWith("galarian "))
                content = content.substring(9);
            title = "Galarian ";
            galar = 1;
            if (content.search(" ") != -1)
                search = url.concat(content.substring(0, content.search(" ")));
            else
                search = url.concat(content);
        }
        if (specialCase(channel, content, shiny, type) && !is_mega)
            return;
        else if (specialCase(channel, content.substring(content.search(" ")), shiny, type) && !is_mega)
            return;
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
                if (alola)
                    channel.sendMessage("Can not find \"Galarian " + search.substring(40).charAt(0).toUpperCase() + search.substring(40).slice(1) + "\".");
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
                else if (galar && $(this)[0].attribs.class != null && $(this)[0].attribs.class == "image" && $(this)[0].attribs.title != null && $(this)[0].attribs.title.search("Galarian") != -1)
                    found = 1;
                else if (is_mega && $(this)[0].attribs.class != null && $(this)[0].attribs.class == "image" && $(this)[0].attribs.title != null && $(this)[0].attribs.title.search("Mega") != -1)
                    found = 1;
            });
            if (!found) {
                if (alola) {
                    channel.sendMessage("\"" + search.substring(40).charAt(0).toUpperCase() + search.substring(40).slice(1) + "\" Does not have an alolan form.");
                    return;
                } else if (galar) {
                    channel.sendMessage("\"" + search.substring(40).charAt(0).toUpperCase() + search.substring(40).slice(1) + "\" Does not have an galarian form.");
                    return;
                } else if (is_mega) {
                    channel.sendMessage("\"" + search.substring(40).charAt(0).toUpperCase() + search.substring(40).slice(1) + "\" Does not have a mega evolution.");
                    return;
                } 
            }
            $('tr > td > a', body).each(function() {
                if ($(this)[0].attribs.href != null && $(this)[0].attribs.href.search("Ability") != -1 && $(this)[0].attribs.href != "/wiki/Ability" && $(this)[0].parent.attribs.style != "display: none" && ($(this)[0].prev == null || ($(this)[0].prev.type == "text" && ($(this)[0].prev.data == " " || $(this)[0].prev.data.search("or") != -1)))) {
                    if ($(this)[0].parent.children[$(this)[0].parent.children.length - 2].type == "tag" && $(this)[0].parent.children[$(this)[0].parent.children.length - 2].name == "small") {
                        if (alola && $(this)[0].parent.children[$(this)[0].parent.children.length - 2].children[0].data.startsWith("Alolan")) {
                            if (ability1 == "NULL")
                                ability1 = $(this)[0].children[0].children[0].data;
                            else if (ability2 == "NULL") {
                                ability2 = $(this)[0].children[0].children[0].data;
                                if ($(this)[0].parent.children[$(this)[0].parent.children.length - 2].children[0].data.search("Hidden Ability") != -1)
                                    ability2 += " (hidden)";
                            } else if (ability3 == "NULL") {
                                ability3 = $(this)[0].children[0].children[0].data;
                                if ($(this)[0].parent.children[$(this)[0].parent.children.length - 2].children[0].data.search("Hidden Ability") != -1)
                                    ability3 += " (hidden)";
                            }
                        } else if (galar && $(this)[0].parent.children[$(this)[0].parent.children.length - 2].children[0].data.startsWith("Galarian")) {
                            if (ability1 == "NULL")
                                ability1 = $(this)[0].children[0].children[0].data;
                            else if (ability2 == "NULL") {
                                ability2 = $(this)[0].children[0].children[0].data;
                                if ($(this)[0].parent.children[$(this)[0].parent.children.length - 2].children[0].data.search("Hidden Ability") != -1)
                                    ability2 += " (hidden)";
                            } else if (ability3 == "NULL") {
                                ability3 = $(this)[0].children[0].children[0].data;
                                if ($(this)[0].parent.children[$(this)[0].parent.children.length - 2].children[0].data.search("Hidden Ability") != -1)
                                    ability3 += " (hidden)";
                            }
                        } else if (is_mega && $(this)[0].parent.children[$(this)[0].parent.children.length - 2].children[0].data.startsWith("Mega")) {
                            if (ability1 == "NULL")
                                ability1 = $(this)[0].children[0].children[0].data;
                            else if (ability2 == "NULL")
                                ability2 = $(this)[0].children[0].children[0].data;
                            else (ability3 == "NULL")
                                ability3 = $(this)[0].children[0].children[0].data;
                        } else if (!alola && !is_mega && !galar && !$(this)[0].parent.children[$(this)[0].parent.children.length - 2].children[0].data.startsWith("Alolan") && !$(this)[0].parent.children[$(this)[0].parent.children.length - 2].children[0].data.startsWith("Mega")) {
                            if (ability2 == "NULL")
                                ability2 = $(this)[0].children[0].children[0].data + " (hidden)";
                            else if (ability3 == "NULL")
                                ability3 = $(this)[0].children[0].children[0].data + " (hidden)";
                        }
                    } else {
                        if (ability1 == "NULL")
                            ability1 = $(this)[0].children[0].children[0].data;
                        else if (ability2 == "NULL")
                            ability2 = $(this)[0].children[0].children[0].data;
                        else if (ability3 == "NULL")
                            ability3 = $(this)[0].children[0].children[0].data;
                    }
                }
                if ($(this)[0].attribs.href != null && $(this)[0].attribs.href.search("(type)") != -1) {
                    if (alola && type1 == null) {
                        if ($(this).parent().parent().parent().parent().next()[0].type == "tag" && $(this).parent().parent().parent().parent().next()[0].name == "small"
                        && $(this).parent().parent().parent().parent().next()[0].children[0].data.search("Alolan") != -1) {
                            type1 = $(this)[0].attribs.href.substring(6, ($(this)[0].attribs.href.length - 7));
                            type2 = $(this).parent().next().children()[0].attribs.href.substring(6, ($(this).parent().next().children()[0].attribs.href.length - 7));
                        }
                    } else if (galar && type1 == null) {
                        if ($(this).parent().parent().parent().parent().next()[0].type == "tag" && $(this).parent().parent().parent().parent().next()[0].name == "small"
                        && $(this).parent().parent().parent().parent().next()[0].children[0].data.search("Galarian") != -1) {
                            type1 = $(this)[0].attribs.href.substring(6, ($(this)[0].attribs.href.length - 7));
                            type2 = $(this).parent().next().children()[0].attribs.href.substring(6, ($(this).parent().next().children()[0].attribs.href.length - 7));
                        }
                    } else if (is_mega && type1 == null) {
                        if ($(this).parent().parent().parent().parent().next() || ($(this).parent().parent().parent().parent().next()[0].type == "tag" && $(this).parent().parent().parent().parent().next()[0].name == "small"
                        && $(this).parent().parent().parent().parent().next()[0].children[0].data.search("Mega") != -1)) {
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
                } else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href.search("Egg_Group") != -1) {
                    if (egg1 == "NULL")
                        egg1 = $(this)[0].children[0].children[0].data;
                    else
                        egg2 = $(this)[0].children[0].children[0].data;
                }
            });
            $('tr > td > b > a', body).each(function() {
                if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/List_of_Pok%C3%A9mon_by_height") {
                    if (is_mega || alola || galar) {
                        height = $(this).parent().next()[0].children[1].children[4].children[1].children[0].data;
                        height = height.substring(0, height.length - 1) + "/";
                        height = height.concat($(this).parent().next()[0].children[1].children[4].children[3].children[0].data.substring(1));
                    } else {
                        height = $(this).parent().next()[0].children[1].children[0].children[1].children[0].data;
                        height = height.substring(0, height.length - 1) + "/";
                        height = height.concat($(this).parent().next()[0].children[1].children[0].children[3].children[0].data.substring(1));
                    }
                } else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Weight"){
                    if (is_mega || alola || galar) {
                        weight = $(this).parent().next()[0].children[1].children[4].children[1].children[0].data;
                        weight = weight.substring(0, weight.length - 1) + "/";
                        weight = weight.concat($(this).parent().next()[0].children[1].children[4].children[3].children[0].data.substring(1));
                    } else {
                        weight = $(this).parent().next()[0].children[1].children[0].children[1].children[0].data;
                        weight = weight.substring(0, weight.length - 1) + "/";
                        weight = weight.concat($(this).parent().next()[0].children[1].children[0].children[3].children[0].data.substring(1));
                    }
                } else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Catch_rate")
                    rate = $(this).parent().next()[0].children[1].children[0].children[1].children[0].data;
            });
            $('tr > th > div > a', body).each(function() {
                if ($(this).parent().parent().parent().parent().parent().prev()[0]) {
                    if (alola && $(this).parent().parent().parent().parent().parent().prev()[0].children[0].children[0].data.startsWith("Alolan")) {
                        if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Hit_Points")
                            hp = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Attack")
                            atk = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Defense")
                            def = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Special_Attack")
                            spa = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Special_Defense")
                            spd = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Speed")
                            spe = $(this).parent().next()[0].children[0].data;
                    } else if (galar && $(this).parent().parent().parent().parent().parent().prev()[0].children[0].children[0].data.startsWith("Galarian")) {
                        if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Hit_Points")
                            hp = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Attack")
                            atk = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Defense")
                            def = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Special_Attack")
                            spa = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Special_Defense")
                            spd = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Speed")
                            spe = $(this).parent().next()[0].children[0].data;
                    } else if (is_mega && $(this).parent().parent().parent().parent().parent().prev()[0].children[0].children[0].data.startsWith("Mega")) {
                        if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Hit_Points")
                            hp = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Attack")
                            atk = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Defense")
                            def = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Special_Attack")
                            spa = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Special_Defense")
                            spd = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Speed")
                            spe = $(this).parent().next()[0].children[0].data;
                    } if (!alola && !is_mega && (!$(this).parent().parent().parent().parent().parent().prev()[0].children[0].children[0].data || (!$(this).parent().parent().parent().parent().parent().prev()[0].children[0].children[0].data.startsWith("Mega") && !$(this).parent().parent().parent().parent().parent().prev()[0].children[0].children[0].data.startsWith("Alolan")))) {
                        if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Hit_Points")
                            hp = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Attack")
                            atk = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Defense")
                            def = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Special_Attack")
                            spa = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Special_Defense")
                            spd = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Speed")
                            spe = $(this).parent().next()[0].children[0].data;
                    }
                } else {
                    if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Hit_Points")
                            hp = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Attack")
                            atk = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Defense")
                            def = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Special_Attack")
                            spa = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Special_Defense")
                            spd = $(this).parent().next()[0].children[0].data;
                        else if ($(this)[0].attribs.href != null && $(this)[0].attribs.href == "/wiki/Statistic#Speed")
                            spe = $(this).parent().next()[0].children[0].data;
                }
            });
            type1 = type1.charAt(0).toUpperCase() + type1.slice(1);
            type2 = type2.charAt(0).toUpperCase() + type2.slice(1);
            color = getColor(type1);
            if (type1 == "Unknown")
                type1 = "???";
            if (family == "Unknown Pokémon")
                family = "???";
            if (height.charAt(1) == '?')
                height = "???\n";
            if (weight.charAt(1) == '?')
                weight = "???\n";
            if (ability1 == "Unknown")
                ability1 = "???";
            if (egg1 == "Unknown")
                egg1 = "???";
            if (rate == " Unknown\n")
                rate = "???";
            if (!type) {
                description = "Pokédex number: " + number + "\n";
                if (type2 == "Unknown")
                    description += "Type: " + type1 + "\n";
                else
                    description += "Types: " + type1 + ", " + type2 + "\n";
                description += "Category: " + family + "\nHeight: " + height + "Weight: " + weight;
                if (ability2 == "NULL")
                    description += "Ability: " + ability1 + "\n";
                else {
                    if (ability3 == "NULL" && ability1 != ability2)
                        description += "Abilities: " + ability1 + "/" + ability2 + "\n";
                    else if (ability1 != ability3 && ability2 != ability3)
                        description += "Abilities: " + ability1 + "/" + ability2 + "/" + ability3 + "\n";
                    else
                        description += "Ability: " + ability1 + "\n";
                }
                if (!is_mega) {
                    if (egg2 == "NULL")
                        description += "Egg group: " + egg1 + "\n";
                    else
                        description += "Egg groups: " + egg1 + ", " + egg2 + "\n";
                    description += "Catch rate: " + rate;
                }
                if (hp != 0)
                    description += "\nHp: " + hp + "\nAttack: " + atk + "\nDefense: " + def + "\nSpeciale Attaque: " + spa + "\nSpeciale Defense: " + spd + "\nSpeed: " + spe;
                else
                    description += "\nHp: ???\nAttack: ???\nDefense: ???\nSpecial Attaque: ???\nSpecial Defense: ???\nSpeed: ???";
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
                if (number == "???" || parseInt(number) > 809 || galar) {
                    sprite = "https://swordshield.pokemon.com/assets/img/articles/pokemon_" + title.replace(/\W/g, '') + "_2x.png";
                    if (spoiler.get(id, guildType) == "off") {
                        channel.sendMessage("This Pokémon is considered as spoiler, to enable spoilers, type \"pokedex spoiler on\".\n\n");
                        return;
                    } else
                        description = "This Pokémon is considered as spoiler, to disable spoilers, type \"pokedex spoiler off\".\n\n" + description;
                }
                sprite = sprite.toLocaleLowerCase();
                sprite = sprite.replace("galarian", "");
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
            } else
                types.show(type1, type2, channel, id);
            console.log("pokemon/english.js: successfully gathered info about " + content);
        });
    }
};