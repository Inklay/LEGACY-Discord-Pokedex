const request = require('request');
const $ = require('cheerio');

function specialCase(channel, content, shiny)
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
        default:
            return false;
    }
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
            if (ability3 == "NULL")
                description += "\nAbilities: " + ability1 + "/" + ability2 + "\n";
            else
                description += "\nAbilities: " + ability1 + "/" + ability2 + "/" + ability3 + "\n";
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
    return true;
}

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
        var is_mega = 0;
        var mega = "Méga-";
        var mega_type = "";
        var shiny = 0;

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
        }
        if (specialCase(channel, content, shiny) && !is_mega)
            return;
        else if (specialCase(channel, content.substring(content.search(" ")), shiny) && !is_mega)
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
                if ($(this)[0].attribs.href != null && $(this)[0].attribs.href.search("Ability") != -1 && $(this)[0].attribs.href != "/wiki/Ability" && $(this)[0].parent.attribs.style != "display: none") {
                    if ($(this)[0].parent.children[$(this)[0].parent.children.length - 2].type == "tag" && $(this)[0].parent.children[$(this)[0].parent.children.length - 2].name == "small") {
                        if (alola && $(this)[0].parent.children[$(this)[0].parent.children.length - 2].children[0].data.startsWith("Alolan")) {
                            if (ability1 == "NULL")
                                ability1 = $(this)[0].children[0].children[0].data;
                            else if (ability2 == "NULL")
                                ability2 = $(this)[0].children[0].children[0].data;
                            else
                                ability3 = $(this)[0].children[0].children[0].data;
                        } else if (is_mega && $(this)[0].parent.children[$(this)[0].parent.children.length - 2].children[0].data.startsWith("Mega")) {
                            if (ability1 == "NULL")
                                ability1 = $(this)[0].children[0].children[0].data;
                            else if (ability2 == "NULL")
                                ability2 = $(this)[0].children[0].children[0].data;
                            else
                                ability3 = $(this)[0].children[0].children[0].data;
                        } else if (!alola && !is_mega && !$(this)[0].parent.children[$(this)[0].parent.children.length - 2].children[0].data.startsWith("Alolan") && !$(this)[0].parent.children[$(this)[0].parent.children.length - 2].children[0].data.startsWith("Mega")) {
                            if (ability1 == "NULL")
                                ability1 = $(this)[0].children[0].children[0].data;
                            else if (ability2 == "NULL")
                                ability2 = $(this)[0].children[0].children[0].data;
                            else
                                ability3 = $(this)[0].children[0].children[0].data;
                        }
                    } else {
                        if (ability1 == "NULL")
                            ability1 = $(this)[0].children[0].children[0].data;
                        else if (ability2 == "NULL")
                            ability2 = $(this)[0].children[0].children[0].data;
                        else
                            ability3 = $(this)[0].children[0].children[0].data;
                    }
                }
            });
            $('tr > td > a', body).each(function() {
                if ($(this)[0].attribs.href != null && $(this)[0].attribs.href.search("(type)") != -1) {
                    if (alola && type1 == null) {
                        if ($(this).parent().parent().parent().parent().next()[0].type == "tag" && $(this).parent().parent().parent().parent().next()[0].name == "small"
                        && $(this).parent().parent().parent().parent().next()[0].children[0].data.search("Alolan") != -1) {
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
                    } if (!alola && !is_mega && !$(this).parent().parent().parent().parent().parent().prev()[0].children[0].children[0].data.startsWith("Mega") && !$(this).parent().parent().parent().parent().parent().prev()[0].children[0].children[0].data.startsWith("Alolan")) {
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
            description = "Pokédex number: " + number + "\n";
            if (type2 == "Unknown")
                description += "Type: " + type1.charAt(0).toUpperCase() + type1.slice(1) + "\n";
            else
                description += "Types: " + type1.charAt(0).toUpperCase() + type1.slice(1) + ", " + type2.charAt(0).toUpperCase() + type2.slice(1) + "\n";
            description += "Category: " + family + "\nHeight: " + height + "Weight: " + weight;
            if (ability2 == "NULL")
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
            description += "\nHp: " + hp + "\nAttack: " + atk + "\nDefense: " + def + "\nSpecial Attack: " + spa + "\nSpecial Defense : " + spd + "\nSpeed : " + spe;
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