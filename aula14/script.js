    var num = document.getElementById('num')
    var lista = document.getElementById('flista') 
    var res = document.getElementById('res')
    var valores = [] //variavel criada para analisar os valores da array

    function isNumero(n){//verificar se n é um numero
        if(Number(n) >= 1 && Number(n) <= 100){//aceita só numeros entre 0 e 100
            return true
        } else {
            return false
        }

    }

    function inLista(n, l){
        if(l.indexOf(Number(n)) != -1){
            return true
        } else {
            return false
        }

    }

    function adicionar(){
            if(isNumero(num.value) && !inLista(num.value, valores)){ //num.value verifica se o valor na variavel num é um numero mesmo
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`//texto que aparece dentro da lista
            lista.appendChild(item)//comando para adicionar na lista
            res.innerHTML = ''//quando finalizar ele limpa o resultado

            } else {
                window.alert('Valor inválido ou já encontrado na lista.')
            }

            num.value = '' //para limpar a caixa de numero
            num.focus()//retorna o foco na caixa do numero após ele ser digitado, para não ter que ficar apagando o numero
    }

    function finalizar(){
        if (valores.length == 0) {
            window.alert('Adicione valores antes de finalizar!')
        }else {
            var tot = valores.length
            var maior = valores[0]
            var menor = valores[0]
            var soma = 0
            var media = 0
            for(var pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior)
                    maior = valores[pos]
                if(valores[pos < menor])
                    menor = valores[pos]
            }

            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>O maior numero informado foi ${maior}</p>`
            res.innerHTML += `<p>O menor numero informado foi ${menor}</p>`
            res.innerHTML += `<p>Somando todos os valores ${soma}</p>`
            res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
        }
    }
    
    
    
    
    
    
    
    
    
    
    
