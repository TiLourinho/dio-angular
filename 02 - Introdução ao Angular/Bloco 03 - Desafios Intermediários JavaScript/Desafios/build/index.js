"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
/*
Desafio 1 - Cálculo Simples

Neste problema, deve-se ler:
O código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1.
O código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2.
Após, calcule e mostre o valor a ser pago.

Entrada:
O arquivo de entrada contém duas linhas de dados.
Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída:
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo,
lembrando de deixar um espaço após os dois pontos e um espaço após o "R$".
O valor deverá ser apresentado com 2 casas após o ponto.

Exemplos de entrada:          Exemplos de saída:
15 1 5.30                     VALOR A PAGAR: R$ 15.50
16 2 5.10

13 2 15.30                    VALOR A PAGAR: R$ 51.40
161 4 5.20

1 1 15.10                     VALOR A PAGAR: R$ 30.20
2 1 15.10
*/
function partsSale() {
    const saleInput1 = prompt("Digite o código do produto, a quantidade de peças e seu valor unitário: ").split(" ");
    const saleInput2 = prompt("Digite o código do produto, a quantidade de peças e seu valor unitário: ").split(" ");
    const code1 = parseInt(saleInput1[0]);
    const quantity1 = parseInt(saleInput1[1]);
    const price1 = parseFloat(saleInput1[2]);
    const code2 = parseInt(saleInput2[0]);
    const quantity2 = parseInt(saleInput2[1]);
    const price2 = parseFloat(saleInput2[2]);
    const result = ((quantity1 * price1) + (quantity2 * price2)).toFixed(2);
    console.log("\nVENDA:");
    console.log(`PRODUTO: ${code1} -> ${quantity1} unidade(s)`);
    console.log(`PRODUTO: ${code2} -> ${quantity2} unidade(s)`);
    console.log(`VALOR A PAGAR: R$ ${result}`);
}
// partsSale();
/*
Desafio 2 - Distância Entre Dois Pontos

Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2)
e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, conforme a fórmula:

Raiz quadrada((x2 - x1)² + (y2 - y1)²)

Entrada:
O arquivo de entrada contém duas linhas de dados.
A primeira linha contém dois valores de ponto flutuante x1 e y1 e a segunda linha
contém dois valores de ponto flutuante x2 e y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

Exemplos de entrada:          Exemplos de saída:
1.0 7.0                       4.4721
5.0 9.0

-2.5 0.4                      16.1484
12.1 7.3

2.5 -0.4                      16.4575
-12.2 7.0
*/
function twoPoints() {
    const input1 = prompt("Digite as coordenadas do primeiro ponto: ").split(" ");
    const input2 = prompt("Digite as coordenadas do segundo ponto: ").split(" ");
    const x1 = parseFloat(input1[0]);
    const y1 = parseFloat(input1[1]);
    const x2 = parseFloat(input2[0]);
    const y2 = parseFloat(input2[1]);
    const calc = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
    const result = Math.sqrt(calc).toFixed(4);
    console.log(result);
}
// twoPoints();
/*
Desafio 3 - Pink e Cérebro

Pink e Cérebro dividem um apartamento e estão juntos 24h por dia desde o começo da pandemia.
Para passar o tempo, Pink cria problemas matemáticos para Cérebro resolver, o último deles
foi uma lista de números com a seguinte pergunta: quantos números da lista são múltiplos de 2, 3, 4 e 5?

Apesar de parecer simples, porém, quando a lista contém muitos números, Cérebro se confunde e acaba errando alguns cálculos.
Ajude Cérebro a resolver o desadio de Pink.

Entrada:
A primeira linha da entrada consiste em um inteiro N (1 ≤ N ≤1000), representando a quantidade de números na lista de Pink.
A segunda linha contém N inteiros Li (1 ≤ Li ≤ 100), representando os números da lista de Pink.

Saída
Imprima a quantidade de números múltiplos de 2, 3, 4 e 5 presentes na lista.
Observe a formatação da saída nos exemplos, pois ela deve ser seguida rigorosamente.

Exemplos de entrada:          Exemplos de saída:
5                             4 múltiplo(s) de 2
2 5 4 20 10                   0 múltiplo(s) de 3
                              2 múltiplo(s) de 4
                              3 múltiplo(s) de 5

3                             1 múltiplo(s) de 2
3 4 5                         1 múltiplo(s) de 3
                              1 múltiplo(s) de 4
                              1 múltiplo(s) de 5

1                             1 múltiplo(s) de 2
100                           0 múltiplo(s) de 3
                              1 múltiplo(s) de 4
                              1 múltiplo(s) de 5
*/
function multiples() {
    const n = parseInt(prompt("Digite a quantidade de números a ser inserida na lista: "));
    const numbersList = new Array(n);
    const inputNumbers = prompt("Digite os números da lista: ").split(" ");
    inputNumbers.forEach((number, index) => numbersList[index] = parseInt(number));
    let multiples = 0;
    for (let i = 2; i <= 5; i += 1) {
        numbersList.forEach((number) => {
            if (number % i == 0) {
                multiples += 1;
            }
        });
        console.log(`${multiples} múltiplo(s) de ${i}`);
        multiples = 0;
    }
}
multiples();
