// function doubleIt(num){
//     return num*2;
// }

// const result = doubleIt(20);
// console.log(result);

// const doubleIt = function(){
//     //     return num * 2;
//     // }


// ES6 arrow function

// const doubleIt = num => num * 2;

// const result = doubleIt(50);
// console.log(result);

// const addIt = (x, y=20) => x + y;
// const result = addIt(50);
// console.log(result);

const doMath = (x, y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const finalResult = doMath(10, 10);
console.log(finalResult);