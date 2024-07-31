// 1 - TYPE GUARD

function sum(a: number | string, b: number | string){
	if(typeof a === "string" && typeof b === "string"){
		console.log(parseFloat(a) + parseFloat(b)); 
	} else if (typeof a === "number" && typeof b === "number"){
		console.log(a + b);
	} else {
		console.log("Impossível realizar a soma!");
	}
}

sum("4", "59");
sum(12, 42.3);
sum("5", 6);


// 2 - CHECANDO SE VALOR EXISTE

function operations(arr: number[], operation?: string | undefined){
	if(operation){
		if(operation === "sum"){
			const sum = arr.reduce((i,  total) => i * total); 
			console.log(sum);
		} else if(operation === "multiply"){
			const multiply = arr.reduce((i,  total) => i * total);
			console.log(multiply);
		}
	} else {
		console.log("Por favor, defina uma operação");
	}
}

operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");

// 3 - OPERADOR INSTACE OF

class User {
	name: string; 
	constructor(name: string){
		this.name = name;
	}
}

class SuperUser extends User {
	constructor(name: string){
		super(name);
	}
}

const jhon = new User("Jhon");
const paul = new SuperUser("Paul");

console.log(jhon);
console.log(paul);

function userGreeting(user: any){ 
	if(user instanceof SuperUser){
		console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
	} else if(user instanceof User){
		console.log(`Olá ${user.name}`);
	}
}

userGreeting(jhon);
userGreeting(paul);


// 4 - OPERADOR IN

class Dog {
	name: string; 
	breed?: string;

	constructor(name: string, breed?: string){
		this.name = name;
		if(breed){
			this.breed = breed;
		}
	}
}

const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");

function showDogDetails(dog: Dog){
	if('breed' in dog){
		console.log(`O cachorro é da raça ${dog.breed}`);
	} else {
		console.log("O cachorro é um SRD");
	}
}

showDogDetails(turca);
showDogDetails(bob);











}