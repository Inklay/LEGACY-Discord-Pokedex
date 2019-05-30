const request = require('request');
const $ = require('cheerio');

function french_special_cases(channel, typed, shiny)
{
    var color;
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
    switch (typed) {
        case "morpheo":
        case "morphéo":
            other_forms = "Autres formes: morphéo soleil, morphéo pluie, morphéo neige"
            title = "Morphéo";
            url = "https://pokepedia.fr/Morphéo";
            color = 0xADA594;
            sprite = gif_url.concat("castform.gif");
            name = "Castform";
            number = 351;
            type1 = "Normal";
            family = "Pokémon Climat";
            ability1 = "Météo";
            egg1 = "Féerique";
            egg2 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,8 kg, soit 1,8 livres";
            hp = 70;
            atk = 70;
            def = 70;
            spa = 70;
            spd = 70;
            spe = 70;
            break;
        case "morpheo soleil":
        case "morphéo soleil":
            other_forms = "Autres formes: morphéo, morphéo pluie, morphéo neige"
            title = "Morphéo Forme Soleil";
            url = "https://pokepedia.fr/Morphéo";
            color = 0xF75231;
            sprite = gif_url.concat("castform-sunny.gif");
            name = "Castform";
            number = 351;
            type1 = "Feu";
            family = "Pokémon Climat";
            ability1 = "Météo";
            egg1 = "Féerique";
            egg2 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,8 kg, soit 1,8 livres";
            hp = 70;
            atk = 70;
            def = 70;
            spa = 70;
            spd = 70;
            spe = 70;
            break;
        case "morpheo pluie":
        case "morphéo pluie":
            other_forms = "Autres formes: morphéo, morphéo soleil, morphéo neige"
            title = "Morphéo Forme Pluie";
            url = "https://pokepedia.fr/Morphéo";
            color = 0x399CFF;
            sprite = gif_url.concat("castform-rainy.gif");
            name = "Castform";
            number = 351;
            type1 = "Eau";
            family = "Pokémon Climat";
            ability1 = "Météo";
            egg1 = "Féerique";
            egg2 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,8 kg, soit 1,8 livres";
            hp = 70;
            atk = 70;
            def = 70;
            spa = 70;
            spd = 70;
            spe = 70;
            break;
        case "morpheo neige":
        case "morphéo neige":
            other_forms = "Autres formes: morphéo, morphéo soleil, morphéo pluie"
            title = "Morphéo Forme Neige";
            url = "https://pokepedia.fr/Morphéo";
            color = 0x5ACEE7;
            sprite = gif_url.concat("castform-snowy.gif");
            name = "Castform";
            number = 351;
            type1 = "Glace";
            family = "Pokémon Climat";
            ability1 = "Météo";
            egg1 = "Féerique";
            egg2 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,8 kg, soit 1,8 livres";
            hp = 70;
            atk = 70;
            def = 70;
            spa = 70;
            spd = 70;
            spe = 70;
            break;
        case "deoxys":
        case "déoxys":
            other_forms = "Autres formes: deoxys attaque, deoxys défense, deoxys vitesse"
            title = "Deoxys";
            url = "https://pokepedia.fr/Deoxys";
            color = 0xFF73A5;
            sprite = gif_url.concat("deoxys.gif");
            name = "Deoxys";
            number = 351;
            type1 = "Psy";
            family = "Pokémon ADN";
            ability1 = "Pression";
            egg1 = "Inconnu";
            rate = 3;
            height = "1,7 m, soit 5,6 pieds";
            weight = "60,8 kg, soit 134 livres";
            hp = 50;
            atk = 150;
            def = 50;
            spa = 150;
            spd = 50;
            spe = 150;
            break;
        case "deoxys attaque":
        case "déoxys attaque":
            other_forms = "Autres formes: deoxys, deoxys défense, deoxys vitesse"
            title = "Deoxys Forme Attaque";
            url = "https://pokepedia.fr/Deoxys";
            color = 0xFF73A5;
            sprite = gif_url.concat("deoxys-attack.gif");
            name = "Deoxys";
            number = 351;
            type1 = "Psy";
            family = "Pokémon ADN";
            ability1 = "Pression";
            egg1 = "Inconnu";
            rate = 3;
            height = "1,7 m, soit 5,6 pieds";
            weight = "60,8 kg, soit 134 livres";
            hp = 50;
            atk = 180;
            def = 20;
            spa = 180;
            spd = 20;
            spe = 150;
            break;
        case "deoxys défense":
        case "déoxys défense":
            other_forms = "Autres formes: deoxys, deoxys attaque, deoxys vitesse"
            title = "Deoxys Forme Défense";
            url = "https://pokepedia.fr/Deoxys";
            color = 0xFF73A5;
            sprite = gif_url.concat("deoxys-defense.gif");
            name = "Deoxys";
            number = 351;
            type1 = "Psy";
            family = "Pokémon ADN";
            ability1 = "Pression";
            egg1 = "Inconnu";
            rate = 3;
            height = "1,7 m, soit 5,6 pieds";
            weight = "60,8 kg, soit 134 livres";
            hp = 50;
            atk = 70;
            def = 160;
            spa = 70;
            spd = 160;
            spe = 90;
            break;
        case "deoxys vitesse":
        case "déoxys vitesse":
            other_forms = "Autres formes: deoxys, deoxys attaque, deoxys défense"
            title = "Deoxys Forme Vitesse";
            url = "https://pokepedia.fr/Deoxys";
            color = 0xFF73A5;
            sprite = gif_url.concat("deoxys-speed.gif");
            name = "Deoxys";
            number = 351;
            type1 = "Psy";
            family = "Pokémon ADN";
            ability1 = "Pression";
            egg1 = "Inconnu";
            rate = 3;
            height = "1,7 m, soit 5,6 pieds";
            weight = "60,8 kg, soit 134 livres";
            hp = 50;
            atk = 95;
            def = 90;
            spa = 95;
            spd = 90;
            spe = 180;
            break;
        case "cheniselle plante":
        case "cheniselle":
            other_forms = "Autres formes: cheniselle sable, cheniselle déchet"
            title = "Cheniselle";
            url = "https://pokepedia.fr/Cheniselle";
            color = 0xADBD21;
            sprite = gif_url.concat("wormadam.gif");
            name = "Wormadam";
            number = 413;
            type1 = "Insecte";
            type2 = "plante";
            family = "Pokémon Ver Caché";
            ability1 = "Anticipation";
            ability2 = "Envelocape"
            egg1 = "Insectoïde";
            rate = 45;
            height = "0,5 m, soit 1,6 pieds";
            weight = "6,5 kg, soit 14,3 livres";
            hp = 60;
            atk = 59;
            def = 85;
            spa = 79;
            spd = 105;
            spe = 36;
            break;
        case "cheniselle sable":
            other_forms = "Autres formes: cheniselle, cheniselle déchet"
            title = "Cheniselle Cape Sable";
            url = "https://pokepedia.fr/Cheniselle";
            color = 0xADBD21;
            sprite = gif_url.concat("wormadam-sandy.gif");
            name = "Wormadam";
            number = 413;
            type1 = "Insecte";
            type2 = "Sol";
            family = "Pokémon Ver Caché";
            ability1 = "Anticipation";
            ability2 = "Envelocape"
            egg1 = "Insectoïde";
            rate = 45;
            height = "0,5 m, soit 1,6 pieds";
            weight = "6,5 kg, soit 14,3 livres";
            hp = 60;
            atk = 79;
            def = 105;
            spa = 59;
            spd = 85;
            spe = 36;
            break;
        case "cheniselle déchet":
            other_forms = "Autres formes: cheniselle, cheniselle sable"
            title = "Cheniselle Cape Déchet";
            url = "https://pokepedia.fr/Cheniselle";
            color = 0xADBD21;
            sprite = gif_url.concat("wormadam-trash.gif");
            name = "Wormadam";
            number = 413;
            type1 = "Insecte";
            type2 = "Acier";
            family = "Pokémon Ver Caché";
            ability1 = "Anticipation";
            ability2 = "Envelocape"
            egg1 = "Insectoïde";
            rate = 45;
            height = "0,5 m, soit 1,6 pieds";
            weight = "6,5 kg, soit 14,3 livres";
            hp = 60;
            atk = 69;
            def = 95;
            spa = 69;
            spd = 95;
            spe = 36;
            break;
        case "motisma":
            other_forms = "Autres formes: motisma chaleur, motisma hélice, motisma froid, motisma lavage, motisma tonte"
            title = "Motisma";
            url = "https://pokepedia.fr/Motisma";
            color = 0xFFC631;
            sprite = gif_url.concat("rotom.gif");
            name = "Rotom";
            number = 479;
            type1 = "Électrik";
            type2 = "Spectre";
            family = "Pokémon Plasma";
            ability1 = "Lévitation";
            egg1 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,3 kg, soit 0,7 livre";
            hp = 50;
            atk = 50;
            def = 77;
            spa = 95;
            spd = 77;
            spe = 91;
            break;
        case "motisma chaleur":
            other_forms = "Autres formes: motisma, motisma hélice, motisma froid, motisma lavage, motisma tonte"
            title = "Motisma Forme Chaleur";
            url = "https://pokepedia.fr/Motisma";
            color = 0xFFC631;
            sprite = gif_url.concat("rotom-heat.gif");
            name = "Rotom";
            number = 479;
            type1 = "Électrik";
            type2 = "Feu";
            family = "Pokémon Plasma";
            ability1 = "Lévitation";
            egg1 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,3 kg, soit 0,7 livre";
            hp = 50;
            atk = 65;
            def = 107;
            spa = 105;
            spd = 107;
            spe = 86;
            break;
        case "motisma hélice":
            other_forms = "Autres formes: motisma, motisma chaleur, motisma froid, motisma lavage, motisma tonte"
            title = "Motisma Forme Hélice";
            url = "https://pokepedia.fr/Motisma";
            color = 0xFFC631;
            sprite = gif_url.concat("rotom-fan.gif");
            name = "Rotom";
            number = 479;
            type1 = "Électrik";
            type2 = "Vol";
            family = "Pokémon Plasma";
            ability1 = "Lévitation";
            egg1 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,3 kg, soit 0,7 livre";
            hp = 50;
            atk = 65;
            def = 107;
            spa = 105;
            spd = 107;
            spe = 86;
            break;
        case "motisma froid":
            other_forms = "Autres formes: motisma, motisma chaleur, motisma hélice, motisma lavage, motisma tonte"
            title = "Motisma Forme Froid";
            url = "https://pokepedia.fr/Motisma";
            color = 0xFFC631;
            sprite = gif_url.concat("rotom-frost.gif");
            name = "Rotom";
            number = 479;
            type1 = "Électrik";
            type2 = "Glace";
            family = "Pokémon Plasma";
            ability1 = "Lévitation";
            egg1 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,3 kg, soit 0,7 livre";
            hp = 50;
            atk = 65;
            def = 107;
            spa = 105;
            spd = 107;
            spe = 86;
            break;
        case "motisma lavage":
            other_forms = "Autres formes: motisma, motisma chaleur, motisma hélice, motisma froid, motisma tonte"
            title = "Motisma Forme Lavage";
            url = "https://pokepedia.fr/Motisma";
            color = 0xFFC631;
            sprite = gif_url.concat("rotom-wash.gif");
            name = "Rotom";
            number = 479;
            type1 = "Électrik";
            type2 = "Eau";
            family = "Pokémon Plasma";
            ability1 = "Lévitation";
            egg1 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,3 kg, soit 0,7 livre";
            hp = 50;
            atk = 65;
            def = 107;
            spa = 105;
            spd = 107;
            spe = 86;
            break;
        case "motisma tonte":
            other_forms = "Autres formes: motisma, motisma chaleur, motisma hélice, motisma froid, motisma lavage"
            title = "Motisma Forme Tonte";
            url = "https://pokepedia.fr/Motisma";
            color = 0xFFC631;
            sprite = gif_url.concat("rotom-mow.gif");
            name = "Rotom";
            number = 479;
            type1 = "Électrik";
            type2 = "Plante";
            family = "Pokémon Plasma";
            ability1 = "Lévitation";
            egg1 = "Amorphe";
            rate = 45;
            height = "0,3 m, soit 1 pied";
            weight = "0,3 kg, soit 0,7 livre";
            hp = 50;
            atk = 65;
            def = 107;
            spa = 105;
            spd = 107;
            spe = 86;
            break;
        case "giratina alternative":
        case "giratina":
            other_forms = "Autres formes: giratina originelle"
            title = "Giratina";
            url = "https://pokepedia.fr/Giratina";
            color = 0x6363B5;
            sprite = gif_url.concat("giratina.gif");
            name = "Giratina";
            number = 487;
            type1 = "Spectre";
            type2 = "Dragon";
            family = "Pokémon Renégat";
            ability1 = "Pression";
            ability2 = "Télépathe"
            egg1 = "Inconnu";
            rate = 3;
            height = "4,5 m, soit 14,8 pieds";
            weight = "750,0 kg, soit 1 653,5 livres";
            hp = 150;
            atk = 100;
            def = 120;
            spa = 100;
            spd = 120;
            spe = 90;
            break;
        case "giratina originelle":
            other_forms = "Autres formes: giratina"
            title = "Giratina Forme Originelle";
            url = "https://pokepedia.fr/Giratina";
            color = 0x6363B5;
            sprite = gif_url.concat("giratina-origin.gif");
            name = "Giratina";
            number = 487;
            type1 = "Spectre";
            type2 = "Dragon";
            family = "Pokémon Renégat";
            ability1 = "Lévitation";
            ability2 = "Télépathe"
            egg1 = "Inconnu";
            rate = 3;
            height = "6,9 m, soit 22,6 pieds";
            weight = "650,0 kg, soit 1 433 livres";
            hp = 150;
            atk = 120;
            def = 100;
            spa = 120;
            spd = 100;
            spe = 90;
            break;
        case "shaymin":
            other_forms = "Autres formes: shaymin céleste"
            title = "Shaymin";
            url = "https://pokepedia.fr/Shaymin";
            color = 0x7BCE52;
            sprite = gif_url.concat("shaymin.gif");
            name = "Shaymin";
            number = 487;
            type1 = "Plante";
            family = "Pokémon Gratitude";
            ability1 = "Médic Nature";
            egg1 = "Inconnu";
            rate = 45;
            height = "0,2 m, soit 0,7 pied";
            weight = "2,1 kg, soit 4,6 livres";
            hp = 100;
            atk = 100;
            def = 100;
            spa = 100;
            spd = 100;
            spe = 100;
            break;
        case "shaymin céleste":
            other_forms = "Autres formes: shaymin"
            title = "Shaymin Forme Céleste";
            url = "https://pokepedia.fr/Shaymin";
            color = 0x7BCE52;
            sprite = gif_url.concat("shaymin-sky.gif");
            name = "Shaymin";
            number = 487;
            type1 = "Plante";
            type2 = "Vol"
            family = "Pokémon Gratitude";
            ability1 = "Sérénité";
            egg1 = "Inconnu";
            rate = 45;
            height = "0,4 m, soit 1,3 pieds";
            weight = "5,2 kg, soit 11,5 livres";
            hp = 100;
            atk = 103;
            def = 75;
            spa = 120;
            spd = 75;
            spe = 127;
            break;
        case "darumacho":
            other_forms = "Autres formes: darumacho transe"
            title = "Darumacho";
            url = "https://pokepedia.fr/Darumacho";
            color = 0xF75231;
            sprite = gif_url.concat("darmanitan.gif");
            name = "Darmanitan";
            number = 555;
            type1 = "Feu";
            family = "Pokémon Enflammé";
            ability1 = "Sans Limite";
            ability2 = "Mode Transe"
            egg1 = "Terrestre";
            rate = 60;
            height = "1,3 m, soit 4,3 pieds";
            weight = "92,9 kg, soit 204,8 livres";
            hp = 105;
            atk = 140;
            def = 55;
            spa = 30;
            spd = 55;
            spe = 95;
            break;
        case "darumacho transe":
            other_forms = "Autres formes: darumacho"
            title = "Darumacho Mode Transe";
            url = "https://pokepedia.fr/Darumacho";
            color = 0xF75231;
            sprite = gif_url.concat("darmanitan-zen.gif");
            name = "Darmanitan";
            number = 555;
            type1 = "Feu";
            type2 = "Psy";
            family = "Pokémon Enflammé";
            ability1 = "Sans Limite";
            ability2 = "Mode Transe"
            egg1 = "Terrestre";
            rate = 60;
            height = "1,3 m, soit 4,3 pieds";
            weight = "92,9 kg, soit 204,8 livres";
            hp = 105;
            atk = 30;
            def = 105;
            spa = 140;
            spd = 105;
            spe = 55;
            break;
        case "boréas":
            other_forms = "Autres formes: boréas totémique"
            title = "Boréas";
            url = "https://pokepedia.fr/Boréas";
            color = 0x9CADF7;
            sprite = gif_url.concat("tornadus.gif");
            name = "Tornadus";
            number = 641;
            type1 = "Vol";
            family = "Pokémon Tornade";
            ability1 = "Farceur";
            ability2 = "Acharné"
            egg1 = "Inconnu";
            rate = 3;
            height = "1,5 m, soit 4,9 pieds";
            weight = "63,0 kg, soit 138,9 livres";
            hp = 79;
            atk = 115;
            def = 70;
            spa = 125;
            spd = 80;
            spe = 111;
            break;
        case "boréas totémique":
            other_forms = "Autres formes: boréas"
            title = "Boréas Totémique";
            url = "https://pokepedia.fr/Boréas";
            color = 0x9CADF7;
            sprite = gif_url.concat("tornadus-therian.gif");
            name = "Tornadus";
            number = 641;
            type1 = "Vol";
            family = "Pokémon Tornade";
            ability1 = "Régé-Force";
            ability2 = "Acharné"
            egg1 = "Inconnu";
            rate = 3;
            height = "1,4 m, soit 4,6 pieds";
            weight = "63,0 kg, soit 138,9 livres";
            hp = 79;
            atk = 100;
            def = 80;
            spa = 110;
            spd = 90;
            spe = 121;
            break;
        case "fulguris":
            other_forms = "Autres formes: fulguris totémique"
            title = "Fulguris";
            url = "https://pokepedia.fr/Fulguris";
            color = 0xFFC631;
            sprite = gif_url.concat("thundurus.gif");
            name = "Thundurus";
            number = 642;
            type1 = "Électrik";
            type2 = "Vol"
            family = "Pokémon Foudroyeur";
            ability1 = "Farceur";
            ability2 = "Acharné"
            egg1 = "Inconnu";
            rate = 3;
            height = "1,5 m, soit 4,9 pieds";
            weight = "61,0 kg, soit 134,5 livres";
            hp = 79;
            atk = 115;
            def = 70;
            spa = 125;
            spd = 80;
            spe = 111;
            break;
        case "fulguris totémique":
            other_forms = "Autres formes: fulguris"
            title = "Fulguris Totémique";
            url = "https://pokepedia.fr/Fulguris";
            color = 0x9CADF7;
            sprite = gif_url.concat("thundurus-therian.gif");
            name = "Thundurus";
            number = 642;
            type1 = "Électrik"
            type2 = "Vol";
            family = "Pokémon Foudroyeur";
            ability1 = "Absorb Volt";
            ability2 = "Acharné"
            egg1 = "Inconnu";
            rate = 3;
            height = "3,0 m, soit 9,8 pieds";
            weight = "61,0 kg, soit 134,5 livres";
            hp = 79;
            atk = 105;
            def = 70;
            spa = 145;
            spd = 80;
            spe = 101;
            break;
        case "demeteros":
        case "démétéros":
            other_forms = "Autres formes: démétéros totémique"
            title = "Démétéros";
            url = "https://pokepedia.fr/Démétéros";
            color = 0xD6B55A;
            sprite = gif_url.concat("landorus.gif");
            name = "Landorus";
            number = 645;
            type1 = "Sol";
            type2 = "Vol"
            family = "Pokémon Fertilité";
            ability1 = "Force Sable";
            ability2 = "Sans Limite"
            egg1 = "Inconnu";
            rate = 3;
            height = "1,5 m, soit 4,9 pieds";
            weight = "68,0 kg, soit 149,9 livres";
            hp = 89;
            atk = 125;
            def = 90;
            spa = 115;
            spd = 80;
            spe = 101;
            break;
        case "demeteros totémique":
        case "démétéros totémique":
            other_forms = "Autres formes: démétéros"
            title = "Démétéros Totémique";
            url = "https://pokepedia.fr/Démétéros";
            color = 0xD6B55A;
            sprite = gif_url.concat("landorus-therian.gif");
            name = "Landorus";
            number = 645;
            type1 = "Sol"
            type2 = "Vol";
            family = "Pokémon Fertilité";
            ability1 = "Intimidation";
            ability2 = "Sans Limite"
            egg1 = "Inconnu";
            rate = 3;
            height = "1,3 m, soit 4,3 pieds";
            weight = "61,0 kg, soit 134,5 livres";
            hp = 89;
            atk = 145;
            def = 90;
            spa = 105;
            spd = 80;
            spe = 91;
            break;
        case "kyurem":
            other_forms = "Autres formes: kyurem blanc, kyurem noir"
            title = "Kyurem";
            url = "https://pokepedia.fr/Kyurem";
            color = 0x8858F6;
            sprite = gif_url.concat("kyurem.gif");
            name = "Kyurem";
            number = 646;
            type1 = "Dragon"
            type2 = "Glace";
            family = "Pokémon Frontière";
            ability1 = "Pression";
            egg1 = "Inconnu";
            rate = 3;
            height = "3,0 m, soit 9,8 pieds";
            weight = "325 kg, soit 716,5 livres";
            hp = 125;
            atk = 130;
            def = 90;
            spa = 130;
            spd = 90;
            spe = 95;
            break;
        case "kyurem blanc":
            other_forms = "Autres formes: kyurem, kyurem noir"
            title = "Kyurem Blanc";
            url = "https://pokepedia.fr/Kyurem_Blanc";
            color = 0x8858F6;
            sprite = gif_url.concat("kyurem-white.gif");
            name = "Kyurem";
            number = 646;
            type1 = "Dragon"
            type2 = "Glace";
            family = "Pokémon Frontière";
            ability1 = "TurboBrasier";
            egg1 = "Inconnu";
            rate = 3;
            height = "3,6 m, soit 11,8 pieds";
            weight = "325 kg, soit 716,5 livres";
            hp = 125;
            atk = 170;
            def = 100;
            spa = 120;
            spd = 90;
            spe = 95;
            break;
        case "kyurem noir":
            other_forms = "Autres formes: kyurem, kyurem blanc"
            title = "Kyurem Noir";
            url = "https://pokepedia.fr/Kyurem_Noir";
            color = 0x8858F6;
            sprite = gif_url.concat("kyurem-white.gif");
            name = "Kyurem";
            number = 646;
            type1 = "Dragon"
            type2 = "Glace";
            family = "Pokémon Frontière";
            ability1 = "Téra-Voltage";
            egg1 = "Inconnu";
            rate = 3;
            height = "3,3 m, soit 10,8 pieds";
            weight = "325 kg, soit 716,5 livres";
            hp = 125;
            atk = 120;
            def = 90;
            spa = 170;
            spd = 100;
            spe = 95;
            break;
        case "meloetta":
            other_forms = "Autres formes: meloetta danse"
            title = "Meloetta";
            url = "https://pokepedia.fr/Meloetta";
            color = 0xADA594;
            sprite = gif_url.concat("meloetta.gif");
            name = "Meloetta";
            number = 648;
            type1 = "Normal"
            type2 = "Psy";
            family = "Pokémon Mélodie";
            ability1 = "Sérénité";
            egg1 = "Inconnu";
            rate = 3;
            height = "0,6 m, soit 2 pieds";
            weight = "6,5 kg, soit 14,3 livres";
            hp = 100;
            atk = 77;
            def = 77;
            spa = 128;
            spd = 128;
            spe = 90;
            break;
        case "meloetta danse":
            other_forms = "Autres formes: meloetta"
            title = "Meloetta Danse";
            url = "https://pokepedia.fr/Meloetta";
            color = 0xADA594;
            sprite = gif_url.concat("meloetta-pirouette.gif");
            name = "Meloetta";
            number = 648;
            type1 = "Normal"
            type2 = "Combat";
            family = "Pokémon Mélodie";
            ability1 = "Sérénité";
            egg1 = "Inconnu";
            rate = 3;
            height = "0,6 m, soit 2 pieds";
            weight = "6,5 kg, soit 14,3 livres";
            hp = 100;
            atk = 128;
            def = 90;
            spa = 77;
            spd = 77;
            spe = 128;
            break;
        default:
            return 0;
    }
    description = "Nom anglais: " + name + "\nNuméro du pokédex: " + number + "\n";
    if (type2 == "NULL")
        description += "Type: " + type1 + "\n";
    else
        description += "Types: " + type1 + ", " + type2 + "\n";
    description += "Famille: " + family + "\nTaille: " + height + "\nPoids: " + weight;
    if (ability2 == "NULL")
        description += "\nTalent: " + ability1 + "\n";
    else {
        if (ability3 == "NULL")
            description += "\nTalents: " + ability1 + "/" + ability2 + "\n";
        else
            description += "\nTalents: " + ability1 + "/" + ability2 + "/" + ability3 + "\n";
    }
    if (egg2 == "NULL")
        description += "Groupe œuf: " + egg1 + "\n";
    else
        description += "Groupe œuf: " + egg1 + ", " + egg2 + "\n";
    description += "Taux de capture: " + rate;
    description += "\nPv: " + hp + "\nAttaque: " + atk + "\nDéfense: " + def + "\nAttaque Spéciale: " + spa + "\nDéfense Spéciale: " + spd + "\nVitesse: " + spe;
    channel.sendMessage(other_forms, false, {
        color: color,
        title: title,
        description: description,
        image: {
            url: sprite
        },
        url: url, 
        footer : {
            text: "Informations de Poképedia"
        }
    });
    return 1;
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
        var is_mega = 0;
        var mega = "Méga-";
        var mega_type = "";
        var shiny = 0;

        if (typed.search(" shiny") != -1) {
            gif_url = "http://play.pokemonshowdown.com/sprites/xyani-shiny/";
            shiny = 1;
        }
        if (typed.search(" méga") != -1 || typed.search(" mega") != -1 || typed.startsWith("mega ") || typed.startsWith("méga ")) {
            is_mega = 1;
            if (typed.startsWith("mega ") || typed.startsWith("méga "))
                typed = typed.substring(5);
            typed = typed.charAt(0).toUpperCase() + typed.slice(1);
            search = url.concat(mega);
            search = search.concat(typed);
            if (typed.search(" x") != -1) {
                search = search.substring(0, search.search(" "));
                search = search.concat("_X");
                mega_type = " X ";
            } else if (typed.search(" y") != -1) {
                search = search.substring(0, search.search(" "));
                search = search.concat("_Y");
                mega_type = " Y ";
            }
        }
        if (typed.search(" ") != -1 && !is_mega)
            search = url.concat(typed.substring(0, typed.search(" ")));
        else if (!is_mega)
            search = url.concat(typed);
        if (typed.search(" alola") != -1 || typed.search(" d'alola") != -1) {
            alola = 1;
            search = search.concat("_d%27Alola");
        }
        if (french_special_cases(channel, content.substring(8), shiny))
            return;
        else if (french_special_cases(channel, content.substring(8, 8 + content.substring(8).search(" ")), shiny))
            return;
        request(search, { json: true }, (err, res, body) => {
            if (err) {
                channel.sendMessage("Impossible de communiquer avec le serveur, merci de réessayer dans 5 minutes.\nInformations sur l'erreur: " + err);
                return;
            }
            $('.toctext', body).each(function(i) {
                if ($(this).text() == "À propos du Pokémon" && !i && !is_mega)
                    found = 1;
                else if ($(this).text() == "À propos du Méga-Pokémon" && !i && is_mega)
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
                if ($(this)[0].attribs.href == "/%C5%92uf" && $(this).parent().next()[0].attribs.colspan == "3" && !is_mega) {
                    egg1 = $(this).parent().next()[0].children[0].children[0].data;
                    if ($(this).parent().next()[0].children.length == 4)
                        egg2 = $(this).parent().next()[0].children[2].children[0].data;
                }
                if ($(this)[0].attribs.href == "/Capture_des_Pok%C3%A9mon" && $(this).parent().next()[0].attribs.colspan == "3" && !is_mega)
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
                description += "Type: " + type1.charAt(0).toUpperCase() + type1.slice(1) + "\n";
            else
                description += "Types: " + type1.charAt(0).toUpperCase() + type1.slice(1) + ", " + type2.charAt(0).toUpperCase() + type2.slice(1) + "\n";
            description += "Famille: " + family + "Taille: " + height + "Poids: " + weight;
            if (ability2 == "NULL")
                description += "Talent: " + ability1 + "\n";
            else {
                if (ability3 == "NULL")
                    description += "Talents: " + ability1 + "/" + ability2 + "\n";
                else
                    description += "Talents: " + ability1 + "/" + ability2 + "/" + ability3 + "\n";
            }
            if (!is_mega) {
                if (egg2 == "NULL")
                    description += "Groupe œuf: " + egg1 + "\n";
                else
                    description += "Groupe œuf: " + egg1 + ", " + egg2 + "\n";
                description += "Taux de capture: " + rate;
            }
            description += "Pv: " + hp + "Attaque: " + atk + "Défense: " + def + "Attaque Spéciale: " + spa + "Défense Spéciale: " + spd + "Vitesse: " + spe;
            if (alola) {
                sprite = gif_url.concat(name.slice(7, name.length - 1));
                sprite = sprite.concat("-alola.gif");
            } else if (!is_mega) {
                sprite = gif_url.concat(name.slice(0, name.length - 1));
                sprite = sprite.concat(".gif");
            } else if (is_mega) {
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
                    text: "Informations de Poképedia"
                }
            });
        });
    }
};