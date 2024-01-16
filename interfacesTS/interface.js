"use strict";
function sayHello(person) {
    console.log('Hello, ' + person.name);
}
function changeName(pessoa) {
    person.name = 'Doug';
}
const person = {
    name: 'Symon',
    age: 25,
    greet(lastName) {
        console.log('Hello, my name is ' + this.name + ' ' + lastName);
    }
};
sayHello(person);
changeName(person);
sayHello(person);
// sayHello({name: 'John', age: 15, height: '175 cm'})
person.greet("Barreto");
//Using classes
class Client {
    constructor() {
        this.name = '';
        this.lastBuy = new Date;
    }
    greet(lastName) {
        console.log('Hello, my name is ' + this.name + ' ' + lastName);
    }
}
const myClient = new Client();
myClient.name = 'Daniel';
myClient.greet('Suzuki');
console.log(myClient.lastBuy);
let pow;
pow = function (base, exp) {
    return base ** exp;
};
console.log(pow(2, 4));
