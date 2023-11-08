// f0r loop

for(let counter = 0; counter <= 5; counter++){
    if(x == 3){
        break;
    }
    console.log("The counter value is "+counter);
}

cars = "Mecerdes Benz";

for(let i = 0; i < cars.lenght; i++){
    console.log(cars[i]);
}

// while 
let x = 1;

while(x > 10){
    console.log("The value is " + x);
    x++;
}

do{
    console.log("The number is " + x);
    x++;
} while(x < 5);

// foe each

cars = ["Benz","Toyota","Escalade","Kia"];


cars.forEach(function(car, index){
    console.log(`${index} `+ car);
})

console.log(`Welcome ${firstname}, ${lastname}`);

let price = 50;
let VAT = 0.25;

let total = `Total: ${(price + (1 + VAT)).toFixed(2)}`;
console.log(total);

{
    let car = "Benz";
    console.log(car);
}

function greetings(){
    let car = "Benz";
    console.log(car);
}
greetings();

let car = "Toyota";

function myCar(){
    console.log(car + "This local ");
}

console.log(car + "This is global");

myCar();

// arrow function

let name = () => {
    console.log("My name is David");
}

name();

let name1 = () => "My name is chu";

console.log(name1());

// object

let person = {
    name: "David",
    age: 20,
    eyeColor: "Black",
    exercise: function(){
        // console.log("Jogging");
        return this.name + " "+ this.eyeColor;
    }
}

console.log(person.name + " "+ person.age);

// console.log(person.exercise());

let result = person.exercise();
console.log(result);

<button onClick="document.getElementById('demo').innerHTML = Date()">
    The time is
</button>

<p id="demo"></p>

