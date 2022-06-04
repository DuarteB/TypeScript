let age: number = 20;

let firstName: string = 'Eduardo';

let  isMarried: boolean = false;

let noValue: null = null;

let noAssigned: undefined = undefined;

let today: Date = new Date();

//***************//

let planets: string[] = [ 'Earth', 'Mars', 'Saturn', 'Jupiter' ];

let luckyNumbers: number[] = [ 3, 5, 7 ];

let completed: boolean[] = [ true, false, false, true ]

//Classes
class Phone{}
let phone: Phone = new Phone();

//Object Literals
let product: { name: string; price: number } = {
    name: 'pen',
    price: 15     
}

//Functions
const printer: (content: string) => void = (content: string) => {
    console.log(content)
}

//Functions that returns the 'any' type
const person = '{"name": "Eduardo", "age": 20}';
const newPerson: { name: string; age: number } = JSON.parse(person);
console.log(newPerson);

//Initialize variable later
const forecast = ['sunny', 'rain', 'wind', 'cloudy'];
let isSunny: boolean;

for(let i = 0; i < forecast.length; i++) {
    if(forecast[i] === 'sunny') {
        isSunny = true
    }
}

//Type can't be inferred correctly
let temperatures = [8, 5, -2];
let subzero: boolean | number = false;

for(let i = 0; i < temperatures.length; i++) {
    if(temperatures[i] < 0) {
        subzero = temperatures[i];
    }
}