module.exports = {
    connect: function(client)
    {
        client.connect({ token: "[Enter token here]" });
        client.Dispatcher.on("DISCONNECTED", e => {
            console.log("Can not connect to Discord, please verify your token and check Discord's server statues.");
            process.exit(1);
        });
    }
};