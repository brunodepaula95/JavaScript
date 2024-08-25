let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8) //essa função busca um valor dentro da array, nesse caso ele está buscando o numero 8, e ele informa em qual posição esse numero se encontra
if (pos == -1){//quando você digita um valor que não está dentro da array ele retorna -1, e esse if serve para que ao invez de ele aparecer -1 ele apareça essa mensagem abaixo
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}