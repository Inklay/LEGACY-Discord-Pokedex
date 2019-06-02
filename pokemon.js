const french = require('./pokemon/french.js');
const english = require('./pokemon/english.js');

module.exports = {
    pokemon: function (language, content, channel)
    {
        switch (language) {
            case "français":
            case "francais":
                french.pokemon(content, channel);
                break;
            case "english":
                english.pokemon(content, channel);
                break;
            default:
                return;
        }
    }
};