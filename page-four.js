const concateArray = (x, y) => {
    // const jointArray = x.concat(y)
    const jointArray = [...x, ...y];
    const maxNum = Math.max(...jointArray);
    return maxNum;
}
const arrayOne = [12, 14, 65, 18, 26, 39,];
const arrayTwo = [24, 27, 15, 11, 19, 28,];
const result = concateArray(arrayOne, arrayTwo);
console.log(result); 