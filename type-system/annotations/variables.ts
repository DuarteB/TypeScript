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