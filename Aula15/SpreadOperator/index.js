//spread operator = ... allows an iterable such as an array or string to be expanded into separate elements(unpack the elements)

/*
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); ... = spread operator
let minimum = Math.max(...numbers);
console.log(minimum);

Esse codigo mostra o numero maximo e minino de um array. Se não colocar este operador ... ele aparece NaN
*/

//para juntar duas matrizes

/*
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables]
console.log(foods);
Rsult = apple, orange, banana, carrots, celery, potatoes

*/