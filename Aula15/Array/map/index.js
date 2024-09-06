
//map() cria um novo array chamando uma função para cada elemento do array.

const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

persons.map(getFullName);

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}
//Result - Malcom Reynolds,Kaylee Frye,Jayne Cobb
//join()retorna o array como uma string.