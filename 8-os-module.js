const os = require("os")    // Weil es ein Build-In Module ist, müssen wir auf keinen Pfad zugreifen

//info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {  // Ein Objekt kreieren
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)