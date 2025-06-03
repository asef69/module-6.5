function sortNumbers(scrambledArray) {
    const sortedArray = [...scrambledArray];
    sortedArray.sort((a, b) => a - b);
    return sortedArray;
}
const scrambledNumbers = [15, 3, 8, 20, 11, 1, 7, 19, 2, 10, 14, 6, 18, 12, 9, 4, 16, 5, 13, 17];
const sortedNumbers = sortNumbers(scrambledNumbers);
console.log("Original scrambled array:", scrambledNumbers);
console.log("Sorted array:", sortedNumbers);