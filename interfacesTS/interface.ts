interface Human {
    name: string,
    age?: number, //optional
    [prop: string]: any, //atribute unknown name
    greet(lastName: string): void
}

function sayHello(person: Human){
    console.log('Hello, ' + person.name)
}

function changeName(pessoa: Human){
    person.name = 'Doug'
}

const person = {
    name:  'Symon',
    age: 25,
    greet(lastName: string) {
        console.log('Hello, my name is ' + this.name + ' ' + lastName)
    }
}

sayHello(person)
changeName(person)
sayHello(person)
// sayHello({name: 'John', age: 15, height: '175 cm'})
person.greet("Barreto")

//Using classes
class Client implements Human {
    name:  string = ''
    lastBuy: Date = new Date
    greet(lastName: string) {
        console.log('Hello, my name is ' + this.name + ' ' + lastName)
    }
}

const myClient =  new Client()

myClient.name =  'Daniel'
myClient.greet('Suzuki')
console.log(myClient.lastBuy)

//Interface Function
interface calcFunction {
    (a: number, b: number): number
}

let pow: calcFunction

pow = function(base: number, exp: number): number {
    return base ** exp 
}

console.log(pow(2,4))