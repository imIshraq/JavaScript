//for loop = repeat some code a limited amount of time
for (let i=0;i<=3;i++){
    console.log(i)
}

   for (let i=0; i<=15;i++){
       if(i==8){
            continue;
       }
       else{
            console.log(i);
       }
   }


for (let i=0; i<=15;i++){
    if(i==8){
         break;
    }
    else{
         console.log(i);
    }
}