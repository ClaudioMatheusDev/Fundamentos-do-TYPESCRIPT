// 1 - TIPO NUMBER

let x: number = 10;

console.log(typeof x);

const y: number = 15.584848;

console.log(typeof y);

console.log(y);

console.log(y.toPrecision(3));

// 2 - TIPO STRING

const firstName: string = "Matheus";

console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Silva";

fullName = firstName + " " + lastName;

console.log(typeof fullName);

// 3 - TIPO BOOLEAN

let a: boolean = false;

console.log(a);
console.log(typeof a);

a = true;

console.log(a);

// 4 - INFERENCE E ANNOTATION

let ann: string = "Teste";

let inf = "Teste";

// ann = 1
// inf = 1
