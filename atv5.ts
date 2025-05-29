console.clear()
/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.*/

let teclado = require(`prompt-sync`)();

let n = new Array();
let save: number = 0;

for (let x = 0; x <= 9; x++) {
    n[x] = parseInt(teclado(`Digite o número do índice ${x} do Array: `));
}

for (let z = 0; z < 10; z++) {
    for (let y = z + 1; y < 10; y++) {
        if (n[z] > n[y]) {
            save = n[z];
            n[z] = n[y];
            n[y] = save;
        }
    }
}

console.log(n)