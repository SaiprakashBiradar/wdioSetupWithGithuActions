const cron  = require('node-cron');
const shell = require('shelljs');

cron.schedule('0 56 10 * * * *',function(){
    console.log("scheduler running");
    if(shell.exec("npx wdio run ./wdio.conf.js").code!==0){
        console.log("dir prin")
    }
});