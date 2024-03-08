//  .reduce()= reduce the elements of an array to a single value

const prices=[5,10,15,20,25,30,];

const total= prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator,element){
    return accumulator + element;
}

const grades=[75,65,80,95,90,99];

const maximum= grades.reduce(highGrade);
const minimum =grades.reduce(lowGrade);

console.log(maximum);

console.log(minimum);

function highGrade(accumulator,element){
    return Math.max(accumulator,element);

}

function lowGrade(accumulator,element){
    return Math.min(accumulator,element);

}