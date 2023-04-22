import promptSync from "prompt-sync";

const prompt = promptSync();

/*
Desafio 1 - Entrada e Saída

Faça um programa com as características abaixo:

Leia 10 nomes, sem espaço em branco;
Imprima o terceiro nome da lista;
Imprima o sétimo nome da lista;
Imprima o nono nome da lista.

Entrada:
A entrada consiste em vários arquivos de teste, cada um com dez linhas e em cada linha
tem um nome de no até 30 caracteres e sem espaço em branco.
Conforme mostrado no exemplo de entrada a seguir.

Saída:
Para cada arquivo da entrada, terá um arquivo de saída.
E como mencionado no Desafio, gere três linhas conforme os procedimentos 2, 3 e 4.
Use o exemplo abaixo para clarear o que está sendo pedido.

Exemplos de entrada:          Exemplos de saída:
USP                           UFCG
UFPE                          ITA
UFCG                          URI
UFRN
UFRJ
IME
ITA
UNIOESTE
URI
UFG
*/

function inputAndOutput(): void {
  const input: (string | null)[] = new Array(10);

  for (let i = 0; i < input.length; i += 1) {
    input[i] = prompt(`Digite uma universidade como opção (${i + 1}): `);
    
  }

  console.log(`\n${input[2]}`);
  console.log(input[6]);
  console.log(input[9]);
}

// inputAndOutput();

/*
Desafio 2 - Coordenadas de um Ponto

Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. Vide a imagem "plano.png".
A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

Se o ponto estiver na origem, escreva a mensagem “Origem”.
Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

Entrada:
A entrada contem as coordenadas de um ponto.

Saída:
A saída deve apresentar o quadrante em que o ponto se encontra.

Exemplos de entrada:          Exemplos de saída:
4.5 -2.2                      Q4
0.1 0.1                       Q1
0.0 0.0                       Origem
*/

function pointCoordinates(): void {
  const input = prompt("Digite as coordenadas de x e y: ");
  const coordinates = input.split(" ");

  const x = Number(coordinates[0]);
  const y = Number(coordinates[1]);

  if (x === 0 && y === 0) {
    console.log("Origem");
  } 
  else if (x === 0 && y !== 0) {
    console.log("Eixo Y");
  } 
  else if (x !== 0 && y === 0) {
    console.log("Eixo X");
  } 
  else if (x > 0 && y > 0) {
    console.log("Q1");
  } 
  else if (x < 0 && y > 0) {
    console.log("Q2");
  } 
  else if (x < 0 && y < 0) {
    console.log("Q3");
  } 
  else if (x > 0 && y < 0) {
    console.log("Q4");
  }
}

// pointCoordinates();

/*
Desafio 3 - A Idade de Magali

Magali é mãe de três filhos que têm idades diferentes.
Ela notou que, neste ano, a soma das idades dos seus três filhos é igual à idade dela.
Neste problema, dada a idade de Magali e as idades de dois dos filhos, seu programa deve computar
e imprimir a idade do filho mais velho. Por exemplo, se sabemos que Magali tem 52 anos e
as idades conhecidas de dois dos filhos são 14 e 18 anos, então a idade do outro filho,
que não era conhecida, tem que ser 20 anos, pois a soma das três idades tem que ser 52.
Portanto, a idade do filho mais velho é 20. Em mais um exemplo, se Magali tem 47 anos
e as idades de dois dos filhos são 21 e 9 anos, então o outro filho tem que ter 17 anos e,
portanto, a idade do filho mais velho é 21.

Entrada:
A primeira linha da entrada contém um inteiro M representando a idade de Magali.
A segunda linha da entrada contém um inteiro A representando a idade de um dos filhos.
A terceira linha da entrada contém um inteiro B representando a idade de outro filho.

Saída:
Seu programa deve imprimir uma linha, contendo um número inteiro, representando a idade do filho mais velho de Magali.

Restrições:
• 40 ≤ M ≤ 110
• 1 ≤ A < M
• 1 ≤ B < M
• A ≠ B

Exemplos de entrada:          Exemplos de saída:
52                            20
14
18

47                            21
21
9
*/

function magalisAge(): void {
  const M = Number(prompt("Digite a idade de Magali: "));
  const A = Number(prompt("Digite a idade de um filho: "));
  const B = Number(prompt("Digite a idade de um outro filho: "));

  const C = M - (A + B);

  let result = A;
  if (result < B) result = B;
  if (result < C) result = C;

  console.log(`\nA idade do filho mais velho é ${result}`);
}

magalisAge();