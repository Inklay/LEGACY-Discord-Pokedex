module.exports = {
    connect: function(client)
    {
        console.log("connect.js: connecting");
        client.connect({ token: "NTE4ODg3NjA2OTg1OTQ5MTg2.XacnXQ.4XnWtKSkQB66oWpCa7Mvb1umv3s" });
        client.Dispatcher.on("DISCONNECTED", e => {
            console.log("connect.js: can not connect to Discord, please verify your token and check Discord's server statues.");
        });
    }
};
