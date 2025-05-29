console.clear()
/*7- Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.*/

let teclado = require(`prompt-sync`)();

let n: number = parseInt(teclado(`Digite o seu número: `));
let save = n;

for (let multi = n - 1; multi > 0; multi--) {
    n = n * multi;
}

console.log(n);