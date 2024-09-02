//type conversion = change the datatype of a value to another(string, numbers, booleans)

/*let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/


//const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;



document.getElementById("mySubmit").onclick = function(){
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference;
}