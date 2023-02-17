const {readFile,writeFile}= require("fs");
// Ein Callback wird erst ausgeführt, wenn eine Funktion zu ende durchlaufen wurde. Wie zum Beispiel bei einem Eventlistener für einen Button. Hier wird das Callback jedes mal ausgeführt, sobald wir auf den Button drücken
console.log("start")
readFile("./content/first.txt","utf8",(err,result)=>{  //Ohne UTF8 Kodierung würden wir nur den Buffer bekommen: 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile("./content/second.txt","utf8",(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile("./content/result-async.txt",`Here is the result: ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log("done with this task")
        })

    })
})
console.log("starting next task")