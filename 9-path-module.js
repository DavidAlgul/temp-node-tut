const path = require("path")

console.log(path.sep)// returns my Platform specific seperator 

const filePath = path.join("./content///","subfolder", "test.txt")   //Joins a sequence of path segments using that specific platform seperators and it returns a normalized path 
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,"content","subfolder","test.txt") //accepts path segments and resolves it into an absolute path
console.log(absolute)
