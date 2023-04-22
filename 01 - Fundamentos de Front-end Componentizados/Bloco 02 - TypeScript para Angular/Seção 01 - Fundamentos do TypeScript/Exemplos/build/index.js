"use strict";
/*
Tipos no TypeScript
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* Tipos primitivos: boolean, number e string */
let isWearingSuit = true;
let fullName = "John Wick";
let age = 59;
let height = 1.85;
/* Tipos especiais: null e undefined */
let releaseDate = null;
let publisher = undefined;
/* Tipos abrangentes: any e void */
// Para quando uma função não retorna nada
function returnQuery() { }
;
// Para quando um retorno é imprevisível
function returnView() { }
;
/* Tipo object */
// Sem previsibilidade
let person = {
    name: "John",
    city: "New York",
    age: 59
};
let produto = {
    name: "tennis",
    price: 89.99,
    quantity: 50
};
/* Arrays */
let names1 = ["Aloysius", "Devadander", "Abercrombie"];
let names2 = ["Jerry", "Blaileen", "Wynona"];
// Multi types
let infos = ["Harold", 3477];
/* Tuplas */
// É um vetor com informações ordenadas
let ticket = ["water bill", 99.99, 59751364];
/* Tipo date */
let birthday = new Date("2023-07-28 17:00");
console.log(birthday.toString());
/*
Funções
*/
function addNumber(x, y) {
    return x + y;
}
function helloSomeone(name) {
    return `Hello ${name}!`;
}
let sum = addNumber(6, 7);
let hello = helloSomeone("Tommy");
/* Multi types */
function callPhone(phone) {
    return phone;
}
/* Async */
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Mud";
    });
}
class Machine {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
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
    constructor(name, power, level) {
        this.name = name;
        this.power = power;
        this.level = level;
    }
    attack() {
        console.log(`Attack with ${this.power} points`);
    }
}
const biadhul = new Warrior("Biadhul", 138, 25);
biadhul.attack();
/* Subclasse */
class Wizard extends Warrior {
    constructor(name, power, level, mana) {
        super(name, power, level);
        this.mana = mana;
    }
    attack() {
        console.log(`Attack with ${this.mana} points`);
    }
}
const quantis = new Wizard("Quantis", 95, 25, 300);
/*
Generics
*/
function concatArray(...items) {
    return new Array().concat(...items);
}
const numArr = concatArray([1, 5, 9], [2, 8, 14]);
const strArr = concatArray(["Maria", "José"], ["Ana", "João"]);
console.log(numArr);
console.log(strArr);
/*
Decorators
*/
function showName(target) {
    console.log(target);
}
let Collaborator = class Collaborator {
};
Collaborator = __decorate([
    showName
], Collaborator);
let Director = class Director {
};
Director = __decorate([
    showName
], Director);
