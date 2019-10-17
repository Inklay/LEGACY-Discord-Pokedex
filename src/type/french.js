const jimp = require('jimp');

function calcNormal(type) {
    if (type == "Roche" || type == "Acier")
        return 0.5;
    else if (type == "Spectre")
        return 0;
    else
        return 1;
}

function calcFire(type) {
    if (type == "Feu" || type == "Eau" || type == "Roche" || type == "Dragon")
        return 0.5;
    else if (type == "Plante" || type == "Glace" || type == "Insecte" || type == "Acier")
        return 2;
    else
        return 1;
}

function calcWater(type) {
    if (type == "Plante" || type == "Eau" || type == "Dragon")
        return 0.5;
    else if (type == "Feu" || type == "Sol" || type == "Roche")
        return 2;
    else
        return 1;
}

function calcGrass(type) {
    if (type == "Feu" || type == "Plante" || type == "Poison" || type == "Vol" || type == "Insecte" || type == "Dragon" || type == "Acier")
        return 0.5;
    else if (type == "Eau" || type == "Sol" || type == "Roche")
        return 2;
    else
        return 1;
}

function calcElectric(type) {
    if (type == "Plante" || type == "Électrik" || type == "Dragon")
        return 0.5;
    else if (type == "Eau" || type == "Vol")
        return 2;
    else if (type == "Sol")
        return 0;
    else
        return 1;
}

function calcIce(type) {
    if (type == "Feu" || type == "Eau" || type == "Glace" || type == "Acier")
        return 0.5;
    else if (type == "Plante" || type == "Sol" || type == "Vol" || type == "Dragon")
        return 2;
    else
        return 1;
}

function calcFighting(type) {
    if (type == "Poison" || type == "Vol" || type == "Psy" || type == "Insecte" || type == "Fée")
        return 0.5;
    else if (type == "Normal" || type == "Glace" || type == "Roche" || type == "Dark" || type == "Acier")
        return 2;
    else if (type == "Spectre")
        return 0;
    else
        return 1;
}

function calcPoison(type) {
    if (type == "Poison" || type == "Sol" || type == "Roche" || type == "Spectre")
        return 0.5;
    else if(type == "Plante" || type == "Fée")
        return 2;
    else if (type == "Acier")
        return 0;
    else
        return 1;
}

function calcGround(type) {
    if (type == "Plante" || type == "Insecte")
        return 0.5;
    else if (type == "Feu" || type == "Électrik" || type == "Poison" || type == "Roche" || type == "Acier")
        return 2;
    else if (type == "Vol")
        return 0;
    else
        return 1;
}

function calcFlying(type) {
    if (type == "Électrik" || type == "Roche" || type == "Acier")
        return 0.5;
    else if (type == "Plante" || type == "Fighting" || type == "Insecte")
        return 2;
    else
        return 1;
}

function calcPsychic(type) {
    if (type == "Psy" || type == "Acier")
        return 0.5;
    else if (type == "Combat" || type == "Poison")
        return 2;
    else if (type == "Ténèbres")
        return 0;
    else
        return 1;
}

function calcBug(type) {
    if (type == "Feu" || type == "Combat" || type == "Poison" || type == "Vol" || type == "Spectre" || type == "Acier" || type == "Vol")
        return 0.5;
    else if (type == "Plante" || type == "Psy" || type == "Ténèbres")
        return 2;
    else
        return 1;
}

function calcRock(type) {
    if (type == "Combat" || type == "Sol" || type == "Acier")
        return 0.5;
    else if (type == "Feu" || type == "Glace" || type == "Vol" || type == "Insecte")
        return 2;
    else
        return 1;
}

function calcGhost(type) {
    if (type == "Ténèbres" || type == "Acier")
        return 0.5;
    else if (type == "Psy" || type == "Spectre")
        return 2;
    else if (type == "Normal")
        return 0;
    else
        return 1;
}

function calcDragon(type) {
    if (type == "Acier")
        return 0.5;
    else if (type == "Dragon")
        return 2;
    else if (type == "Fée")
        return 0
    else
        return 1;
}

function calcDark(type) {
    if (type == "Combat" || type == "Ténèbres" || type == "Acier" || type == "Fée")
        return 0.5;
    else if (type == "Psy" || type == "Spectre")
        return 2;
    else
        return 1;
}

function calcSteel(type) {
    if (type == "Feu" || type == "Eau" || type == "Acier")
        return 0.5;
    else if (type == "Glace" || type == "Roche" || type == "Fée")
        return 2;
    else
        return 1;
}

