const Discordie = require('discordie');
const Events = Discordie.Events;
const client = new Discordie();
const connect = require('./connect.js')
const pokemon = require('./pokemon.js')

connect.connect(client);

client.Dispatcher.on("GATEWAY_READY", e => {
    client.User.setGame("pokedex + nom du pokemon");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    var content = e.message.content.toLowerCase();
    var channel = e.message.channel;

    if(content.startsWith("pokedex ") || content.startsWith("pokédex ")) {
        pokemon.french(content, channel);
    }
});
