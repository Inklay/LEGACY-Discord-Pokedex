const jimp = require('jimp');
const fs = require('fs');

function calcNormal(type) {
    if (type == "Rock" || type == "Steel")
        return 0.5;
    else if (type == "Ghost")
        return 0;
    else
        return 1;
}

function calcFire(type) {
    if (type == "Fire" || type == "Water" || type == "Rock" || type == "Dragon")
        return 0.5;
    else if (type == "Grass" || type == "Ice" || type == "Bug" || type == "Steel")
        return 2;
    else
        return 1;
}

function calcWater(type) {
    if (type == "Grass" || type == "Water" || type == "Dragon")
        return 0.5;
    else if (type == "Fire" || type == "Ground" || type == "Rock")
        return 2;
    else
        return 1;
}

function calcGrass(type) {
    if (type == "Fire" || type == "Grass" || type == "Poison" || type == "Flying" || type == "Bug" || type == "Dragon" || type == "Steel")
        return 0.5;
    else if (type == "Water" || type == "Ground" || type == "Rock")
        return 2;
    else
        return 1;
}

function calcElectric(type) {
    if (type == "Grass" || type == "Electric" || type == "Dragon")
        return 0.5;
    else if (type == "Water" || type == "Flying")
        return 2;
    else if (type == "Ground")
        return 0;
    else
        return 1;
}

function calcIce(type) {
    if (type == "Fire" || type == "Water" || type == "Ice" || type == "Steel")
        return 0.5;
    else if (type == "Grass" || type == "Ground" || type == "Flying" || type == "Dragon")
        return 2;
    else
        return 1;
}

function calcFighting(type) {
    if (type == "Poison" || type == "Flying" || type == "Psychic" || type == "Bug" || type == "Fairy")
        return 0.5;
    else if (type == "Normal" || type == "Ice" || type == "Rock" || type == "Dark" || type == "Steel")
        return 2;
    else if (type == "Ghost")
        return 0;
    else
        return 1;
}

function calcPoison(type) {
    if (type == "Poison" || type == "Ground" || type == "Rock" || type == "Ghost")
        return 0.5;
    else if(type == "Grass" || type == "Fairy")
        return 2;
    else if (type == "Steel")
        return 0;
    else
        return 1;
}

function calcGround(type) {
    if (type == "Grass" || type == "Bug")
        return 0.5;
    else if (type == "Fire" || type == "Electric" || type == "Poison" || type == "Rock" || type == "Steel")
        return 2;
    else if (type == "Flying")
        return 0;
    else
        return 1;
}

function calcFlying(type) {
    if (type == "Electric" || type == "Rock" || type == "Steel")
        return 0.5;
    else if (type == "Grass" || type == "Fighting" || type == "Bug")
        return 2;
    else
        return 1;
}

function calcPsychic(type) {
    if (type == "Psychic" || type == "Steel")
        return 0.5;
    else if (type == "Fighting" || type == "Poison")
        return 2;
    else if (type == "Dark")
        return 0;
    else
        return 1;
}

function calcBug(type) {
    if (type == "Fire" || type == "Fighting" || type == "Poison" || type == "Flying" || type == "Ghost" || type == "Steel" || type == "Flying")
        return 0.5;
    else if (type == "Grass" || type == "Psychic" || type == "Dark")
        return 2;
    else
        return 1;
}

function calcRock(type) {
    if (type == "Fighting" || type == "Ground" || type == "Steel")
        return 0.5;
    else if (type == "Fire" || type == "Ice" || type == "Flying" || type == "Bug")
        return 2;
    else
        return 1;
}

function calcGhost(type) {
    if (type == "Dark" || type == "Steel")
        return 0.5;
    else if (type == "Psychic" || type == "Ghost")
        return 2;
    else if (type == "Normal")
        return 0;
    else
        return 1;
}

function calcDragon(type) {
    if (type == "Steel")
        return 0.5;
    else if (type == "Dragon")
        return 2;
    else if (type == "Fairy")
        return 0
    else
        return 1;
}

function calcDark(type) {
    if (type == "Fighting" || type == "Dark" || type == "Steel" || type == "Fairy")
        return 0.5;
    else if (type == "Psychic" || type == "Ghost")
        return 2;
    else
        return 1;
}

function calcSteel(type) {
    if (type == "Fire" || type == "Water" || type == "Steel")
        return 0.5;
    else if (type == "Ice" || type == "Rock" || type == "Fairy")
        return 2;
    else
        return 1;
}

function calcFairy(type) {
    if (type == "Fire" || type == "Poison" || type == "Steel")
        return 0.5;
    else if (type == "Fighting" || type == "Dark" || type == "Dragon")
        return 2;
    else
        return 1;
}

module.exports = {
    show: function(type1, type2, channel, id) {
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
        image[18] = new jimp(1394, 42, "white");
    
        jimp.loadFont(jimp.FONT_SANS_16_WHITE).then(font => {
            image[0].print(font, 0, 0, {text: "Normal", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[1].print(font, 0, 0, {text: "Fire", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[2].print(font, 0, 0, {text: "Water", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[3].print(font, 0, 0, {text: "Grass", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[4].print(font, 0, 0, {text: "Electric", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[5].print(font, 0, 0, {text: "Ice", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[6].print(font, 0, 0, {text: "Fighting", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[7].print(font, 0, 0, {text: "Poison", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[8].print(font, 0, 0, {text: "Ground", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[9].print(font, 0, 0, {text: "Fly", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[10].print(font, 0, 0, {text: "Psychic", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[11].print(font, 0, 0, {text: "Bug", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[12].print(font, 0, 0, {text: "Rock", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[13].print(font, 0, 0, {text: "Ghost", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[14].print(font, 0, 0, {text: "Dragon", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[15].print(font, 0, 0, {text: "Dark", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[16].print(font, 0, 0, {text: "Steel", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            image[17].print(font, 0, 0, {text: "Fairy", alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
            for (i = 0; i < 17; i++)
                
            return image;
        }).then (image => {
            lineV = new jimp(2, 42, "black");
            lineH = new jimp(1394, 2, "black");
            jimp.loadFont(jimp.FONT_SANS_16_BLACK).then(font => {
                for (i = 0; i < 17; i++) {
                    image[18].composite(image[i], (i * 80 + i * 2), 0);
                    image[18].print(font, (i * 80 + i * 2), 22, {text: "x" + String(type[i]), alignmentX: jimp.HORIZONTAL_ALIGN_CENTER}, 80, 20);
                    image[18].composite(lineV, ((i + 1) * 80 + i * 2), 0);
                }
                image[18].composite(lineH, 0, 20);
                image[18].write(id + '.png');
                setTimeout(function (){channel.uploadFile(id + '.png');fs.unlinkSync(id + '.png')}, 250);
            });
        })
    }
}