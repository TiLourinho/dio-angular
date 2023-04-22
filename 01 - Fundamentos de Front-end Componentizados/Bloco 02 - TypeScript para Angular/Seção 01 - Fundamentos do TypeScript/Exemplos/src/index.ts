/*
Tipos no TypeScript
*/

/* Tipos primitivos: boolean, number e string */
let isWearingSuit: boolean = true;
let fullName: string = "John Wick";
let age: number = 59;
let height: number = 1.85;

/* Tipos especiais: null e undefined */
let releaseDate: null = null;
let publisher: undefined = undefined;

/* Tipos abrangentes: any e void */
// Para quando uma função não retorna nada
function returnQuery(): void { };

// Para quando um retorno é imprevisível
function returnView(): any { };

/* Tipo object */
// Sem previsibilidade
let person: object = {
  name: "John",
  city: "New York",
  age: 59
}

// Com previsibilidade
type productStore = {
  name: string;
  price: number;
  quantity: number;
}

let produto: productStore = {
  name: "tennis",
  price: 89.99,
  quantity: 50
}

/* Arrays */
let names1: string[] = ["Aloysius", "Devadander", "Abercrombie"];
let names2: Array<string> = ["Jerry", "Blaileen", "Wynona"];

// Multi types
let infos: (string | number)[] = ["Harold", 3477];

/* Tuplas */
// É um vetor com informações ordenadas
let ticket: [string, number, number] = ["water bill", 99.99, 59751364];

/* Tipo date */
let birthday: Date = new Date("2023-07-28 17:00");
console.log(birthday.toString());

/*
Funções
*/

function addNumber(x: number, y: number): number {
  return x + y;
}
function helloSomeone(name: string): string {
  return `Hello ${name}!`;
}

let sum: number = addNumber(6, 7);
let hello: string = helloSomeone("Tommy");

// Multi types
function callPhone(phone: number | string): number | string {
  return phone;
}

// Async
async function getDatabase(id: number): Promise<string> {
  return "Mud";
}