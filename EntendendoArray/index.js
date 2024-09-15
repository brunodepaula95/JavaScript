//criação do array para armazenar as tarefas

let tarefas = [];

//Função para adicionar uma tarefa

function adicionarTarefa(tarefa){
  tarefas.push(tarefa); //Adiciona a tarefa ao array
  console.log("Tarefa adicionada com sucesso!");

}

//Função para remover uma tarefa pelo indice

function removerTarefa(indice){
  if(indice >= 0 && indice < tarefas.length){ //Verifica se o indice é válido
    tarefas.splice(indice, 1); //Remove a tarefa do array
    console.log("Tarefa removida com sucesso!");
  }else{
    console.log("Indice inválido!");
  }
}


//função para listar todas as tarefas

function listarTarefas(){
  console.log('Tarefas do dia:');
  for(let i = 0; i < tarefas.length; i++){
    console.log(`${i + 1}. ${tarefas[i]}`);
  }
  }
