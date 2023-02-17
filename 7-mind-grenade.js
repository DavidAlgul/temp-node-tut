const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is : ${num1+num2}`)
}

addValues() // Wenn wir eine Funktion hier aufrufen und dann in app.js ein require machen, dann wird in app.js die Funktion aufgerufen, ohne dass wir der Funktion eine Variable zuordnen
