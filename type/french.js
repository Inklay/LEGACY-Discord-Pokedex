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
        var psychic = 1 * calcPsychic(type1) * calcPsychic(type2);
        var bug = 1 * calcBug(type1) * calcBug(type2);
        var rock = 1 * calcRock(type1) * calcRock(type2);
        var ghost = 1 * calcGhost(type1) * calcGhost(type2);
        var dragon = 1 * calcDragon(type1) * calcDragon(type2);
        var dark = 1 * calcDark(type1) * calcDark(type2);
        var steel = 1 * calcSteel(type1) * calcSteel(type2);
        var fairy = 1 * calcFairy(type1) * calcFairy(type2);

        channel.sendMessage(
        "Normal: \tx" + normal +
        "\nFeu:    \t\tx" + fire +
        "\nEau:    \t\tx" + water +
        "\nPlante:   \tx" + grass +
        "\nÉlectrik: \tx" + eletric +
        "\nGlace:    \tx" + ice +
        "\nCombat:    x" + fighting +
        "\nPoison:  \tx" + poison +
        "\nSol:     \t\tx" + ground +
        "\nVol:    \t\tx" + flying +
        "\nPsy:    \t\tx" + psychic +
        "\nInsecte: \tx" + bug +
        "\nRoche:   \tx" + rock +
        "\nSpectre:\tx" + ghost +
        "\nDragon: \tx" + dragon +
        "\nTénèbres: x" + dark +
        "\nAcier:    \tx" +  steel +
        "\nFée:       \tx" + fairy);
    }
}