function calcFairy(type) {
    if (type == "Feu" || type == "Poison" || type == "Acier")
        return 0.5;
    else if (type == "Combat" || type == "Ténèbres" || type == "Dragon")
        return 2;
    else
        return 1;
}

module.exports = {
    show: function(type1, type2, channel, id) {
        console.log(type1 + " " + type2);
        var type = new Array();
        type[0] = 1 * calcNormal(type1) * calcNormal(type2);
        type[1] = 1 * calcFire(type1) * calcFire(type2);
        type[2] = 1 * calcWater(type1) * calcWater(type2);
        type[3] = 1 * calcGrass(type1) * calcGrass(type2);
        type[4] = 1 * calcElectric(type1) * calcElectric(type2);
        type[5] = 1 * calcIce(type1) * calcIce(type2);
        type[6] = 1 * calcFighting(type1) * calcFighting(type2);
        type[7] = 1 * calcPoison(type1) * calcPoison(type2);
        type[8] = 1 * calcGround(type1) * calcGround(type2);
        type[9] = 1 * calcFlying(type1) * calcFlying(type2);
        type[10] = 1 * calcPsychic(type1) * calcPsychic(type2);
        type[11] = 1 * calcBug(type1) * calcBug(type2);
        type[12] = 1 * calcRock(type1) * calcRock(type2);
        type[13] = 1 * calcGhost(type1) * calcGhost(type2);
        type[14] = 1 * calcDragon(type1) * calcDragon(type2);
        type[15] = 1 * calcDark(type1) * calcDark(type2);
        type[16] = 1 * calcSteel(type1) * calcSteel(type2);
        type[17] = 1 * calcFairy(type1) * calcFairy(type2);
        
        image = new Array();
        image[0] = new jimp(80, 20, "#ada594");
        image[1] = new jimp(80, 20, "#f75231");
        image[2] = new jimp(80, 20, "#399cff");
        image[3] = new jimp(80, 20, "#7bce52");
        image[4] = new jimp(80, 20, "#ffc631");
        image[5] = new jimp(80, 20, "#5acee7");
        image[6] = new jimp(80, 20, "#a55239");
        image[7] = new jimp(80, 20, "#b55aa5");
        image[8] = new jimp(80, 20, "#d6b55a");
        image[9] = new jimp(80, 20, "#9cadf7");
        image[10] = new jimp(80, 20, "#ff73a5");
        image[11] = new jimp(80, 20, "#adbd21");
        image[12] = new jimp(80, 20, "#bda55a");
        image[13] = new jimp(80, 20, "#6363b5");
        image[14] = new jimp(80, 20, "#8858f6");
        image[15] = new jimp(80, 20, "#735a4a");
        image[16] = new jimp(80, 20, "#adadc6");
        image[17] = new jimp(80, 20, "#e09ae3");
        image[18] = new jimp(1476, 42, "white");
    
        jimp.loadFont(jimp.FONT_SANS_16_WHITE).then(font => {
            image[0].print(font, 0, 0, {text: "Normal", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[1].print(font, 0, 0, {text: "Feu", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[2].print(font, 0, 0, {text: "Eau", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[3].print(font, 0, 0, {text: "Plante", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[4].print(font, 0, 0, {text: "Électrik", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[5].print(font, 0, 0, {text: "Glace", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[6].print(font, 0, 0, {text: "Combat", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[7].print(font, 0, 0, {text: "Poison", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[8].print(font, 0, 0, {text: "Sol", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[9].print(font, 0, 0, {text: "Vol", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[10].print(font, 0, 0, {text: "Psy", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[11].print(font, 0, 0, {text: "Insecte", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[12].print(font, 0, 0, {text: "Roche", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[13].print(font, 0, 0, {text: "Spectre", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[14].print(font, 0, 0, {text: "Dragon", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[15].print(font, 0, 0, {text: "Ténèbres", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[16].print(font, 0, 0, {text: "Acier", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[17].print(font, 0, 0, {text: "Fée", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            return image;
        }).then (image => {
            lineV = new jimp(2, 42, "black");
            lineH = new jimp(1476, 2, "black");
            jimp.loadFont(jimp.FONT_SANS_16_BLACK).then(font => {
                for (i = 0; i < 18; i++) {
                    image[18].composite(image[i], (i * 80 + i * 2), 0);
                    image[18].print(font, (i * 80 + i * 2), 22, {text: "x" + String(type[i]), alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
                    image[18].composite(lineV, ((i + 1) * 80 + i * 2), 0);
                }
                image[18].composite(lineH, 0, 20);
                image[18].write(id + '.png');
                //channel.uploadFile(id + '.png');
            });
        })
    }
}
