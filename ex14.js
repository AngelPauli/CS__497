//branches and conditionals
let x = document.getElementById('input').value;
 let y = prompt("enter a number: ");
 console.log(x);
 console.log(y);
console.log(typeof(x));
console.log(typeof(y));

if (x === 5){
    console.log("x is 5");
} else {
    console.log("x is not 5");
}
let show = (x==5) ? "x is 5" : "x is not 5"

console.log(show);
//Task1. Write a JavaScript code that will check a variable age. Prompt the age from the user. 
//If it's greater than 18 output to the console “Old Enough”, otherwise output “Too Young!”. 
//Use console.log() for this question.

let age = prompt("Enter your age: ");
console.log(age);

if (age > 18){
    console.log("Old enough")
} else {
    console.log("Too Young!")
}


//Task2. Write a JavaScript code that will check the variable temperature. 

// Temperature range    |	Text
// Temp < 32	        | Freezing weather
// Between 32 and 41	| Very Cold weather
// Between 42 and 51	| Cold weather
// Between 52 and 61	| It’s nice today!
// Above 61	            | It’s warm today!

let weather = document.getElementById("temp").value;
console.log(weather);
if (weather < 32) {
    document.getElementById("weather").innerText = "Freezing weather";

}else if (weather >= 32 && weather <= 41) {
    document.getElementById("weather").innerText = "Very Cold weather";

}else if (weather >= 42 && weather <= 51) {
    document.getElementById("weather").innerText = "Cold weather";

}else if (weather >= 52 && weather <= 61) {
    document.getElementById("weather").innerText = "It's nice today!";

}else {
    document.getElementById("weather").innerText = "It's warm today!";

}
