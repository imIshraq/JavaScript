// fisher-yates algorithm
// shuffle the elements of an array
const cards =["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];


console.log(cards);
function shuffle(){
    for (let i= array.length-1; i>0 ;i--){
        const random =Math.floor(Math.random()*i+1);

        [array[i],array[random]]= [array[random],array[i]];
    }
}