// 1 - CAMPOS DE CLASS

class User {
	name!: string;
	age!: number;
}

const matheus = new User();

console.log(matheus);

matheus.name = "Matheus";
//matheus.job = "Programmer"; // Comentado, pois 'job' não é uma propriedade da classe User

// 2 - CONSTRUCTOR

class NewUser {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

const joao = new NewUser("João", 22);

console.log(joao);

//const pedro = new NewUser(12, 12); // Comentado, pois os tipos não correspondem

// 3 - CAMPOS READONLY

class Car {
	name: string;
	readonly wheels = 4;

	constructor(name: string) {
		this.name = name;
	}
}

const fusca = new Car("Fusca");

console.log(fusca);
console.log(fusca.wheels);

fusca.name = "Fusca Turbo";

//fusca.wheels = 5; // Comentado, pois 'wheels' é readonly

// 4 - HERANÇA E SUPER

class Machine {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
	guns: number;

	constructor(name: string, guns: number) {
		super(name);
		this.guns = guns;
	}
}

const destroyer = new KillerMachine("Destroyer", 4);

console.log(trator);
console.log(destroyer); // Corrigido para mostrar a instância correta

// 5 - MÉTODOS

class Dwarf {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	greeting() {
		console.log("Hey Stranger!");
	}
}

const jimmy = new Dwarf("Jimmy");

console.log(jimmy.name);

jimmy.greeting();

console.log(jimmy);

// 6 - THIS 

class Truck {
	model: string;
	hp: number;

	constructor(model: string, hp: number) {
		this.model = model;
		this.hp = hp;
	}

	showDetails() {
		console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
	}
}

const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);

volvo.showDetails();
scania.showDetails(); // Corrigido para usar um único ponto

// 7 - UTILIZANDO GETTERS

class Person {
	name: string;
	surname: string;

	constructor(name: string, surname: string) {
		this.name = name;
		this.surname = surname;
	}

	get fullName() {
		return this.name + " " + this.surname;
	}
}

const claudioMatheus = new Person("Claudio", "Matheus");

console.log(claudioMatheus.name);
console.log(claudioMatheus.fullName);

// 8 - UTILIZANDO SETTERS

class Coords {
	x!: number;
	y!: number;
	
	set fillX(x: number) {
		if (x === 0) {
			return;
		}
		this.x = x;
		console.log("X inserido com sucesso");
	}

	set fillY(y: number) {
		if (y === 0) {
			return;
		}
		this.y = y;
		console.log("Y inserido com sucesso");
	}

	get getCoords() {
		return `X: ${this.x} e Y: ${this.y}`;
	}
}

const myCoords = new Coords();

myCoords.fillX = 15;
myCoords.fillY = 0;
myCoords.fillY = 10;

console.log(myCoords);
console.log(myCoords.getCoords);

// 9 - IMPLEMENTS

interface showTitle {
	itemTitle(): string;
}

class BlogPost implements showTitle {
	title: string;

	constructor(title: string) {
		this.title = title;
	}

	itemTitle() {
		return `O título do post é: ${this.title}`;
	}
}

const myPost = new BlogPost("Hello World");

console.log(myPost.itemTitle());

class TestingInterface implements showTitle {
	title: string;

	constructor(title: string) {
		this.title = title;
	}

	itemTitle() {
		return `O título do post é: ${this.title}`;
	}
}

// 10 - OVERRIDE D MÉTODOS
class Base{
	someMethod(){
		console.log("Alguma coisa");
	}
}

class Nova extends Base{
	someMethod(){
		console.log("Testando outra coisa");
	}
}

const myObject = new Nova();

myObject.somMethod();