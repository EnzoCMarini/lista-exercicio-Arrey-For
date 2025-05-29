console.clear()
/*3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.*/

let teclado = require(`prompt-sync`)();

let meuArray: number[] = [];
let maior: number = 0;

for (let cont = 0; cont <= 9; cont++) {
    meuArray[cont] = parseInt(teclado(`Digite o ${cont + 1}º: `));
    if (meuArray[cont] > maior) {
        maior = meuArray[cont];
    }
}

console.log(maior);

/*function maior(): number{
    let maior: number = 0;
    if (meuArray[cont] > maior){
        maior = meuArray[]
    }
    return maior
}

/*if (meuArray[0] > maior){
    maior = meuArray[0];
}
if (meuArray[1] > maior){
    maior = meuArray[1];
}
if (meuArray[2] > maior){
    maior = meuArray[2];
}
if (meuArray[3] > maior){
    maior = meuArray[3];
}
if (meuArray[4] > maior){
    maior = meuArray[4];
}
if (meuArray[5] > maior){
    maior = meuArray[5];
}
if (meuArray[6] > maior){
    maior = meuArray[6];
}
if (meuArray[7] > maior){
    maior = meuArray[7];
}
if (meuArray[8] > maior){
    maior = meuArray[8];
}
if (meuArray[9] > maior){
    maior = meuArray[9];
}

console.log(maior)*/