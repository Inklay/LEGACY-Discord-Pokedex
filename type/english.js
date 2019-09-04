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
    show: function(type1, type2, channel) {
        var normal = 1 * calcNormal(type1) * calcNormal(type2);
        var fire = 1 * calcFire(type1) * calcFire(type2);
        var water = 1 * calcWater(type1) * calcWater(type2);
        var grass = 1 * calcGrass(type1) * calcGrass(type2);
        var eletric = 1 * calcElectric(type1) * calcElectric(type2);
        var ice = 1 * calcIce(type1) * calcIce(type2);
        var fighting = 1 * calcFighting(type1) * calcFighting(type2);
        var poison = 1 * calcPoison(type1) * calcPoison(type2);
        var ground = 1 * calcGround(type1) * calcGround(type2);
        var flying = 1 * calcFlying(type1) * calcFlying(type2);
        var Psychic = 1 * calcPsychic(type1) * calcPsychic(type2);
        var bug = 1 * calcBug(type1) * calcBug(type2);
        var rock = 1 * calcRock(type1) * calcRock(type2);
        var ghost = 1 * calcGhost(type1) * calcGhost(type2);
        var dragon = 1 * calcDragon(type1) * calcDragon(type2);
        var dark = 1 * calcDark(type1) * calcDark(type2);
        var steel = 1 * calcSteel(type1) * calcSteel(type2);
        var fairy = 1 * calcFairy(type1) * calcFairy(type2);

        channel.sendMessage(
        "Normal: \tx" + normal +
        "\nFire:    \t\tx" + fire +
        "\nWater:   \tx" + water +
        "\nGrass:    \tx" + grass +
        "\nElectric: \tx" + eletric +
        "\nIce:         \tx" + ice +
        "\nFighting:    x" + fighting +
        "\nPoison:  \tx" + poison +
        "\nGround:    x" + ground +
        "\nFlying:   \tx" + flying +
        "\nPsychic:\tx" + Psychic +
        "\nBug:       \tx" + bug +
        "\nRock:     \tx" + rock +
        "\nGhost:   \tx" + ghost +
        "\nDragon:\tx" + dragon +
        "\nDark: \t\tx" + dark +
        "\nSteel:    \tx" +  steel +
        "\nFairy:    \tx" + fairy);
    }
}