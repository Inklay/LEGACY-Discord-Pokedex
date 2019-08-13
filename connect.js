module.exports = {
    connect: function(client)
    {
        client.connect({ token: "process.env.BOT_TOKEN" });
        client.Dispatcher.on("DISCONNECTED", e => {
            console.log("Can not connect to Discord, please verify your token and check Discord's server statues.");
        });
    }
};
