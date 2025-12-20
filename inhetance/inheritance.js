class cat{
  constructor(name, type){
    this.name = name;
    this.color = "black and white";
    this.type = type;
  } 
rang(){
  console.log(`My cat color is ${this.color} `);
}
speak(){
  console.log(`${this.name} says meow`);
} 
abs(){
  console.log(`This is an abstract method in ${this.type}`);
}

}
let myCat = new cat("Whiskers", "Siamese");
myCat.rang();
myCat.speak();
myCat.abs();

class animal extends cat{ 
  eat(){
    console.log(`${this.name} is eating humans for survival`);
  }
  speak(){
    console.log(`${this.name} roars loudly`); 
  }
}

let myAnimal = new animal("Lion", "Wild");
myAnimal.rang();
myAnimal.speak();
myAnimal.abs();
myAnimal.eat();