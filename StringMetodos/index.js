// string methods = allow you to manipulate and work with text strings

let userName = "Bruno";

//pega a primeira ocorrencia da leta que escrever
//console.log(userName.indexOf("o"));
//pega a ultima ocorrencia da leta escrita entre parenteses
//console.log(userName.lastIndexOf("o"));
//mede o tamanho de uma string
//console.log(userName.length);

//tira os espaços em branco da string
//userName = userName.trim();

//serve para repetir a string, de acordo com a quantidade que inserir entre parenteses
//userName = userName.repeat(2);


//serve para conferir como que começa uma string, de acordo com o que você colocar entre parenteses funciona bem com ifs
//let userName = 'Bruno';
//let result  = userName.startsWith(" "); Verifica se a string começa com um espaço
// o endsWith tem a mesma função s´q no final

//esse serve para remover algo da string
//let phoneNumber = "123-456-7890";
//phoneNumber = phoneNumber.replaceAll("-", "/"); Nesse caso irá substituir - por /

//adiciona algo a string para preencher
//let phoneNumber = "123-456-7890";
//phoneNumber = phoneNumber.padStart(15, "0");
//Preencha a string até chegar a 15 caracteres com o 0
//padStart inicio
//padEnd fim


/* --------------------*/

//string slicing = creating a substring from a portion of another string
//string.slice(start, end)
// const email = "bro1@gmail.com"
//let username = email.slice(0, email.indexOf("@"));
//console.log(username);
//nesse codigo ele coloca do indice 0 e procura até o @, então imprime
//let extension = email.slice(email.indexOf("@") +1);
//dessa forma ele pega o restante do email a partir do @, porem com o +1 ele elimina o primeiro caractere

//---------------------------

//Metodo Chaining - Calling one method after another in one continuous line of conde

let username = window.prompt("Enter your username: ");

//username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
//esse metodo ele faz com que consiga ser colocado um metodo atras do outro na mesma linha


//---------------
//= assignment operator
//==comparison operator (compare if values are equal)
//=== stric equality operator (compare if values & datatype are equal) Confere se até os dados colocados são iguais
// != inequality operator
// !== strict inequality operator


//-----------------
//for loop = repeat some code a LIMITED amount of times(repetira algum codigo a uma quantidade limitada de vezes)
