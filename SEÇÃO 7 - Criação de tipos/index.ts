// 1 - GENERICS
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData("Testando generic"));
console.log(showData(true));
console.log(showData(["teste"]));


// 2 - CONSTRAINT EM GENERIC
function showProductName<T extends { name: string }>(obj: T): string {
    return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.90, category: "Roupa" };

console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
// console.log(showProductName(thirdObj)); // Isso causará um erro porque `thirdObj` não tem a propriedade `name`

// 3 - GENERICS COM INTERFACE
interface MyObject<T, U> {
    name: string;
    wheels: T;
    engine: U;
}

type Car = MyObject<number, number>;
type Pen = MyObject<boolean, boolean>;

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0 };
const myPen: Pen = { name: "Caneta BIC", wheels: false, engine: false };

console.log(myCar);
console.log(myPen);



// 4 - TYPE PARAMETERS
function getSomeKey<T, K extends keyof T>(obj: T, key: K){
	return `A chave ${key} está presente no objeto e tem valor de ${obj[key]}`;	
}

const server = {
	hd: '2TB',
	ram: '32GB';
}

console.log(getSomeKey(server, 'ram'));
//console.log(getSomeKey(serve, 'teste');


// 5 - KEYOF TYPE OPERATOR
type Character = { name: string; age: number; hasDriverLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`;
}

const myChar: Character = {
    name: "Matheus",
    age: 20,
    hasDriverLicense: true // Corrigido de 'hasDriveLicense' para 'hasDriverLicense'
};

console.log(showCharName(myChar, 'name')); // Output: "Matheus"
console.log(showCharName(myChar, 'age'));  // Output: "20"
// showCharName("teste", "asd"); // Isso causará um erro porque "teste" não é um objeto do tipo Character e "asd" não é uma chave válida

// 6 - TYPEOF TYPE OPERATOR

const userName: string = "Matheus";

const userName2: typeof userName = "João";

// const userName3: typeof userName = 14; // Isso causaria um erro de tipo

type x = typeof userName;

const userName4: x = "Joaquim";


// 7 - INDEXED ACCESS TYPES

// Definindo o tipo Truck
type Truck = { km: number; kg: number; description: string };

// Definindo o tipo Km como o tipo da propriedade 'km' de Truck
type Km = Truck['km'];

// Criando uma instância do tipo Truck com a propriedade corrigida
const newTruck: Truck = {
    km: 1000,
    kg: 5000,
    description: "Caminhão para pouca carga" // Corrigido de 'descriptin' para 'description'
};

// Função para mostrar o valor de km
function showKm(km: Km) {
    console.log(`O veículo tem a km de: ${km}`);
}

// Chamando a função com a propriedade 'km' do objeto newTruck
showKm(newTruck.km);

// Criando um novo objeto que corresponde ao tipo Truck, mas sem a propriedade 'description'
const newCar = {
    km: 1000,
    kg: 5000
};

// 8 - CONDITIONAL TYPES

interface A {}

interface B {}

type myType = B extends A ? number : string;

const someVar: myType = "Teste"; // Correto, porque `myType` é `string` e "Teste" é do tipo `string`

interface Teste {
    showName(): string;
}

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;

const example1: myTypeB = true; // Correto, porque `myTypeB` é `boolean`


// 9 - TEMPLATE LITERALS TYPE

type testA = "teste";

type CustomType = `Some ${testA}`;

const testing: CustomType = "Some teste"; 
// const testing2: CustomType = "Some text"; 

type a1 = "Testando";
type a2 = "Union";

type a3 = `${a1}` | `${a2}`; 
const example1: a3 = "Testando"; 
const example2: a3 = "Union"; 
// const example3: a3 = "Other"; // Erro



















