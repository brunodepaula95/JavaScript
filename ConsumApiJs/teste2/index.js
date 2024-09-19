//Quando você faz a requisição dos dados , você faz pelo protocolo HTTP , dessa forma essa requisição é asyncrona, sendo assim ela não é instantanea como um console.log por exemplo, dessa forma, ela tem um tempo de espera, e ela devolve uma promessa(promise).

//JSON é uma forma padrão de escrita dos dados, ele é um padrão de comunicação entre linguagens

//Basicamente uma API é o Back-End, e cada uma tem uma documentação feita de onde você pode buscar as rotas 

//essa forma abaixo é usando o metodo GET
fetch('https://regres.in/api/users')
.then((res) => {
  console.log(res)
  if (res.ok) {
    res.json()
  } else {
    console.log('erro')
  }
})
.then(data => console.log(data))
.catch(error => console.log(error))

//essa formula abaixo é utilizando o metodo POST
fetch('https://regres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }, 
  body: JSON.stringify({
    name: 'Jorge',
  }),
})
.then((res) => res.json())
.then((data) => console.log(data))