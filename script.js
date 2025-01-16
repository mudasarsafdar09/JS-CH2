// Artimetic Operators
// let a = 5;
// let b = 2;
// // let c = a + b;
// console.log("a = ", a, "& b = ", b, );
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b); //5^2 = 25

// Unary Operator
let a = 5;
let b = 2;

let c = 10;

console.log("a = ", a, "& b = ", b, "& c = ", c,);
a++;
b--;
c++;
console.log("a = ", a);
console.log("b = ", b);
console.log("c = ", c);

let d = 20;
console.log("d = ",d);
// d++;
console.log("d++ = ",d++);  //20
console.log("d = ",d);  //21

let e = 30;
console.log("e = ",e);
// e++;
console.log("++e = ",++e);  //31
console.log("e = ",e);

//Asignment Operators
let f = 10;
let g = 8;

f += 4; // f = f + 4
console.log("f = ", f);

g **= 4; // g = g ** 4
console.log("g = ", g);

let m = 25;
console.log("m = ",m);
console.log("m x m x m x m = ", m ** 4);

console.log("m = ", m ** 4);

//Compairson Operators
let h = 5;
let i = 5;

console.log("h == i", h == i);

let h2 = 5;
let i2 = 5;

console.log("h2 != i2", h2 != i2);

let k = 5; //number
let s = "5"; //string -> number

console.log("k === s", k === s);

let x = 5; //number
let y = "5"; //string -> number

console.log("x !== y", x !== y);

let o = 6;
let p = 5;

// console.log("5 > 3", o > p);
// console.log("5 < 3", o < p);

console.log("6 >= 5", o >= p);
// console.log("5 <= 5", o <= p);

//Logical Operators
//Logical AND &&
let l = 6;
let r = 5;

// let cond1 =  //true
// let cond2 = ; //true
console.log("cond1 && cond2 = ", l > r && l === 6);

//Logical OR ||
let oo = 6;
let rr = 10;

// let cond1 =  //true
// let cond2 = ; //true
console.log("cond1 || cond2 = ", oo > rr || rr === 6);

//Logical Not !
let n = 6;
let t = 10;

console.log("!(n > t) = ", !(n > t) );
console.log("!(n < t) = ", !(n < t) );

//Conditional Statements
// let age = 16;
// if(age > 18) {
//     console.log("you can vote");
// }

// if(age < 18) {
//     console.log("you CANNOT vote");
// }  

let mode = "light";
let color;

if(mode === "dark") {
    color = "black";
} else {
    color = "white";
}

// if(mode === "light") {
//     color = "white";
// }

console.log(color);

let age = 16;

if (age >= 18) {
    console.log("vote");
} else {
    console.log("not vote");
}

//Conditional Statements 
//odd or even
let num = 20;

if (num % 2 === 0) {
    console.log(num," is even");
} else {
    console.log(num,"is odd");
}

let moode = "dark";
let coloor;

if(moode === "dark") {
    coloor = "black";
} else if(moode === "blue") {
    coloor = "blue";
} else if(moode === "pink")  {
    coloor = "pink";
} else {
    coloor = "white";
}

console.log("coloor is",coloor);

if(moode === "dark") {
    console.log(moode);
}
//syntax -> rules

{
    let age = 25;

    let result = age >= 18 ? "adult" : "not adult"; // Simler, compact if-else
    console.log(result);
}

// Let's Practics Q1
{
let num = prompt("enter a number:");

if(num % 5 === 0) {
    console.log(num,"is a multiple of 5");
} else {
    console.log(num,"is NOT a multiple of 5");
}
// console.log(name);

}

//Q2 JS Program
{
let score = prompt("Enter your score (0-100)");
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if(score >= 70 && score <= 89) {
    grade = "B";
} else if(score >=60 && ccore <= 69) {
    grade = "C";
} else if(score >= 50 && score <= 59) {
    grade = "D";
} else if(score >= 0 && score <= 49) {
    grade = "F";
}

console.log("according to your scores, your grade was : ",grade);
}