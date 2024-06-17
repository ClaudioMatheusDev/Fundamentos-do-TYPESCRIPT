// 1 - ARRAYS

let numbers: number[] = [1, 2, 3];

numbers.push(5);

console.log(numbers[2]);

// numbers = "teste" // Comentado porque não é permitido atribuir string a um array de números

const nome: string[] = ["Matheus", "João"];

// nome.push(4) // Comentado porque não é permitido adicionar um número a um array de strings

// 2 - OUTRA SINTAXE ARRAY

const nuns: Array<number> = [100, 200];

nuns.push(300);

console.log(nuns);

// nuns.push("Teste") // Comentado porque não é permitido adicionar string a um array de números

console.log(nuns[0]);

// 3 - TIPO ANY

const arr1: any[] = [1, "teste", true, [], { nome: "Matheus" }];

console.log(arr1);

arr1.push([1, 2, 3]);

console.log(arr1);

// 4 - PARAMETROS TIPADOS

function soma(a: number, b: number): void {
    console.log(a + b);
}

soma(4, 5);

// soma("a", "b") // Comentado porque não é permitido passar strings para uma função que espera números

// 5 - RETORNO DE FUNÇÃO

function greeting(name: string): string {
    // return 5; // Comentado porque não é permitido retornar um número quando a função espera uma string
    return `Olá ${name}`;
}

console.log(greeting("Matheus"));

// 6 - FUNÇÃO ANONIMA

setTimeout(function () {
    const salary: number = 1000;

    console.log(parseFloat(salary.toString()));

    console.log(salary);

}, 2000);

// 7 - TIPOS DE OBJETO

function passCoordinates(coord: { x: number, y: number }) {
    console.log("X coordinates " + coord.x);
    console.log("Y coordinates " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };

passCoordinates(objCoord);

const PessoaObj: { nome: string, surname: string } = { nome: "Matheus", surname: "Ferreira" };

console.log(PessoaObj);











