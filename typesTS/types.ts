//String
let varName: string = "Show"

//Number
let varNumber: number = 2

//Boolean
let varBool: boolean = true

//Explicit types
let myAge
myAge = 28
console.log(typeof myAge)
myAge = "My age is 28"
console.log(typeof myAge)

//Array

let hobbies: string[] = ["Cook", "Play"]
console.log(hobbies[0])
console.log(typeof hobbies)

//Tuples 
let address: [string, number] = ["Itaberaba avenue", 8]

//Enum
enum Colors {
    Gray,
    Green = 100,
    Blue = 2,
    Yellow
}

let myColor: Colors = Colors.Green
console.log(myColor)
console.log(Colors.Blue)
console.log(Colors.Yellow)

//Any
let car: any = 'BMW'
console.log(car)
car = 
{
    brand: 'BMW',
    year: 2024
}
console.log(car)

