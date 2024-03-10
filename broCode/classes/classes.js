//  classes = (ES6 feature) that provides a more structured and cleaner way to work with objects compared to traditional constructer functions ex.static keyword, encapsulation, inheritance
class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price:$${this.price.toFixed(2)} `);
    }
     
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}


  const salesTax= 0.10;
  const product1= new Product("Shirt", 19.89);
  const  product2 = new Product("Jacket",75.9);
  const product3 = new Product("Pants",99.9);

  product1.displayProduct();
  product2.displayProduct();
  product3.displayProduct();
    
   const total = product1.calculateTotal(salesTax);
   console.log(`total price (with tax): $${total.toFixed(2)}`);