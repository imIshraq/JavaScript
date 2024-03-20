//  object = A collection of related properties and/or methods canrepresent real world objects (people,products, places)   object = {key:value,function()}
 const person1 ={
    firstName : "Randomperson1",
    lastName : "Randompersonlast",
    age : 25,
    isEmployed: true,
    sayHello : function(){console.log("hi iam randomperson1")},
    eat : () => console.log(`${person1.firstName} eating donuts`),
 }

 const person2 ={
    firstName : "Randomperson2",
    lastName : "Randomperson2last",
    age : 23,
    isEmployed: false,
    sayHello1 : function(){console.log(`hi iam ${person2.firstName}` )},
    eat : () => console.log(`${person2.firstName} eating crabs`)
 }

 console.log(person1.firstName);
 console.log(person2.firstName);
 person1.sayHello();
 person2.sayHello1();
 person1.eat();
 person2.eat();