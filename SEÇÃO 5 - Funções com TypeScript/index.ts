// 1 - VOID
function withoutReturn() {
	console.log("Esta função não tem retorno!");
}

withoutReturn();

// 2 - CALLBACK COMO ARGUMENTO
function greeting(name: string){
	return `Olá ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string){
	console.log("Preparando a função");
	const greet = f(userName);
	console.log(greet);
}

preGreeting(greeting, "Matheus");
preGreeting(greeting, "João");

// 3 - GENERIC FUNCTION
function firstElement(arr) {
	return arr[0];
}


console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))
//console.log(firstElement("teste"))

function mergeObjects<U, T>(obj1: I, obj2: T){
	return{
		...obj1,
		...obj2
	}
}

const newObject = mergeObjects({name: "Matheus"}, {age: 30, job: "Programmer"});

console.log(newObject);

// 4 - CONSTRAINTS
function biggestNumber<T extends number | string>(a: T, b: T): T {
	let biggest: T;
	if (+a > +b) {
		biggest = a;
	} else {
		biggest = b;
	}
	return biggest;
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));

// 5 - ESPECIFICAR TIPO DE ARGUMENTO
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
	return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando"]));

// 6 - PARAMETROS OPCIONAIS
function modernGreeting(name: string, greet?: string): string {
	if (greet) {
		return `Olá ${greet} ${name}, tudo bem?`;
	}
	return `Olá ${name}, tudo bem?`;
}

console.log(modernGreeting("Matheus"));
console.log(modernGreeting("Pedro", "Dr."));

// 7 - PARAMETRO DEFAULT
function somaDefault(n: number, m: number = 10): number {
	return n + m;
} 

console.log(somaDefault(10));
console.log(somaDefault(15, 12));

// 8 - UNKNOWN
function doSomething(x: unknown) {
	if (Array.isArray(x)) {
		console.log(x[0]);
	} else if (typeof x === "number") {
		console.log("x é um número");
	}
}

doSomething([1, 2, 3]);
doSomething(5);

// 9 - NEVER
function showErrorMessage(msg: string): never {
	throw new Error(msg);
}

//showErrorMessage("Algum erro!");


// 10 - REST OPERATOR
function sumAll(...n: number[]): number {
	return n.reduce((sum, number) => sum + number, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 348, 2348));
// console.log(sumAll("teste"));

// 11 - DESTRUCTURING COMO PARAMETRO
function showProductDetails({ name, price }: { name: string, price: number }): string {
	return `O nome do produto é ${name} e ele custa R$${price}`;
}

const shirt = { name: "Camisa", price: 49.99 };

console.log(showProductDetails(shirt));
//console.log(showProductDetails({name: "teste", age: 30}))
//console.log(showProductDetails([1,2]));
