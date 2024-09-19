const url = "https://jsonplaceholder.typicode.com/posts"

const loadingElement = document.querySelector("#loading")
const postsContainer = document.querySelector("#posts-container")

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");


const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

//get id from URL
const urlSearchParams = new URLSearchParams(window.location.search); //entrega um objeto que pode acessar os parametros que estao na url com o metodo get
const postId = urlSearchParams.get("id");

//get all posts
async function getAllPosts(){

    const response = await fetch(url)
    console.log(response);//até esse ponto ele bate no servidor para ver se retorna

    //agora abaixo é a forma como extrai essas informações em dados
    //da um await na resposta recebida e ativa o json
    const data = await response.json()
    console.log(data);//após isso recebmos os dados que vieram daquela resposta, como um array

    loadingElement.classList.add("hide");//assim quando receber os dados, o "carregando" irá sumir da tela.


    //abaixo utiliza o map para passar por cada um dos elementos que vieram da requisição
    //post pois é o nome da unidade no singular
    data.map((post) =>{

      const div = document.createElement("div");
      const title = document.createElement("h2");
      const body = document.createElement("p");
      const link = document.createElement("a");
      //após os elementos serem criados, precisamos colocar conteudo neles

      title.innerText = post.title;
      body.innerText = post.body;
      link.innerText = "Ler"
      link.setAttribute("href", `/post.html?id=${post.id}`);//dessa forma tem a pagina de post individual, assim você envia para outra pagina.


      //cria uma div que vai receber todos os elementos
      div.appendChild(title);
      div.appendChild(body);
      div.appendChild(link);

      postsContainer.appendChild(div);
    })
}

//get individual post

async function getPost(id){
  const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`)
  ])

  const dataPost = await responsePost.json();
  const dataComments = await responseComments.json();

  loadingElement.classList.add("hide");

  postPage.classList.remove("hide");

  const title = document.createElement("h1");
  const body = document.createElement("div");

  title.innerText = dataPost.title;
  body.innerText = dataPost.body;

  postContainer.appendChild(title);
  postContainer.appendChild(body);

  dataComments.map((comment) => {
    createComment(comment);
  })
}

function createComment(comment){

    const div = document.createElement("div");
    const email = document.createElement("h3");
    const commentBody = document.createElement("p");

    email.innerText = comment.email;
    commentBody.innerText = comment.body;

    div.appendChild(email);
    div.appendChild(commentBody);
    commentsContainer.appendChild(div);
}

//post a comment

async function postComment(comment){
  const response = await fetch(`${url}/${postId}/comments`, {
    method: "POST",
    body: comment,
    headers: {
      "Content-type": "application/json"
    }
  })

  const data = await response.json();
  createComment(data);
}

if(!postId){
    getAllPosts();
} else {
  getPost(postId);

  //Add event to comment form
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let comment = {
      email: emailInput.value,
      body: bodyInput.value
    }

    comment = JSON.stringify(comment);

    postComment(comment);
  })
}