var pm2 = require('pm2');
var config = require('../config/production');

pm2.connect(function(err) {
    if (err) {
        console.error(err);
        process.exit(2);
    }

    pm2.start({
        script    : './server.js',         // Script to be run
        exec_mode : 'cluster',        // Allow your app to be clustered
        instances : config.workers,                // Optional: Scale your app by 4
        // max_memory_restart : '100M'   // Optional: Restart your app if it reaches 100Mo
    }, function(err, apps) {
        pm2.disconnect();   // Disconnect from PM2
        if (err) throw err
    });
});

module.exports = pm2;