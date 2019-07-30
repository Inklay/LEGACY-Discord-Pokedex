module.exports = {
    connect: function(client)
    {
        client.connect({ token: "NTE4ODg3NjA2OTg1OTQ5MTg2.XTN4aQ.-b09puFaD-uInBKr50aSe8Uy_aE" });
        client.Dispatcher.on("DISCONNECTED", e => {
            console.log("Can not connect to Discord, please verify your token and check Discord's server statues.");
            process.exit(1);
        });
    }
};