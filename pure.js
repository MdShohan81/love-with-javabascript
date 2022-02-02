// const numbers = [10,10,11,14,33,50,90,09,99, 102,105,505,303,95,95,95,303, 102];

// function removeSameNumbers(numbers) {
//         const unique = [];
//         for(const element of numbers){
//             if(unique.indexOf(element) == -1){
//                 unique.push(element);
//             }
//         }
//         return unique;
// }
// const numbersUnique = removeSameNumbers(numbers);
// console.log(numbersUnique);
const unique = (value, index, self) => {
    return self.indexOf(value) === index;
}
const ages = [10,10,9,9,9,12,12];
const uniqueAges = ages.filter(unique);
console.log(uniqueAges);