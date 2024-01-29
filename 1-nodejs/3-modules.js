// Modules - Encapsulated Code (only share minimun)
// CommonJS, every file is module (by default)
// require is call the fileJs 
const names = require('./4-names')    //console.log(names)
const sayHi = require('./5-utils')
// sayHi('mar')
// sayHi(names.john)
// sayHi(names.peter)
const data = require('./6-alternative-flavor')
// console.log(data)
require('./7-mind-grenade') //to call the function located at 7-mind-grenade.js