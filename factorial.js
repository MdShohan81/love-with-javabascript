// function getFactorial (num){
//     let factorial = num;
//     for(let i = 1; i <= num; i++){
//         factorial *= i;
//     }
//     return factorial;
// }
// let result = getFactorial(10);
// console.log(result);



function getNumber (num) {
    let facto = 1;
    for(i = 1; i <= num; i++){
        facto = facto * i;
    }
    return facto;
}
let result = getNumber(5);
console.log(result)