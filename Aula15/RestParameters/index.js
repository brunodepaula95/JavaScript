//rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array. 

//spread = expands an array into separate elements
//rest = bundles separate elements into an array

/*
function sum(...numbers){

    let result = 0;
    for(let number of numbers){
          result += number;
    }
    return result;
}
-------------------------------------
function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }

    return result / number.length;
}

const total = getAverage(75, 100, 85, 90, 50);
console.log(total);
*/
//-------------------------------------
/*
function combineStrings(...strings){
    return strings.join(" ");

}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants");
console.log(fullName);
Resul = Mr. Spongebob Squarepants*/