/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let newString = `${s1} ${s2} ${s3} ${s4} ${s5}`;

// Print out the concatenated string
console.log(newString);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let newPart1 = part1.slice(0, 3) + part1.slice(3).toUpperCase();
let newPart2 = part2.slice(0, 5) + part2.slice(5).toUpperCase();

// Print the cameLtaiL-formatted string
console.log(newPart1);
console.log(newPart2);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let tip = billTotal * 0.15;

// Print out the tipAmount

console.log(tip);
console.log(`the tip of ${billTotal} is ${tip}`);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

let numRandom = Math.floor(Math.random() * (10 - 1 + 1) + 1);

// Print the generated random number

console.log(`Number random between 1 and 10 is ${numRandom}`);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//False

const expression2 = a || b;
//True

const expression3 = !a && b;
//True

const expression4 = !(a && b);
//True

const expression5 = !a || !b;
//True

const expression6 = !(a || b);
//False

const expression7 = a && a;
//True

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);
