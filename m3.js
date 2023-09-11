const name = "Deanndra";
const assignment = "Module 3"
const car = {type:"2015 Mistubishi Lancer", model:"Lancer", color:"Blue"};

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name);
toUpper(assignment);
toUpper(car);

document.getElementById("demo").innerHTML = "The car I have currently and which is also my first car I have is" + car.type;
document.getElementById("demo").innerHTML = "The car's model is a" + car.model;
document.getElementById("demo").innerHTML = "The color of my car is a pretty nice" + car.color;


function displaytype(){
    document.getElementById("demo").innerHTML = car.type;
}

function displaymodel(){
    document.getElementById("demo").innerHTML = car.model;
}

function displaycolor(){
    document.getElementById("demo").innerHTML = car.color;
}