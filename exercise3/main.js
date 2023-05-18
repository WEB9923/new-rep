let arr = [];

for (let i = 0; i < 5; i++) {
    arr.push(prompt(arr[i]))
}
console.log(arr);



// საშუალოს გამოთვლა
let numbersArray = [5,10,20,25,35,55,99,4,9,100];

function calculateAverage(arr) {
    let average = null;
    arr.forEach((number) => {
        average += number / arr.length
    })
    return average;
}
console.log(calculateAverage(numbersArray));



// filter method
let words = ["spray","limit","elite","exuberant","destruction","present"];
function filterWordsLessThen6(word) {
    word = word.filter(w => w.length < 6);
    return word;
}
console.log(filterWordsLessThen6(words));




