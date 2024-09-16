//criando um novo Set

let meuSet = new Set();

//adicionando elementos ao set
meuSet.add('apple');
meuSet.add('banana');
meuSet.add('apple'); //duplicata não será adicionada

//Verificando se um elemento está presente
console.log(meuSet.has('apple')); //saída: true

//removendo um elemento
meuSet.delete('banana');

//iterando sobre os elementos
meuSet.forEach((valor) =>{
    console.log(valor);
})//saida : apple

//tamanho do set
console.log(meuSet.size);

//para iterar dentro do conjunto você tambem pode usar o key
//dessa forma abaixo ele vai pela ordem de inserção
for (let key of meuSet.values()){
    console.log(key);
}