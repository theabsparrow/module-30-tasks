const avarageArray = (arrays) => {
    let sum = 0;
    const elimentNum = arrays.length;
for(let array of arrays){
    const square = array * array;
    sum = sum + square;
   }
   const avarage = sum / elimentNum;
   return avarage;
}
const numbers = [5, 9, 3, 4, 6, 7, 8,];
const result = avarageArray(numbers);
console.log(result);