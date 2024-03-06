// DICE ROLLER PROGRAM
function diceRoller(){
    const numOfDice=document.getElementById("numOfDice").value;
    const diceResult=document.getElementById("diceResult");
    const diceIamges=document.getElementById("diceImages");
    const values=[];
    const images=[];
    for(let i=0;i<numOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="images_dice/${value}.jpg" alt="Dice ${value}">`);
    }
    diceResult.textContent=`dice:${values.join(', ')}`;
    diceIamges.innerHTML= images.join('');
}