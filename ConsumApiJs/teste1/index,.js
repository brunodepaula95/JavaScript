//vamos utilizar o fetch neste metodo
//em requisições, status 200 é OK, quer dizer que foi tudo certo 

const URL = 'https://dummyjson.com/products'; //aqui vamos consumir desta url, para retornar uma lista de produtos

//quando você declara o await, isso mostra para o codigo que vc vai esperar pela requisição
//async faz uma função retornar uma Promise
//await faz o codigo esperar pela resposta da requisição
//fetch é uma função nativa do javascript que faz requisições HTTP
//fetch retorna uma Promise
//fetch retorna uma resposta, que é um objeto Response
//Response.json() retorna o corpo da resposta como um objeto JSON
//JSON.parse() converte uma string JSON em um objeto JavaScript
//JSON.stringify() converte um objeto JavaScript em uma string JSON

async function chamarApi() {
  const resp = await fetch(URL); //aqui passa a URL como parametro. Ela não é uma resposta rapida, por conta dela ter que buscar as informações em outro lugar, por isso ela é assincrona
  if(resp.status === 200){
    const obj = await resp.json();
  }

}