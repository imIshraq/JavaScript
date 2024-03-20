//contructor = a special method for defining the properties and methods of objects 

function Car(make, model, year, color){
     this.make = make,
     this.model = model,
     this.year = year,
     this.color = color,
     this.drive = function(){console.log(`you drive ${this.model}`)}
      
}

const car1 = new Car("toyota", "innova", 2023, "black");
const car2 = new Car("hyundai", "alcazar", 2024, "starry night");
const car3 = new Car("mercedes", "benz", 2025, "classy red");



console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);


car1.drive();
car2.drive();
car3.drive();