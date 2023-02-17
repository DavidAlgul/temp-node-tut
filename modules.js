// Modules
// Node uses CommonJS under the hood, every file is module(by default)
//Modules – Encapsulated Code (only share minimum)


const amount = 9

if (amount < 10){
    console.log("small number");
}
else{
    console.log("large number");
}

console.log("hey its my first node app!!!");

console.log(__dirname);
console.log(__filename);
/*setInterval(() => {
    console.log("hello World")
}, 3000)*/

const names = require ("./4-names")      // In den Klammern muss man reinschreiben, wo das module lokalisert ist. Man muss jedes mal mit ./ anfangen. Wenn man höhere Ordner hat dann eben ../ etc.
console.log(names)

const sayHi = require("./5-utils")

sayHi("Susan")
sayHi(names.peter)
sayHi(names.john)

const data = require("./6-alternative-flavor")
console.log(data)

require("./7-mind-grenade") // When you import a module, you actually invoke it 