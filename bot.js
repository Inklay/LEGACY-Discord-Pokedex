const Discordie = require('discordie');
const Events = Discordie.Events;
const client = new Discordie();
const connect = require('./connect.js')
const pokemon = require('./pokemon.js')

connect.connect(client);

client.Dispatcher.on("GATEWAY_READY", e => {
    client.User.setGame({name: "pokedex help", type: 0});
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    var content = e.message.content.toLowerCase();
    var channel = e.message.channel;

    if(content == "pokedex help") {
        channel.sendMessage("pokedex [pokemon name] <mega> <shiny>");
    } else if((content.startsWith("pokedex ") || content.startsWith("pokédex ")) && content != "pokedex [pokemon name] <mega> <shiny>")
        pokemon.french(content, channel);
});
