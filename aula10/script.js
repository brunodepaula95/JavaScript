function contar(){ //cria a função iniciada no botar contar
    var ini = document.getElementById('txti') 
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res') // cria variaveis baseadas nos ids colocadas no html

    if( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ //confere o tamanho da variavel comparado a zero
        window.alert('ERRO FALTAM DADOS!')//verificando se o usuario não deixou tudo zerado
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)//convertendo para numero
        var f = Number(fim.value)//criando novas variaveis para que se converta em numeros
        var p = Number(passo.value)
        if (p <= 0){ // se o usuário não inserir nenhum numero de passos, o sistem emite um alerta que é um passo invalido e conta automaticamente de 1 em 1
            window.alert('Passo inválido! Considerando Passo1')
            p = 1 // se caso quiser que ele conte de mais em mais automaticamente basta trocar este numero
        }
        if(i < f){
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c}  \u{1F449}`
        }//nessa linha você cria uma variavel chamada C de contador e vai atribuindo aos valores inseridos, começando pelo inicio, enquanto o contador for menor ou igual ao fim, você adiciona ao contador ele mesmo + os passos

         } else {
            for(var c = i; c >= f; c -= p){// você passa os mesmos parametros,só que dessa vez você negativa os passos para que ele volte contando
                res.innerHTML += `${c} \u{1F449}`//codigo só funciona com crase para inserir emojis
            }
         }
        res.innerHTML += `\u{1F3C1}`
    }
   
    

    
}