// Operating system
const os = require('os')

console.log('Operating system: ', os.platform())

console.log('Architecture processor: ', os.arch())

console.log('Info about processors: ', os.cpus())

console.log('Free memory: ', os.freemem())

console.log('Total memory: ', os.totalmem())

console.log('Home directory: ', os.homedir())

console.log('How much time system is working (in sec): ', os.uptime())

