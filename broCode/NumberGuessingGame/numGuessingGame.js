// NUMBER GUESSING GAME 
 const miniNum=1;
 const maxNum=100;
 const answer=Math.floor (Math.random()*(maxNum-miniNum+1)+ miniNum); 

  let attempts = 0;
  let guess;
  let running= true;
  while(running){
        guess= window.prompt(`Guess a number between ${miniNum}-${maxNum}`);
        guess= Number(guess);
        
        if(isNaN(guess)){
            window.alert("please enter a valid number");
        }
        else if ( guess<miniNum || guess>maxNum ){
                window.alert("please enter a valid number");
        }
        else{
            attempts++;
            if (guess < answer){
                window.alert("too low! try again!");
            }
            else if(guess > answer){
                    window.alert("too high! try again! ");
            }
            else{
                window.alert(`correct !the answer was${answer}.It took you ${attempts} attempts`)
                running = false
            }
            
        }
     }