"use strict";
/*
Tipos no TypeScript
*/
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
let hello = helloSomeone("Tommy, the cat");
console.log(hello);
