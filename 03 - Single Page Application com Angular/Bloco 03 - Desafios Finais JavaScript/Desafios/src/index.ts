import PromptSync from 'prompt-sync';

const prompt = PromptSync();

/*
Desafio 1 - Ímpar, Par ou Roubo

Um novo jogo chamado Ímpar, Par ou Roubo (IPR) está se tornando muito popular. Esse jogo surgiu quando alguns amigos estavam sem conexão com a internet,
sem celular, sem computador e bastante desocupados. O jogo está tão popular que irá acontecer um campeonato mundial de IPR e cada país do mundo irá escolher
um representante para competir.

O jogo funciona da seguinte forma: dois jogadores participam, o jogador 1 escolhe entre par ou ímpar, então cada jogador escolhe um inteiro positivo,
se a soma desses números for par e o jogador 1 tiver escolhido par então o jogador 1 ganha, se a soma for ímpar o jogador 2 ganha. Caso o jogador 1 tivesse
escolhido ímpar ele ganharia se a soma fosse ímpar, caso a soma fosse par o jogador 2 ganharia.
Nada de diferente de um jogo de par ou ímpar convencional, correto?

A diferença do jogo é que o jogador 1 pode roubar e assim assegurar sua vitória independentemente do resultado do jogo de ímpar ou par convencional,
já o jogador 2 pode ou não acusar o jogador 1 de roubo. Com essas adições no jogo se o jogador 1 roubar e o jogador 2 acusar o roubo então o jogador 2 ganha,
caso o jogador 2 não acuse o roubo e o jogador 1 roubar então o jogador 1 ganha, caso o jogador 2 acuse o roubo, mas o jogador 1 não tiver roubado então o
jogador 1 ganha, se o jogador 1 não roubar e o jogador 2 não acusar o roubo o jogo segue como descrito anteriormente.

Você foi contratado pela OIIPR (Organização Internacional de Ímpar, Par ou Roubo) para desenvolver um programa que dada a escolha do jogador 1 entre par ou ímpar,
os números escolhidos como jogada e as ações dos jogadores (roubo/acusação) mostre quem foi o vencedor.

Entrada:
A entrada consite de uma única linha contendo 5 inteiros: p, j1, j2, r, a. ( 0 ≤ p, r, a ≤ 1 e 1 ≤ j1, j2 ≤ 100).

O p representa a escolha do jogador 1 (se p = 1 então o jogador 1 escolheu par, se p = 0 então o jogador 1 escolheu ímpar).
Os valores j1, j2, representam respectivamente o número escolhido pelo jogador 1 e pelo jogador 2.
O r representa se o jogador 1 roubou (se r = 1 então o jogador 1 roubou, se r = 0 então o jogador 1 não roubou),
a representa se o jogador 2 acusou o roubo (se a = 1 então o jogador 2 acusou o jogador 1 de roubo, se a = 0 então ele não acusou o jogador 1 de roubo).

Saída:
Imprima "Jogador 1 ganha!" se o jogador 1 ganhou ou "Jogador 2 ganha!" se o jogador 2 ganhou (sem as aspas).

Exemplos de entrada:          Exemplos de saída:
1 4 5 0 0                     Jogador 2 ganha!

1 4 5 1 0                     Jogador 1 ganha!

1 4 5 1 1                     Jogador 2 ganha!
*/

function IPR(): void {
  console.log("Digite as jogadas correspondentes:");
  const evenOrOdd: number = parseInt(prompt("- Escolha do primeiro jogado (1 se par, 0 se ímpar): "));
  const player1: number = parseInt(prompt("- O valor do primeiro jogador (entre 1 e 100): "));
  const player2: number = parseInt(prompt("- O valor do segundo jogador (entre 1 e 100): "));
  const isCheat: number = parseInt(prompt("- Se o primeiro jogador roubou ou não (1 se sim, 0 se não): "));
  const isAccusation: number = parseInt(prompt("- Se o segundo jogador acusou o primeiro de roubo (1 se sim, 0 se não): "));

  if (isCheat == 1 && isAccusation == 0) {
    console.log("Jogador 1 ganha!");
  } else if (isCheat == 0 && isAccusation == 1) {
    console.log("Jogador 1 ganha!");
  } else if (isCheat == 1 && isAccusation == 1) {
    console.log("Jogador 2 ganha!");
  } else if (evenOrOdd == 0 && (player1 + player2) % 2 !== 0) {
    console.log("Jogador 1 ganha!");
  } else if (evenOrOdd == 1 && (player1 + player2) % 2 == 0) {
    console.log("Jogador 1 ganha!");
  } else {
    console.log("Jogador 2 ganha!");
  }
}

IPR();

/*
Desafio 2 - Tempo de Jogo

Tendo como base a hora inicial e final de um jogo, calcule a duração do dele,
sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de,
60 minutos e máxima de 24 horas.

Entrada:
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

Saída:
Apresente a duração do jogo conforme exemplo abaixo.

Exemplos de entrada:          Exemplos de saída:
16 2                          O JOGO DUROU 10 HORA(S)

0 0                           O JOGO DUROU 24 HORA(S)

2 16                          O JOGO DUROU 14 HORA(S)
*/

function gameTime(): void {
  const input: string[] = prompt("Digite os horários de início e fim de jogo: ").split(" ");

  const gameStart: number = parseInt(input[0]);
  const gameEnd: number = parseInt(input[1]);

  if (gameStart > gameEnd) {
    console.log(`O JOGO DUROU ${(24 - (gameStart - gameEnd))} HORA(S)`);
  } else if (gameStart < gameEnd) {
    console.log(`O JOGO DUROU ${gameEnd - gameStart} HORA(S)`);
  } else {
    console.log("O JOGO DUROU 24 HORAS");
  }
}

gameTime();

/*
Desafio 3 - Dígitos

Dados dois números inteiros, A e B, quantos dígitos tem NM?

Exemplos:
2 e 10 - 2¹⁰ = 1024 => 4 dígitos
3 e 9 - 3⁹ = 19683 => 5 dígitos

Entrada:
A primeira linha tem um número inteiro E, representando a quantidade de casos de teste.
As E linhas seguintes contém dois números inteiros A e B (1 <= A, B <= 100).

Saída:
Para cada caso de teste de entrada do seu programa, você deve imprimir um número inteiro contendo
a quantidade de dígitos do resultado da potência calculada no respectivo caso de teste.

Exemplos de entrada:          Exemplos de saída:
4
1 1                           1
2 10                          4
3 9                           5
100 100                       201 
*/

function getDigits(): void {
  const counter: number = parseInt(prompt("Digite o número de testes a se fazer: "));

  for (let i: number = 0; i < counter; i += 1) {
    const input: string[] = prompt("Digite os números correspondentes de A e B: ").split(" ");

    const A: number = parseInt(input[0]);
    const B: number = parseInt(input[1]);

    const digits = Math.floor(Math.log10(Math.pow(A, B))) + 1;

    console.log(digits);
  }
}

getDigits();