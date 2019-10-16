module.exports = {
    connect: function(client)
    {
        console.log("connect.js: connecting");
        client.connect({ token: process.env.BOT_TOKEN });
        client.Dispatcher.on("DISCONNECTED", e => {
            console.log("connect.js: can not connect to Discord, please verify your token and check Discord's server statues.");
        });
    }
};
