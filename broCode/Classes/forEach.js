// for Each = method used to iterate over the elements of an array and apply a specified function to each element.
         
        //  array.forEach(callback)
        // element,index, array are provided 
 let numbers=[1,2,3,4,5];
   
 function double(element,index,array){
    array[index]=element * 2;
 }
 function triple(element,index,array){
    array[index]=element * 3;
 }
 function square(element,index,array){
    array[index]=Math.pow(element ,2);
 }
 function cube(element,index,array){
    array[index]=Math.pow(element ,3);
 }
 function display(element){
    console.log(element);
 }
numbers.forEach(square);
numbers.forEach(cube);
numbers.forEach(triple);
numbers.forEach(double);
numbers.forEach(display);
 

 fruits =["apple","orange","banana","coconut "];
 


    fruits.forEach(firstChars);
    fruits.forEach(display1);
    

  function display1(element){
    console.log(element);

  }
  function upperCase(element ,index,array){
    array[index]=element.toUpperCase();
  }

  function lowerCase(element ,index,array){
    array[index]=element.toLowerCase();
  }
  function firstChars(element ,index,array){
    array[index]=element.charAt(0).toUpperCase()+ element.slice(1);
  }

