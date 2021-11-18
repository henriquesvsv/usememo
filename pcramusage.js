const os = require('os');

setInterval(()=> {
    const {arch, platform , totalmem , freemem} = os;
    const usage = (freemem/totalmem)*100;
    const status = {
        os : platform(),
        Arch : arch(),
        totalRam : `${parseInt(totalmem()/1024/1024)} Mb`,
        freeRam : ` ${parseInt(freemem()/1024/1024)} MB`,
        Status : `${usage.toFixed(2)} %`
    }
    console.clear();
    console.table(status);
    exports.status = status;
}, 1000)
