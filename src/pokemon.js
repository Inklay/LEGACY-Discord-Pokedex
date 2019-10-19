const french = require('./pokemon/french.js');
const english = require('./pokemon/english.js');

module.exports = {
    pokemon: function (language, content, channel, id)
    {
        switch (language) {
            case "français":
            case "francais":
                french.pokemon(content, channel, id);
                break;
            case "english":
                english.pokemon(content, channel, id);
                break;
            default:
                return;
        }
    }
};