const request = require('request');
const $ = require('cheerio');
const types = require('../type/french.js');

function specialCase(channel, content, shiny, type)
{
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
        case "morpheo":
        case "morphéo":
            other_forms = "Autres formes: morphéo soleil, morphéo pluie, morphéo neige"
            title = "Morphéo";
            url = "https://pokepedia.fr/Morphéo";
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
        case "amphinobi":
            other_forms = "Autres formes: amphinobi sacha"
            title = "Amphinobi";
            url = "https://pokepedia.fr/Amphinobi";
            sprite = gif_url.concat("greninja.gif");
            name = "Greninja";
            number = 658;
            type1 = "Eau"
            type2 = "Ténèbres";
            family = "Pokémon Ninja";
            ability1 = "Torrent";
            ability2 = "Protéen";
            ability3 = "Synergie";
            egg1 = "Aquatique 1";
            rate = 45;
            height = "1,5 m, soit 4,9 pieds";
            weight = "40,0 kg, soit 88,2 livres";
            hp = 72;
            atk = 95;
            def = 67;
            spa = 103;
            spd = 71;
            spe = 122;
            break;
        case "amphinobi sacha":
            other_forms = "Autres formes: amphinobi"
            title = "Amphinobi";
            url = "https://pokepedia.fr/Amphinobi";
            sprite = gif_url.concat("greninja-ash.gif");
            name = "Ash Greninja";
            number = 658;
            type1 = "Eau"
            type2 = "Ténèbres";
            family = "Pokémon Ninja";
            ability1 = "Torrent";
            ability2 = "Protéen";
            ability3 = "Synergie";
            egg1 = "Aquatique 1";
            rate = 45;
            height = "1,5 m, soit 4,9 pieds";
            weight = "40,0 kg, soit 88,2 livres";
            hp = 72;
            atk = 145;
            def = 67;
            spa = 153;
            spd = 71;
            spe = 132;
            break;
        case "flabébé":
        case "flabebe":
            other_forms = ""
            title = "Flabébé";
            url = "https://pokepedia.fr/Flabébé";
            sprite = gif_url.concat("flabebe.gif");
            name = "Flabébé";
            number = 669;
            type1 = "Fée"
            family = "Uniflore";
            ability1 = "Flora-Voile";
            ability2 = "Symbiose"
            egg1 = "Féerique";
            rate = 255;
            height = "0,1 m, soit 0,3 pied";
            weight = "0,1 kg, soit 0,2 livre";
            hp = 44;
            atk = 38;
            def = 39;
            spa = 64;
            spd = 76;
            spe = 42;
            break;
        case "exagide":
            other_forms = "Autres formes: exagide assault"
            title = "Exagide";
            url = "https://pokepedia.fr/Exagide";
            sprite = gif_url.concat("aegislash.gif");
            name = "Aegislash";
            number = 681;
            type1 = "Acier"
            type2 = "Spectre"
            family = "Noble Lame";
            ability1 = "Déclic Tactique";
            egg1 = "Minéral";
            rate = 222;
            height = "1,7 m, soit 5,6 pieds";
            weight = "53,0 kg, soit 116,8 livres";
            hp = 60;
            atk = 50;
            def = 150;
            spa = 50;
            spd = 150;
            spe = 60;
            break;
        case "exagide assault":
            other_forms = "Autres formes: exagide"
            title = "Exagide";
            url = "https://pokepedia.fr/Exagide";
            sprite = gif_url.concat("aegislash-blade.gif");
            name = "Aegislash";
            number = 681;
            type1 = "Acier"
            type2 = "Spectre"
            family = "Noble Lame";
            ability1 = "Déclic Tactique";
            egg1 = "Minéral";
            rate = 222;
            height = "1,7 m, soit 5,6 pieds";
            weight = "53,0 kg, soit 116,8 livres";
            hp = 60;
            atk = 150;
            def = 50;
            spa = 150;
            spd = 50;
            spe = 60;
            break;
        case "pitrouille normale":
        case "pitrouille":
            other_forms = "Autres formes: pitrouille mini, pitrouille maxi, pitrouille ultra";
            title = "Pitrouille";
            url = "https://pokepedia.fr/Pitrouille";
            sprite = gif_url.concat("pumpkaboo.gif");
            name = "Pumpkaboo";
            number = 710;
            type1 = "Spectre"
            type2 = "Plante"
            family = "Citrouille";
            ability1 = "Ramassage";
            ability2 = "Fouille";
            ability3 = "Insomnia";
            egg1 = "Amorphe";
            rate = 190;
            height = "0,4 m, soit 1,3 pieds";
            weight = "5,0 kg, soit 11 livres";
            hp = 44;
            atk = 66;
            def = 70;
            spa = 44;
            spd = 55;
            spe = 56;
            break;
        case "pitrouille mini":
            other_forms = "Autres formes: pitrouille, pitrouille maxi, pitrouille ultra";
            title = "Pitrouille Mini";
            url = "https://pokepedia.fr/Pitrouille";
            sprite = gif_url.concat("pumpkaboo-small.gif");
            name = "Pumpkaboo";
            number = 710;
            type1 = "Spectre"
            type2 = "Plante"
            family = "Citrouille";
            ability1 = "Ramassage";
            ability2 = "Fouille";
            ability3 = "Insomnia";
            egg1 = "Amorphe";
            rate = 190;
            height = "0,3 m, soit 1 pied";
            weight = "3,5 kg, soit 7,7 livres";
            hp = 49;
            atk = 66;
            def = 70;
            spa = 44;
            spd = 55;
            spe = 51;
            break;
        case "pitrouille maxi":
            other_forms = "Autres formes: pitrouille, pitrouille mini, pitrouille ultra";
            title = "Pitrouille Maxi";
            url = "https://pokepedia.fr/Pitrouille";
            sprite = gif_url.concat("pumpkaboo-large.gif");
            name = "Pumpkaboo";
            number = 710;
            type1 = "Spectre"
            type2 = "Plante"
            family = "Citrouille";
            ability1 = "Ramassage";
            ability2 = "Fouille";
            ability3 = "Insomnia";
            egg1 = "Amorphe";
            rate = 190;
            height = "0,5 m, soit 1,6 pieds";
            weight = "7,5 kg, soit 16,5 livres";
            hp = 54;
            atk = 66;
            def = 70;
            spa = 44;
            spd = 55;
            spe = 46;
            break;
        case "pitrouille ultra":
            other_forms = "Autres formes: pitrouille, pitrouille mini, pitrouille maxi";
            title = "Pitrouille Maxi";
            url = "https://pokepedia.fr/Pitrouille";
            sprite = gif_url.concat("pumpkaboo-super.gif");
            name = "Pumpkaboo";
            number = 710;
            type1 = "Spectre"
            type2 = "Plante"
            family = "Citrouille";
            ability1 = "Ramassage";
            ability2 = "Fouille";
            ability3 = "Insomnia";
            egg1 = "Amorphe";
            rate = 190;
            height = "0,8 m, soit 2,6 pieds";
            weight = "15,0 kg, soit 33,1 livres";
            hp = 59;
            atk = 66;
            def = 70;
            spa = 44;
            spd = 55;
            spe = 41;
            break;
        case "banshitrouye normale":
        case "banshitrouye":
            other_forms = "Autres formes: banshitrouye mini, banshitrouye maxi, banshitrouye ultra";
            title = "Banshitrouye";
            url = "https://pokepedia.fr/Banshitrouye";
            sprite = gif_url.concat("gourgeist.gif");
            name = "Gourgeist";
            number = 710;
            type1 = "Spectre"
            type2 = "Plante"
            family = "Citrouille";
            ability1 = "Ramassage";
            ability2 = "Fouille";
            ability3 = "Insomnia";
            egg1 = "Amorphe";
            rate = 190;
            height = "0,9 m, soit 3 pieds";
            weight = "12,5 kg, soit 27,6 livres";
            hp = 65;
            atk = 90;
            def = 122;
            spa = 58;
            spd = 75;
            spe = 84;
            break;
        case "banshitrouye mini":
            other_forms = "Autres formes: banshitrouye, banshitrouye maxi, banshitrouye ultra";
            title = "Banshitrouye Mini";
            url = "https://pokepedia.fr/Banshitrouye";
            sprite = gif_url.concat("gourgeist-small.gif");
            name = "Gourgeist";
            number = 710;
            type1 = "Spectre"
            type2 = "Plante"
            family = "Citrouille";
            ability1 = "Ramassage";
            ability2 = "Fouille";
            ability3 = "Insomnia";
            egg1 = "Amorphe";
            rate = 190;
            height = "0,7 m, soit 2,3 pieds";
            weight = "9,5 kg, soit 20,9 livres";
            hp = 55;
            atk = 85;
            def = 122;
            spa = 58;
            spd = 75;
            spe = 99;
            break;
        case "banshitrouye maxi":
            other_forms = "Autres formes: banshitrouye, banshitrouye mini, banshitrouye ultra";
            title = "Banshitrouye Maxi";
            url = "https://pokepedia.fr/Banshitrouye";
            sprite = gif_url.concat("gourgeist-large.gif");
            name = "Gourgeist";
            number = 710;
            type1 = "Spectre"
            type2 = "Plante"
            family = "Citrouille";
            ability1 = "Ramassage";
            ability2 = "Fouille";
            ability3 = "Insomnia";
            egg1 = "Amorphe";
            rate = 190;
            height = "1,1 m, soit 3,6 pieds";
            weight = "14,0 kg, soit 30,9 livres";
            hp = 75;
            atk = 95;
            def = 122;
            spa = 58;
            spd = 75;
            spe = 69;
            break;
        case "banshitrouye ultra":
            other_forms = "Autres formes: banshitrouye, banshitrouye mini, banshitrouye maxi";
            title = "Banshitrouye Ultra";
            url = "https://pokepedia.fr/Banshitrouye";
            sprite = gif_url.concat("gourgeist-super.gif");
            name = "Gourgeist";
            number = 710;
            type1 = "Spectre"
            type2 = "Plante"
            family = "Citrouille";
            ability1 = "Ramassage";
            ability2 = "Fouille";
            ability3 = "Insomnia";
            egg1 = "Amorphe";
            rate = 190;
            height = "1,7 m, soit 5,6 pieds";
            weight = "39,0 kg, soit 86 livres";
            hp = 85;
            atk = 100;
            def = 122;
            spa = 58;
            spd = 75;
            spe = 54;
            break;
        case "hoopa":
            other_forms = "Autres formes: hoopa déchainée";
            title = "Hoopa";
            url = "https://pokepedia.fr/Hoopa";
            sprite = gif_url.concat("hoopa.gif");
            name = "Hoopa";
            number = 720;
            type1 = "Psy"
            type2 = "Spectre"
            family = "Chenapan";
            ability1 = "Magicien";
            egg1 = "Inconnu";
            rate = 3;
            height = "0,5 m, soit 1,6 pieds";
            weight = "9,0 kg, soit 19,8 livres";
            hp = 80;
            atk = 110;
            def = 60;
            spa = 150;
            spd = 130;
            spe = 70;
            break;
        case "hoopa déchainée":
            other_forms = "Autres formes: hoopa";
            title = "Hoopa Forme Déchainée";
            url = "https://pokepedia.fr/Hoopa";
            sprite = gif_url.concat("hoopa-unbound.gif");
            name = "Hoopa";
            number = 720;
            type1 = "Psy"
            type2 = "Ténèbres"
            family = "Djinn";
            ability1 = "Magicien";
            egg1 = "Inconnu";
            rate = 3;
            height = "6,5 m, soit 21,3 pieds";
            weight = "490,0 kg, soit 1 080,3 livres";
            hp = 80;
            atk = 160;
            def = 60;
            spa = 170;
            spd = 130;
            spe = 80;
            break;
        case "amphinobi":
            other_forms = "Autres formes: amphinobi sacha";
            title = "Amphinobi";
            url = "https://pokepedia.fr/Amphinobi";
            sprite = gif_url.concat("greninja.gif");
            name = "Greninja";
            number = 659;
            type1 = "Eau"
            type2 = "Ténèbres"
            family = "Ninja";
            ability1 = "Torrent";
            ability2 = "Protéen";
            ability3 = "Synergie"
            egg1 = "Aquatique 1";
            rate = 45;
            height = "1,5 m, soit 4,9 pieds";
            weight = "40,0 kg, soit 88,2 livres";
            hp = 72;
            atk = 95;
            def = 64;
            spa = 103;
            spd = 71;
            spe = 122;
            break;
        case "amphinobi sacha":
            other_forms = "Autres formes: amphinobi";
            title = "Amphinobi Sacha";
            url = "https://pokepedia.fr/Amphinobi";
            sprite = gif_url.concat("greninja-ash.gif");
            name = "Greninja";
            number = 659;
            type1 = "Eau"
            type2 = "Ténèbres"
            family = "Ninja";
            ability1 = "Torrent";
            ability2 = "Protéen";
            ability3 = "Synergie"
            egg1 = "Aquatique 1";
            rate = 45;
            height = "1,5 m, soit 4,9 pieds";
            weight = "40,0 kg, soit 88,2 livres";
            hp = 72;
            atk = 145;
            def = 64;
            spa = 153;
            spd = 71;
            spe = 132;
            break;
        case "zygarde 50":
        case "zygarde":
            other_forms = "Autres formes: zygarde 10, zygarde 100";
            title = "Zygarde";
            url = "https://pokepedia.fr/Zygarde";
            sprite = gif_url.concat("zygarde.gif");
            name = "Zygarde";
            number = 718;
            type1 = "Dragon"
            type2 = "Sol"
            family = "Équilibre";
            ability1 = "Aura Inversée";
            ability2 = "Rassemblement";
            egg1 = "Inconnnu";
            rate = 3;
            height = "5,0 m, soit 16,4 pieds";
            weight = "305,0 kg, soit 672,4 livres";
            hp = 108;
            atk = 100;
            def = 121;
            spa = 81;
            spd = 95;
            spe = 95;
            break;
        case "zygarde 10":
            other_forms = "Autres formes: zygarde, zygarde 100";
            title = "Zygarde 10%";
            url = "https://pokepedia.fr/Zygarde";
            sprite = gif_url.concat("zygarde-10.gif");
            name = "Zygarde";
            number = 718;
            type1 = "Dragon"
            type2 = "Sol"
            family = "Équilibre";
            ability1 = "Aura Inversée";
            ability2 = "Rassemblement";
            egg1 = "Inconnnu";
            rate = 3;
            height = "1,2 m, soit 3,9 pieds";
            weight = "33,5 kg, soit 73,9 livres";
            hp = 54;
            atk = 100;
            def = 71;
            spa = 61;
            spd = 85;
            spe = 115;
            break;
        case "zygarde 100":
            other_forms = "Autres formes: zygarde, zygarde 10";
            title = "Zygarde 100%";
            url = "https://pokepedia.fr/Zygarde";
            sprite = gif_url.concat("zygarde-complete.gif");
            name = "Zygarde";
            number = 718;
            type1 = "Dragon"
            type2 = "Sol"
            family = "Équilibre";
            ability1 = "Aura Inversée";
            ability2 = "Rassemblement";
            egg1 = "Inconnnu";
            rate = 3;
            height = "4,5 m, soit 14,8 pieds";
            weight = "610,0 kg, soit 1 344,8 livres";
            hp = 216;
            atk = 100;
            def = 121;
            spa = 91;
            spd = 95;
            spe = 85;
            break;
        case "plumeline":
            other_forms = "Autres formes: plumeline buyo, plumeline pom-pom, plumeline hula";
            title = "Plumine Forme Flamenco";
            url = "https://pokepedia.fr/Plumeline";
            sprite = gif_url.concat("oricorio.gif");
            name = "Oricorio";
            number = 718;
            type1 = "Feu"
            type2 = "vol"
            family = "Danse";
            ability1 = "Danseuse";
            egg1 = "Aérien";
            rate = 45;
            height = "0,6 m, soit 2 pieds";
            weight = "3,4 kg, soit 7,5 livres";
            hp = 75;
            atk = 70;
            def = 70;
            spa = 98;
            spd = 70;
            spe = 93;
            break;
        case "plumeline buyo":
            other_forms = "Autres formes: plumeline, plumeline pom-pom, plumeline hula";
            title = "Plumine Forme Buyo";
            url = "https://pokepedia.fr/Plumeline";
            sprite = gif_url.concat("oricorio-sensu.gif");
            name = "Oricorio";
            number = 718;
            type1 = "Spectre"
            type2 = "vol"
            family = "Danse";
            ability1 = "Danseuse";
            egg1 = "Aérien";
            rate = 45;
            height = "0,6 m, soit 2 pieds";
            weight = "3,4 kg, soit 7,5 livres";
            hp = 75;
            atk = 70;
            def = 70;
            spa = 98;
            spd = 70;
            spe = 93;
            break;
        case "plumeline pom-pom":
            other_forms = "Autres formes: plumeline, plumeline buyo, plumeline hula";
            title = "Plumine Forme Pom-Pom";
            url = "https://pokepedia.fr/Plumeline";
            sprite = gif_url.concat("oricorio-pompom.gif");
            name = "Oricorio";
            number = 718;
            type1 = "Électrik"
            type2 = "vol"
            family = "Danse";
            ability1 = "Danseuse";
            egg1 = "Aérien";
            rate = 45;
            height = "0,6 m, soit 2 pieds";
            weight = "3,4 kg, soit 7,5 livres";
            hp = 75;
            atk = 70;
            def = 70;
            spa = 98;
            spd = 70;
            spe = 93;
            break;
        case "plumeline hula":
            other_forms = "Autres formes: plumeline, plumeline buyo, plumeline pom-pom";
            title = "Plumine Forme Hula";
            url = "https://pokepedia.fr/Plumeline";
            sprite = gif_url.concat("oricorio-pau.gif");
            name = "Oricorio";
            number = 718;
            type1 = "Psy"
            type2 = "vol"
            family = "Danse";
            ability1 = "Danseuse";
            egg1 = "Aérien";
            rate = 45;
            height = "0,6 m, soit 2 pieds";
            weight = "3,4 kg, soit 7,5 livres";
            hp = 75;
            atk = 70;
            def = 70;
            spa = 98;
            spd = 70;
            spe = 93;
            break;
        case "lougaroc diurne":
        case "lougaroc":
            other_forms = "Autres formes: lougaroc nocturne, lougaroc crépusculaire";
            title = "Plumine Diurne";
            url = "https://pokepedia.fr/Lougaroc";
            sprite = gif_url.concat("lycanroc.gif");
            name = "Lycanroc";
            number = 745;
            type1 = "Roche"
            family = "Loup";
            ability1 = "Regard-Vif";
            ability2 = "Baigne Sable";
            ability3 = "Impassible"
            egg1 = "Terrestre";
            rate = 90;
            height = "0,8 m, soit 2,6 pieds";
            weight = "25,0 kg, soit 55,1 livres";
            hp = 75;
            atk = 115;
            def = 65;
            spa = 55;
            spd = 75;
            spe = 112;
            break;
        case "lougaroc nocturne":
            other_forms = "Autres formes: lougaroc, lougaroc crépusculaire";
            title = "Plumine Nocturne";
            url = "https://pokepedia.fr/Lougaroc";
            sprite = gif_url.concat("lycanroc-dusk.gif");
            name = "Lycanroc";
            number = 745;
            type1 = "Roche"
            family = "Loup";
            ability1 = "Regard-Vif";
            ability2 = "Esprit Vital";
            ability3 = "Annule Garde"
            egg1 = "Terrestre";
            rate = 90;
            height = "1,1 m, soit 3,6 pieds";
            weight = "25,0 kg, soit 55,1 livres";
            hp = 85;
            atk = 115;
            def = 75;
            spa = 55;
            spd = 75;
            spe = 82;
            break;
        case "lougaroc crépusculaire":
            other_forms = "Autres formes: lougaroc, lougaroc nocturne";
            title = "Plumine Crépusculaire";
            url = "https://pokepedia.fr/Lougaroc";
            sprite = gif_url.concat("lycanroc-midnight.gif");
            name = "Lycanroc";
            number = 745;
            type1 = "Roche"
            family = "Loup";
            ability1 = "Regard-Vif";
            ability2 = "griffe Dure";
            egg1 = "Terrestre";
            rate = 90;
            height = "1,1 m, soit 3,6 pieds";
            weight = "25,0 kg, soit 55,1 livres";
            hp = 75;
            atk = 117;
            def = 65;
            spa = 55;
            spd = 65;
            spe = 100;
            break;
        case "froussardine":
            other_forms = "Autres formes: froussardine banc";
            title = "Froussardine";
            url = "https://pokepedia.fr/Froussardine";
            sprite = gif_url.concat("wishiwashi.gif");
            name = "Wishiwashi";
            number = 746;
            type1 = "Eau"
            family = "Minipoisson";
            ability1 = "Banc";
            egg1 = "Aquatique 2";
            rate = 60;
            height = "0,2 m, soit 0,7 pied";
            weight = "0,3 kg, soit 0,7 livre";
            hp = 45;
            atk = 20;
            def = 20;
            spa = 25;
            spd = 25;
            spe = 40;
            break;
        case "froussardine banc":
            other_forms = "Autres formes: froussardine";
            title = "Froussardine Forme Banc";
            url = "https://pokepedia.fr/Froussardine";
            sprite = gif_url.concat("wishiwashi-school.gif");
            name = "Wishiwashi";
            number = 746;
            type1 = "Eau"
            family = "Minipoisson";
            ability1 = "Banc";
            egg1 = "Aquatique 2";
            rate = 60;
            height = "8,2 m, soit 26,9 pieds";
            weight = "78,6 kg, soit 173,3 livres";
            hp = 45;
            atk = 140;
            def = 130;
            spa = 140;
            spd = 135;
            spe = 30;
            break;
        case "météno":
            other_forms = "Autres formes: météno défense";
            title = "Météno";
            url = "https://pokepedia.fr/Météno";
            sprite = gif_url.concat("minior.gif");
            name = "Minior";
            number = 774;
            type1 = "Roche";
            type1 = "Vol"
            family = "Météore";
            ability1 = "Bouclier-Carcan";
            egg1 = "Minéral";
            rate = 225;
            height = "0,3 m, soit 1 pied";
            weight = "0,3 kg, soit 0,7 livre";
            hp = 60;
            atk = 100;
            def = 60;
            spa = 100;
            spd = 60;
            spe = 120;
            break;
        case "météno défense":
            other_forms = "Autres formes: météno défense";
            title = "Météno Forme Défensive";
            url = "https://pokepedia.fr/Météno";
            sprite = gif_url.concat("minior-meteor.gif");
            name = "Minior";
            number = 774;
            type1 = "Roche";
            type1 = "Vol"
            family = "Météore";
            ability1 = "Bouclier-Carcan";
            egg1 = "Minéral";
            rate = 30;
            height = "40 kg, soit 88,2 livres";
            weight = "0,3 kg, soit 0,7 livre";
            hp = 60;
            atk = 60;
            def = 100;
            spa = 60;
            spd = 100;
            spe = 60;
            break;
        case "necrozma":
            other_forms = "Autres formes: necrozma ailes de l\'aurore, necrozma crinière du couchant, ultra necrozma";
            title = "Necrozma";
            url = "https://pokepedia.fr/Necrozma";
            sprite = gif_url.concat("necrozma.gif");
            name = "Necrozma";
            number = 800;
            type1 = "Psy";
            family = "Prisme";
            ability1 = "Prisme-Armure";
            egg1 = "Inconnu";
            rate = "3(SL)/255(USUL)";
            height = "2,4 m, soit 7,9 pieds";
            weight = "230,0 kg, soit 507,1 livres";
            hp = 97;
            atk = 107;
            def = 101;
            spa = 127;
            spd = 89;
            spe = 79;
            break;
        case "necrozma ailes de l\'aurore":
            other_forms = "Autres formes: necrozma, necrozma crinière du couchant, ultra necrozma";
            title = "Necrozma Ailes de l\'Aurore";
            url = "https://pokepedia.fr/Necrozma_Ailes_de_l%27Aurore";
            sprite = gif_url.concat("necrozma-dawnwings.gif");
            name = "Necrozma Dawn Wings";
            number = 800;
            type1 = "Psy";
            type2 = "Spectre"
            family = "Prisme";
            ability1 = "Prisme-Armure";
            egg1 = "Inconnu";
            rate = "3(SL)/255(USUL)";
            height = "4,2 m, soit 13,8 pieds";
            weight = "350 kg, soit 771,6 livres";
            hp = 97;
            atk = 113;
            def = 109;
            spa = 157;
            spd = 127;
            spe = 77;
            break;
        case "necrozma crinière du couchant":
            other_forms = "Autres formes: necrozma, necrozma ailes de l\'aurore, ultra necrozma";
            title = "Necrozma Crinière du Couchant";
            url = "https://pokepedia.fr/Necrozma_Crinière_du_Couchant";
            sprite = gif_url.concat("necrozma-duskmane.gif");
            name = "Necrozma Dusk Mane";
            number = 800;
            type1 = "Psy";
            type2 = "Acier"
            family = "Prisme";
            ability1 = "Prisme-Armure";
            egg1 = "Inconnu";
            rate = "3(SL)/255(USUL)";
            height = "3,8 m, soit 12,5 pieds";
            weight = "460 kg, soit 1 014,1 livres";
            hp = 97;
            atk = 157;
            def = 127;
            spa = 113;
            spd = 109;
            spe = 77;
            break;
        case "ultra necrozma":
            other_forms = "Autres formes: necrozma, necrozma ailes de l\'aurore, necrozma crinière du couchant";
            title = "Ultra Necrozma";
            url = "https://pokepedia.fr/Ultra-Necrozma";
            sprite = gif_url.concat("necrozma-ultra.gif");
            name = "Ultra Necrozma";
            number = 800;
            type1 = "Psy";
            type2 = "Dragon"
            family = "Prisme";
            ability1 = "Cérébro-Force";
            egg1 = "Inconnu";
            rate = "3(SL)/255(USUL)";
            height = "7,5 m, soit 24,6 pieds";
            weight = "230,0 kg, soit 507,1 livres";
            hp = 97;
            atk = 167;
            def = 97;
            spa = 163;
            spd = 97;
            spe = 129;
            break;
        case "primo kyogre":
            other_forms = "";
            title = "Primo Kyogre";
            url = "https://pokepedia.fr/Primo-Kyogre";
            sprite = gif_url.concat("kyogre-primal.gif");
            name = "Primal Kyogre";
            number = 382;
            type1 = "Eau";
            family = "Bassinmarin";
            ability1 = "Mer Primaire";
            egg1 = "NULL";
            rate = 3;
            height = "9,8 m, soit 32,2 pieds";
            weight = "430,0 kg, soit 948 livres";
            hp = 100;
            atk = 150;
            def = 90;
            spa = 180;
            spd = 160;
            spe = 90;
            break;
        case "primo groudon":
            other_forms = "";
            title = "Primo Groudon";
            url = "https://pokepedia.fr/Primo-Groudon";
            sprite = gif_url.concat("groudon-primal.gif");
            name = "Primal Groudon";
            number = 383;
            type1 = "Sol";
            type2 = "Feu"
            family = "Continent";
            ability1 = "Terre Finale";
            egg1 = "NULL";
            rate = 3;
            height = "5,0 m, soit 16,4 pieds";
            weight = "999,7 kg, soit 2 203,9 livres";
            hp = 100;
            atk = 180;
            def = 160;
            spa = 150;
            spd = 90;
            spe = 90;
            break;
        case "darumacho galar":
        case "darumacho de galar":
            other_forms = "Autres formes: Darumacho de Galar mode trans";
            title = "Darumacho de Galar";
            url = "https://www.pokepedia.fr/Darumacho_de_Galar";
            sprite = gif_url.concat("darmanitan-galar.gif");
            name = "Galarian Darmanitan";
            number = 368;
            type1 = "Glace";
            family = "Enflammé";
            ability1 = "Entêtement";
            ability2 = "Mode Transe";
            egg1 = "Terrestre";
            rate = 60;
            height = "1,7 m, soit 5,7 pieds";
            weight = "120,0 kg, soit 26,4 livres";
            hp = 105;
            atk = 140;
            def = 66;
            spa = 30;
            spd = 55;
            spe = 95;
            break;
        case "darumacho galar trans":
        case "darumacho de galar trans":
        case "darumacho galar mode trans":
        case "darumacho de galar mode trans":
            other_forms = "Darumacho de Galar";
            title = "Autres formes: Darumacho de Galar mode trans";
            url = "https://www.pokepedia.fr/Darumacho_de_Galar";
            sprite = gif_url.concat("darmanitan-zen-galar.gif");
            name = "Galarian Darmanitan";
            number = 368;
            type1 = "Glace";
            type2 = "Fire";
            family = "Enflammé";
            ability1 = "Entêtement";
            ability2 = "Mode Transe";
            egg1 = "Terrestre";
            rate = 60;
            height = "1,7 m, soit 5,7 pieds";
            weight = "120,0 kg, soit 26,4 livres";
            hp = 105;
            atk = 160;
            def = 55;
            spa = 30;
            spd = 55;
            spe = 135;
            break;
        case "bekaglacon":
        case "bekaglaçon":
            other_forms = "Autres formes: Bekaglaçon dégel";
            title = "Bekaglaçon";
            url = "https://www.pokepedia.fr/Bekaglaçonr";
            sprite = gif_url.concat("eiscue.gif");
            name = "Eiscue";
            number = 875;
            type1 = "Glace";
            family = "Pingouin";
            ability1 = "Tête de Gel";
            egg1 = "Aquatique 1";
            egg2 = "Terrestre";
            rate = 60;
            height = "1,4 m, soit 4,07 pieds";
            weight = "89,0 kg, soit 196,2 livres";
            hp = 75;
            atk = 80;
            def = 110;
            spa = 65;
            spd = 90;
            spe = 50;
            break;
        case "bekaglacon dégel":
        case "bekaglaçon dégel":
        case "bekaglacon degel":
        case "bekaglaçon degel":
            other_forms = "Autres formes: Bekaglaçon";
            title = "Bekaglaçon Dégel";
            url = "https://www.pokepedia.fr/Bekaglaçonr";
            sprite = gif_url.concat("eiscue.gif");
            name = "Eiscue";
            number = 875;
            type1 = "Glace";
            family = "Pingouin";
            ability1 = "Tête de Gel";
            egg1 = "Aquatique 1";
            egg2 = "Terrestre";
            rate = 60;
            height = "1,4 m, soit 4,07 pieds";
            weight = "89,0 kg, soit 196,2 livres";
            hp = 75;
            atk = 80;
            def = 70;
            spa = 65;
            spd = 50;
            spe = 130;
            break;
        case "zacian":
            other_forms = "Autres formes: Zacian Épée Suprême";
            title = "Zacian";
            url = "https://www.pokepedia.fr/Zacian";
            sprite = gif_url.concat("zacian.gif");
            name = "Zacian";
            number = 888;
            type1 = "Fée";
            family = "Valeureux";
            ability1 = "Lame Indomptable";
            egg1 = "Inconnu";
            rate = 10;
            height = "2,8 m, soit 9,2 pieds";
            weight = "110,0 kg, soit 242,5 livres";
            hp = 92;
            atk = 130;
            def = 115;
            spa = 80;
            spd = 115;
            spe = 138;
            break;
        case "zacian épée suprême":
        case "zacian epee supreme":
            other_forms = "Autres formes: Zacian";
            title = "Zacian";
            url = "https://www.pokepedia.fr/Zacian";
            sprite = gif_url.concat("zacian.gif");
            name = "Zacian Crowned Sword";
            number = 888;
            type1 = "Fée";
            type2 = "Acier";
            family = "Valeureux";
            ability1 = "Lame Indomptable";
            egg1 = "Inconnu";
            rate = 10;
            height = "2,8 m, soit 9,2 pieds";
            weight = "355,0 kg, soit 782,6 livres";
            hp = 92;
            atk = 170;
            def = 115;
            spa = 80;
            spd = 115;
            spe = 148;
            break;
        case "zamazenta":
            other_forms = "Autres formes: Zamazenta Bouclier Suprême";
            title = "Zamazenta";
            url = "https://www.pokepedia.fr/Zacian";
            sprite = gif_url.concat("zamazenta.gif");
            name = "Zamazenta";
            number = 889;
            type1 = "Combat";
            family = "Valeureux";
            ability1 = "Égide Inflexible";
            egg1 = "Inconnu";
            rate = 10;
            height = "2,9 m, soit 9,5 pieds";
            weight = "210,0 kg, soit 463,0 livres";
            hp = 92;
            atk = 130;
            def = 115;
            spa = 80;
            spd = 115;
            spe = 138;
            break;
        case "zamazenta bouclier suprême":
        case "zamazenta bouclier supreme":
            other_forms = "Autres formes: Zamazenta";
            title = "Zamazenta";
            url = "https://www.pokepedia.fr/Zacian";
            sprite = gif_url.concat("zamazenta.gif");
            name = "Zamazenta Crowned Sheild";
            number = 889;
            type1 = "Combat";
            type2 = "Acier";
            family = "Valeureux";
            ability1 = "Égide Inflexible";
            egg1 = "Inconnu";
            rate = 10;
            height = "2,9 m, soit 9,5 pieds";
            weight = "785,0 kg, soit  1730,6 livres";
            hp = 92;
            atk = 130;
            def = 145;
            spa = 80;
            spd = 145;
            spe = 128;
            break;
        default:
            return false;
    }
    if (!type) {
        description = "Nom anglais: " + name;
        if (number != 0)
            description += "\nNuméro du pokédex: " + number + "\n";
        else
            description += "\nNuméro du pokédex: ???\n";
        if (type2 == "NULL")
            description += "Type: " + type1 + "\n";
        else
            description += "Types: " + type1 + ", " + type2 + "\n";
        description += "Famille: " + family + "\nTaille: " + height + "\nPoids: " + weight;
        if (ability1 != "NULL") {
            if (ability2 == "NULL")
                description += "\nTalent: " + ability1 + "\n";
            else {
                if (ability3 == "NULL")
                    description += "\nTalents: " + ability1 + "/" + ability2 + "\n";
                else
                    description += "\nTalents: " + ability1 + "/" + ability2 + "/" + ability3 + "\n";
            }
        } else
            description += "\n";
        if (egg1 != "NULL") {
            if (egg2 == "NULL")
                description += "Groupe œuf: " + egg1 + "\n";
            else
                description += "Groupe œuf: " + egg1 + ", " + egg2 + "\n";
        }
        if (rate != -1) {
            if (rate == 0)
                description += "Taux de capture: ???\n";
            else
                description += "Taux de capture: " + rate + "\n";
        }
        if (hp != 0)
            description += "Pv: " + hp + "\nAttaque: " + atk + "\nDéfense: " + def + "\nAttaque Spéciale: " + spa + "\nDéfense Spéciale: " + spd + "\nVitesse: " + spe;
        else
            description += "Pv: ???\nAttaque: ???\nDéfense: ???\nAttaque Spéciale: ???\nDéfense Spéciale: ???\nVitesse: ???";
        channel.sendMessage(other_forms, false, {
            color: getColor(type1),
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
    request("https://www.pokepedia.fr/Liste_des_Pok%C3%A9mon_dans_l%27ordre_du_Pok%C3%A9dex_National", { json: true }, (err, res, body) => {
        var found = false;

        if (err) {
            channel.sendMessage("Impossible de communiquer avec le serveur, merci de réessayer dans 5 minutes.\nInformations sur l'erreur: " + err);
            return;
        }
        $('tr > td', body).each(function(i) {
            if ($(this).text().substring(0, 3) == content) {
                if (shiny)
                    module.exports.pokemon($(this).next().next().children()[0].children[0].data + " shiny", channel);
                else
                    module.exports.pokemon($(this).next().next().children()[0].children[0].data, channel);
                found = true;
            }
        });
        if (!found)
            channel.sendMessage("Aucun Pokémon trouvé avec un numéro de pokedex de " + parseInt(content));
    });
}

function getColor(type) {
    switch (type) {
        case "Feu":
            return 0xf75231;
        case "Eau":
            return 0x399cff;
        case "Plante":
            return 0x7bce52;
        case "Électrik":
            return 0xffc631;
        case "Glace":
            return 0x5acee7;
        case "Combat":
            return 0xa55239;
        case "Poison":
            return 0xb55aa5;
        case "Sol":
            return 0xd6b55a;
        case "Vol":
            return 0x9cadf7;
        case "Psy":
            return 0xff73a5;
        case "Insecte":
            return 0xadbd21;
        case "Roche":
            return 0xbda55a;
        case "Spectre":
            return 0x6363b5;
        case "Dragon":
            return 0x8858f6;
        case "Acier":
            return 0x735a4a;
        case "Ténèbres":
            return 0xadadc6;
        case "Fée":
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
        console.log("pokemon/french.js: gathering info about " + content);
        var found = 0;
        var description;
        var url = "https://pokepedia.fr/";
        var gif_url = "http://play.pokemonshowdown.com/sprites/xyani/";
        var sprite;
        var name;
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
        if (content.search(" shiny") != -1) {
            gif_url = "http://play.pokemonshowdown.com/sprites/xyani-shiny/";
            shiny = 1;
            content = content.substring(0, content.length - 6);
        }
        if (content.search(" méga") != -1 || content.search(" mega") != -1 || content.startsWith("mega ") || content.startsWith("méga ")) {
            is_mega = 1;
            if (content.startsWith("mega ") || content.startsWith("méga "))
                content = content.substring(5);
            content = content.charAt(0).toUpperCase() + content.slice(1);
            search = url.concat(mega);
            search = search.concat(content);
            if (content.search(" x") != -1) {
                search = search.substring(0, search.search(" "));
                search = search.concat("_X");
                mega_type = " X ";
            } else if (content.search(" y") != -1) {
                search = search.substring(0, search.search(" "));
                search = search.concat("_Y");
                mega_type = " Y ";
            }
        }
        if (content.search(" ") != -1 && !is_mega)
            search = url.concat(content.substring(0, content.search(" ")));
        else if (!is_mega)
            search = url.concat(content);
        if (content.search(" alola") != -1 || content.search(" d'alola") != -1) {
            alola = 1;
            search = search.concat("_d%27Alola");
        } else if (content.search(" galar") != -1 || content.search(" de galar") != -1) {
            galar = 1;
            search = search.concat("_de_Galar");
        }
        if (specialCase(channel, content, shiny, type) && !is_mega)
            return;
        else if (specialCase(channel, content.substring(content.search(" ")), shiny, type) && !is_mega)
            return;
        request(search, { json: true }, (err, res, body) => {
            if (err) {
                channel.sendMessage("Impossible de communiquer avec le serveur, merci de réessayer dans 5 minutes, si l'erreur persiste, merci de contacter Inklay#5226 sur Discord et de lui envoyer ceci:\nInformations sur l'erreur: " + err);
                return;
            }
            $('.toctext', body).each(function(i) {
                if (($(this).text() == "À propos du Pokémon" || $(this).text() == "Origine de Mew") && !i && !is_mega)
                    found = 1;
                else if (($(this).text() == "À propos du Pokémon" || $(this).text() == "À propos du Méga-Pokémon") && !i && is_mega)
                    found = 1;
            });
            if (!found) {
                if (alola)
                    channel.sendMessage("Impossible de trouver \"" + content.charAt(0).toUpperCase() + content.slice(1) + " d\'Alola\" merci de vérifier l'orthographe.");
                else if (galar)
                    channel.sendMessage("Impossible de trouver \"" + content.charAt(0).toUpperCase() + content.slice(1) + " de Galar\" merci de vérifier l'orthographe.");
                else
                    channel.sendMessage("Impossible de trouver \"" + content.charAt(0).toUpperCase() + content.slice(1) + "\" merci de vérifier l'orthographe.");
                return;
            }
            title = $('.firstHeading', body).text();
            $('th', body).each(function() {
                if ($(this).text().startsWith("Nom anglais"))
                    name = $(this).next().text();
            });
            number = $('.entêtesection > big > span', body).text().substring(2);
            $('tr > th > a', body).each(function() {
                if ($(this)[0].attribs.href == "/Type" && $(this).parent().next()[0].attribs.colspan == "3") {
                    type1 = $(this).parent().next()[0].children[0].attribs.title.replace(" (type)", "");
                    if ($(this).parent().next()[0].children.length == 3)
                        type2 = $(this).parent().next()[0].children[2].attribs.title.replace(" (type)", "");
                }
                if ($(this)[0].attribs.href == "/Famille" && $(this).parent().next()[0].attribs.colspan == "3" && $(this).parent().next()[0].children[1])
                    family = "Pokémon " + $(this).parent().next()[0].children[1].data;
                if ($(this)[0].attribs.href == "/Liste_des_Pok%C3%A9mon_par_taille" && $(this).parent().next()[0].attribs.colspan == "3")
                    height = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Liste_des_Pok%C3%A9mon_par_poids" && $(this).parent().next()[0].attribs.colspan == "3")
                    weight = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Talent" && $(this).parent().next()[0].attribs.colspan == "3") {
                    if ($(this).parent().next()[0].children.length == 2)
                        ability1 = $(this).parent().next()[0].children[1].children[0].data;
                    else {
                        if ($(this).parent().next()[0].children[1] == null)
                            ability1 = "???";
                        else {
                            ability1 = $(this).parent().next()[0].children[1].children[0].data;
                            ability2 = $(this).parent().next()[0].children[4].children[0].data;
                            if ($(this).parent().next()[0].children.length > 5 && $(this).parent().next()[0].children[5].type == "tag" && $(this).parent().next()[0].children[5].name == "small" && $(this).parent().next()[0].children[5].children[1].children[1].children[0].data == "Talent caché")
                                ability2 += " (caché)";
                            if ($(this).parent().next()[0].children.length == 9) {
                                ability3 = $(this).parent().next()[0].children[7].children[0].data;
                                if ($(this).parent().next()[0].children[8].type == "tag" && $(this).parent().next()[0].children[8].name == "small" && $(this).parent().next()[0].children[8].children[1].children[1].children[0].data == "Talent caché")
                                    ability3 += " (caché)";
                            }
                        }
                    }
                }
                if ($(this)[0].attribs.href == "/Liste_des_Pok%C3%A9mon_par_groupe_d%27%C5%93uf" && $(this).parent().next()[0].attribs.colspan == "3" && !is_mega) {
                    if ($(this).parent().next()[0].children[0].children != null) {
                        egg1 = $(this).parent().next()[0].children[0].children[0].data;
                        if ($(this).parent().next()[0].children.length == 4)
                            egg2 = $(this).parent().next()[0].children[2].children[0].data;
                    } else
                        egg1 = "???";
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
                if ($(this)[0].attribs.href == "/Statistique#D.C3.A9fense_Sp.C3.A9ciale" && !spd)
                    spd = $(this).parent().next()[0].children[0].data;
                if ($(this)[0].attribs.href == "/Statistique#Vitesse" && !spe)
                    spe = $(this).parent().next()[0].children[0].data;
            });
            type1 =  type1.charAt(0).toUpperCase() + type1.slice(1);
            type2 = type2.charAt(0).toUpperCase() + type2.slice(1);
            if (number == ".")
                number = "???";
            if (rate == "\n" || rate == "—")
                rate = "???";
            if (height == null || height == "—")
                height = "???";
            if (weight == null || weight == "—")
                weight = "???";
            if (family == null || family == "Pokémon \n")
                family = "???";
            if (type1 == "Inconnu")
                type1 = "???";
            if (ability1 == "???")
                ability1 = "???\n";
            color = getColor(type1);
            if (!type) {
                description = "Nom anglais: " + name + "\nNuméro du pokédex: " + number + "\n";
                if (type2 == "NULL")
                    description += "Type: " + type1 + "\n";
                else
                    description += "Types: " + type1 + ", " + type2 + "\n";
                description += "Famille: " + family + "\nTaille: " + height + "\nPoids: " + weight;
                if (ability2 == "NULL")
                    description += "\nTalent: " + ability1;
                else {
                    if (ability3 == "NULL")
                        description += "\nTalents: " + ability1 + "/" + ability2 + "\n";
                    else
                        description += "\nTalents: " + ability1 + "/" + ability2 + "/" + ability3 + "\n";
                }
                if (!is_mega) {
                    if (egg2 == "NULL")
                        description += "Groupe œuf: " + egg1 + "\n";
                    else
                        description += "Groupe œuf: " + egg1 + ", " + egg2 + "\n";
                    description += "Taux de capture: " + rate;
                }
                if (hp == 0)
                    description += "Pv: ???\nAttaque: ???\nDéfense: ???\nAttaque Spéciale: ???\nDéfense Spéciale: ???\nVitesse: ???";
                else
                    description += "\nPv: " + hp + "Attaque: " + atk + "Défense: " + def + "Attaque Spéciale: " + spa + "Défense Spéciale: " + spd + "Vitesse: " + spe;
                if (alola) {
                    sprite = gif_url.concat(name.slice(7, name.length));
                    sprite = sprite.concat("-alola.gif");
                } else if (!is_mega) {
                    sprite = gif_url.concat(name);
                    sprite = sprite.concat(".gif");
                } else if (is_mega) {
                    if (mega_type == "") {
                        sprite = gif_url.concat(name.slice(5, name.length));
                        sprite = sprite.concat("-mega.gif");
                    } else if (mega_type == " X ") {
                        sprite = gif_url.concat(name.slice(5, name.length - 2));
                        sprite = sprite.concat("-megax.gif");
                    } else if (mega_type == " Y ") {
                        sprite = gif_url.concat(name.slice(5, name.length - 2));
                        sprite = sprite.concat("-megay.gif");
                    }
                }
                if (number == "???" || parseInt(number) > 809 || galar) {
                    sprite = "https://swordshield.pokemon.com/assets/img/articles/pokemon_" + name.replace(/\W/g, '') + "_2x.png";
                    if (spoiler.get(id, guildType) == "off") {
                        channel.sendMessage("Ce Pokémon est considéré comme un spoiler, pour activer les spoilers, faites \"pokedex spoiler on\".\n\n");
                        return;
                    } else
                        description = "Ce Pokémon est considéré comme un spoiler, pour désactiver les spoilers, faites \"pokedex spoiler off\".\n\n" + description;
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
                        text: "Informations de Poképedia.\nImages de Pokémon Showdown."
                    }
                });
                console.log("pokemon/french.js: successfully gathered info about " + content);
            } else
                types.show(type1, type2, channel, id);
        });
    }
};
