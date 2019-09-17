const french = require('./move/french.js');
const english = require('./move/english.js');

module.exports = {
    move: function (language, content, channel)
    {
        switch (language) {
            case "français":
            case "francais":
                french.move(content, channel);
                break;
            case "english":
                english.move(content, channel);
                break;
            default:
                return;
        }
    }
};