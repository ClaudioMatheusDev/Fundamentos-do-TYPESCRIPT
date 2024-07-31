// 1 - TIPO DE OBJETO PARA FUNÇÃO COM INTERFACE
interface Product {
    name: string;
    price: number;
    isAvailable: boolean; 
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true 
};

showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 129.99, isAvailable: false });

// 2 - PROPRIEDADE OPCIONAL EM INTERFACE
interface User {
    email: string;
    role?: string; 
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`);

    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}

const u1: User = { email: "claudiomatheus055@gmail.com", role: "Admin" };
const u2: User = { email: "matheus@gmail.com" };

showUserDetails(u1);
showUserDetails(u2);

// 3 - PROPRIEDADES READONLY
interface Car {
    brand: string;
    readonly wheels: number; 
}

const fusca: Car = {
    brand: "VW",
    wheels: 4 
};

console.log(fusca);

// fusca.wheels = 5; // Não pode ser alterada depois de definida

// 4 - INDEX SIGNATURE
interface CoordObject {
    [index: string]: number;
}

let coords: CoordObject = {
    x: 10 // Trocado ";" por ","
};

coords.y = 15;

console.log(coords);

// coords.z = "teste"; // Não funciona porque foi definido como um valor number

// 5 - EXTENDING TYPES / HERANÇA DE INTERFACES
interface Human {
    name: string;
    age: number;
}

interface Superman extends Human {
    superpowers: string[];
}

const matheus: Human = {
    name: "Matheus",
    age: 20 // Trocado ";" por ","
};

console.log(matheus);

const goku: Superman = {
    name: "Goku",
    age: 50, // Trocado ";" por ","
    superpowers: ["Kamehameha", "Genki Dama"]
};

console.log(goku);
console.log(goku.superpowers[1]);

// 6 - INTERSECTION TYPES
interface Gun {
    type: string;
    caliber: number;
}

type HumanWithGun = Human & { gun: Gun };

const arnold: HumanWithGun = {
    name: "Arnold",
    age: 45, // Adicionado ","
    gun: { type: "Shotgun", caliber: 12 }
};

console.log(arnold);

console.log(arnold.gun.caliber);

// 7 - READONLY ARRAY
let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"];

// myArray[3] = "Mamão";

console.log(myArray);

myArray.forEach((item) => {
    console.log("Fruta: " + item);
});

// myArray = myArray.map((item) => { // Não permitido, array é apenas leitura
//     return `Fruta: ${item}`;
// });

// 8 - TUPLAS
type FiveNumbers = [number, number, number, number, number];

const myNumberArray: FiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2: FiveNumbers = [1, 2, 4, 5, 6]; // Não pode ter mais números do que definido
// const mixedArray: FiveNumbers = [1, true, "teste", 4, 5]; // Não pode misturar tipos

console.log(myNumberArray);

type NameAndAge = [string, number];

const anotherUser: NameAndAge = ["Matheus", 25];

console.log(anotherUser[0]);

anotherUser[0] = "João";

console.log(anotherUser[0]);

// 9 - TUPLAS COM READONLY
function showNumbers(numbers: readonly [number, number]) {
    // numbers[0] = 10; // Não permitido modificar valores de tupla com readonly
    console.log(numbers[0]);
    console.log(numbers[1]);
}

showNumbers([1, 2]);
