#! /usr/bin/env node

import inquirer from "inquirer";

const Currency : any = {

USD : 1, // Base Currency
PKR : 278.24, // Pakistani Rupees
TAKA : 109.30, // Bangladeshi Taka
Pound : 0.79, // UK currency
CAD : 1.36, // Canadian Dollar
INR : 83.28 // Indian Rupees
};

let person_answer =  await inquirer.prompt([{

     name : "from",
     message : "Enter the Currency which you want to convert",
     type : "list",
     choices : ["USD", "PKR", "TAKA", "POUND", "CAD", "INR"]

},

{

    name : "to",
    message : "Enter the Currency in which you want to convert",
    type : "list",
    choices : ["USD", "PKR", "TAKA", "POUND", "CAD", "INR"]

},

{

    name : "amount",
    message : "Enter Your Amount",
    type : "number"
}

]);

let fromAmount = Currency [person_answer.from];
let toAmount = Currency [person_answer.to];
let amount = person_answer.amount;
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);




















