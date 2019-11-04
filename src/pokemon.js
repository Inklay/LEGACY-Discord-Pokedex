const french = require('./pokemon/french.js');
const english = require('./pokemon/english.js');

module.exports = {
    pokemon: function (language, content, channel, id, type)
    {
        switch (language) {
            case "français":
            case "francais":
                french.pokemon(content, channel, id, type);
                break;
            case "english":
                english.pokemon(content, channel, id, type);
                break;
            default:
                return;
        }
    }
};