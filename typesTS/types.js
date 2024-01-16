"use strict";
//String
let varName = "Show";
//Number
let varNumber = 2;
//Boolean
let varBool = true;
//Explicit types
let myAge;
myAge = 28;
console.log(typeof myAge);
myAge = "My age is 28";
console.log(typeof myAge);
//Array
let hobbies = ["Cook", "Play"];
console.log(hobbies[0]);
console.log(typeof hobbies);
//Tuples 
let address = ["Itaberaba avenue", 8];
//Enum
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Yellow"] = 3] = "Yellow";
})(Colors || (Colors = {}));
let myColor = Colors.Green;
console.log(myColor);
console.log(Colors.Blue);
console.log(Colors.Yellow);
//Any
let car = 'BMW';
console.log(car);
car =
    {
        brand: 'BMW',
        year: 2024
    };
console.log(car);
