//  this = is a keyword and reference to the object where THIS is used (the object depends on the immediate context)           person.name =this.name
//  it does not work arrow functions




const person1={
    name:"Randonperson1",
    favFood :"hamburgers",
    sayHello: function(){console.log(`Hi! i am ${this .name}`)},
    eat : function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat();

const person2={
    name:"Randonperson2",
    favFood :"pizza's",
    sayHello: function(){console.log(`Hi! i am ${this .name}`)},
    eat : function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person2.sayHello();
person2.eat();