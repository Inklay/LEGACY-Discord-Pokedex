module.exports = {
    connect: function(client)
    {
        client.connect({ token: "[Enter token here]" });
        if (!client.connected) {
            console.log("Can not connect to Discord, please verify your token and check Discord's server statues.");
            process.exit(1);
        }
    }
};