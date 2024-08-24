function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO FALTAM DADOS!')//verificando se o usuario não deixou tudo zerado
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)//convertendo para numero
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando Passo1')
            p = 1
        }
        if(i < f){
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c}  \u{1F449}`
        }//nessa linha você cria uma variavel chamada C de contador e vai atribuindo aos valores inseridos, começando pelo inicio, enquanto o contador for menor ou igual ao fim, você adiciona ao contador ele mesmo + os passos

         } else {
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
         }
        res.innerHTML += `\u{1F3C1}`
    }
   
    

    
}