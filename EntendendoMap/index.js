//Vamos criar um programa para gerenciar um registro de estudantes, onde cada estudante tem um ID único e um nome. Usaremos um Map para armazenar esses registros e realizar operações como adicionar um estudante, remover um estudante e listar todos os estudantes.


// criação do map para armazenar os registros dos estudantes

let registros = new Map();


//função para adicionar um estudante
function adicionarEstudante(id, nome) {
    registros.set(id, nome);//Adiciona ou atualiza o estudante com o ID fornecido.
    console.log(`Estudante ${nome} com o ID ${id} foi adicionado com sucesso!`);
}


//função para remover um estudante pelo ID
function removerEstudante(id) {
    if(registros.has(id)){//metodo has verifica se o ID existe no MAP
      registros.delete(id); //remove o estudante com o ID fornecido.
    }else{
        console.log("Estudante não encontrado");
    }
    }

    //função para listar todos os estudantes
    function listarEstudantes() {
      console.log('Registros dos Estudantes:');
      registros.forEach((nome, id) => {
        console.log(`ID: ${id}, Nome: ${nome}`);
      });
    }


    adicionarEstudante(1, 'João');
    adicionarEstudante(2, 'Maria');
    adicionarEstudante(3, 'Pedro');
    listarEstudantes();
    removerEstudante(2);
    listarEstudantes();