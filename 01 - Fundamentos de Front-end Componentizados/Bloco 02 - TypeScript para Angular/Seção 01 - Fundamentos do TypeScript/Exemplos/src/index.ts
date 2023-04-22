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
type ProductStore = {
  name: string;
  price: number;
  quantity: number;
}

let produto: ProductStore = {
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

/* Multi types */
function callPhone(phone: number | string): number | string {
  return phone;
}

/* Async */
async function getDatabase(id: number): Promise<string> {
  return "Mud";
}

/*
Interfaces
*/

// Usar type quando for para tipagem de objeto e interface se for uma classe
interface IRobot {
  id: number;
  name: string;
  sayHello(): string;
}

class Machine implements IRobot {
  id: number;
  name: string;
  
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  sayHello(): string {
    return `Hi! My name is ${this.name}. Nice to meet you!`;
  }
}

/*
Classes
*/

/* Data modifiers */
// Public: pode ser acessado tanto dentro quanto fora da classe. É o padrão
// Private: só pode ser acessado dentro da classe
// Protected: pode ser acessado dentro da classe originária e de classes herdeiras (subclasse)
// Readonly: somente para leitura
// ?: retira a obrigatoriedade da propriedade

class Warrior {
  name: string;
  power?: number;
  level: number;

  constructor(name: string, power: number, level: number) {
    this.name = name;
    this.power = power;
    this.level = level;
  }

  attack(): void {
    console.log(`Attack with ${this.power} points`);
  }
}

const biadhul = new Warrior("Biadhul", 138, 25);
biadhul.attack();

/* Subclasse */

class Wizard extends Warrior {
  mana: number;

  constructor(name: string, power: number, level: number, mana: number) {
    super(name, power, level);

    this.mana = mana;
  }

  attack(): void {
    console.log(`Attack with ${this.mana} points`);
  }
}

const quantis = new Wizard("Quantis", 95, 25, 300);

/*
Generics
*/

function concatArray<T>(...items: T[]): T[] {
  return new Array().concat(...items);
}

const numArr = concatArray<number[]>([1, 5, 9], [2, 8, 14]);
const strArr = concatArray<string[]>(["Maria", "José"], ["Ana", "João"]);

console.log(numArr);
console.log(strArr);

/*
Decorators
*/

/* Class decorator */
function showName(target: any): void {
  console.log(target);
}

@showName
class Collaborator { }
@showName
class Director { }

function apiVersion(version: string): any {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version });
  }
}

@apiVersion("1.20")
class API { }

const api = new API();
// console.log(api.__version);

/* Attribute decorator */
function minLength(length: number): any {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => _value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(`Size smaller than ${length}`);
      } else {
        _value = value;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    });
  }
}

class Car {
  @minLength(3)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const car = new Car("Fusca");
console.log(car.name);