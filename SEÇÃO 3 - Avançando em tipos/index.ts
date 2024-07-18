// 1 - ARRAYS

let numbers: number[] = [1, 2, 3];

numbers.push(5);

console.log(numbers[2]);

// numbers = "teste"; // Erro, pois numbers é do tipo number[]

const nome: string[] = ["Matheus", "João"];

// nome.push(4); // Erro, pois nome é do tipo string[]


// 2 - OUTRA SINTAXE ARRAY

const nuns: Array<number> = [100, 200];

nuns.push(300);

console.log(nuns);

// nuns.push("Teste"); // Erro, pois nuns é do tipo number[]

console.log(nuns[0]);


// 3 - TIPO ANY

const arr1: any[] = [1, "teste", true, [], { nome: "Matheus" }];

console.log(arr1);

arr1.push([1, 2, 3]);

console.log(arr1);


// 4 - PARAMETROS TIPADOS

function soma(a: number, b: number) {
    console.log(a + b);
}

soma(4, 5);

// soma("a", "b"); // Erro, pois os parâmetros são do tipo number


// 5 - RETORNO DE FUNÇÃO

function greeting(name: string): string {
    // return 5; // Erro, pois a função deve retornar uma string
    return `Olá ${name}`;
}

console.log(greeting("Matheus"));


// 6 - FUNÇÃO ANONIMA

setTimeout(function() {
    const sallary: number = 1000;

    // console.log(parseFloat(sallary)); // Não faz sentido converter um number para float
    console.log(sallary);

}, 2000);


// 7 - TIPOS DE OBJETO

function passCoordinates(coord: { x: number, y: number }) {
    console.log("X coordinates " + coord.x);
    console.log("Y coordinates " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };

passCoordinates(objCoord);

const PessoaObj: { nome: string, surname: string } = { nome: "Matheus", surname: "Ferreira" };


// 8 - PROPS OPCIONAIS

function showNumbers(a: number, b: number, c?: number){
	console.log("A: " + a);
	console.log("B: " + b);
	console.log("C: " + c);
    if(c){
        console.log("C: " + c);
    }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);
//showNumbers()

// 9 - VALINDADO ARGUMENTOS OPCIONAL

function advancedGreeting(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        console.log(`Olá, ${firstName} ${lastName}, tudo bem?`);
    } else {
        console.log(`Olá, ${firstName}, tudo bem?`);
    }
}

console.log (advancedGreeting("Matheus", "Ferreira"));
console.log (advancedGreeting("Matheus"));


// 10 - UNION TYPE

function showBalance(balance: string | number){
    console.log (`O saldo da conta é ${balance}`);
}

showBalance(100);
showBalance("500");
//showBalance(true); Conseguindo determinar um tipo que aceita mais dados

const arr2: Array<number | string | boolean> = [1, "teste", true];


// 11 - AVANÇANDO EM UNION TYPES

function showUserRole(role: boolean | string ){
    if (typeof role === "boolean"){
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));