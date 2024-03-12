//nested objects = Objects insid of other objects. Allows you to represent more complex data structures, child object is enclosed by a parent object   


// Person{Adress{}, ContactInfo{}}                               ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

  const person1 ={
    fullName :"Randomperson1",
    age: 28,
    isStudent : true,
    hobbies:["racing","soccer","familytime"],
    address :{
        street: "123 One st.  ",
        city:"Dreamcity",
        country: "Germany",       
    }
  }
 for (const property in person1.address){
    console.log(person1.address[property]);
 }

  console.log(person1.fullName);
  console.log(person1.age);
  console.log(person1.isStudent);
  console.log(person1.hobbies[0]);
  console.log(person1.address); 



  class Person{

    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address)

    }

  }

  class Address{

    constructor(street,city,country){
        this.street=street;
        this.city= city;
        this.country= country;
    }
  }

  
const person5= new Person ("randonperson",30,"123 new st.","highcity", "Berlin");
console.log(person5.address.country)
