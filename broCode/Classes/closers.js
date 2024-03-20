// closure = A function defined inside of another function ,the inner functionhas access to the variables and scope of the outer function. Allow for private varaibles and state maintenance     used frequently in JS framworks :React, Vue, Angular

function outer(){
    let message ="hello";
    function inner(){
        console.log(message)
    }
    inner();
}
outer();
function createCounter(){
    let count = 0;
    function increment(){
     
        count++;
        console.log(`count increase to${count}`);
    }
    function getCount(){
        return count;
    }
    return{increment, getCount};
}

const counter = createCounter();
 
counter.increment();
counter.increment();

console.log(`the current count is ${counter.getCount()}`);
console.log(`the current count is ${counter.getCount()}`);

function createGame(){
    let score =0;
    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }  

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }


    function getScore(){
       return score;
    }
    return {increaseScore,decreaseScore,getScore }; 
}

const game = createGame(); 

game.increaseScore(3);
game.decreaseScore(6);
console.log(`The final score is${game.getScore()}pts`);