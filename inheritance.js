class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run() {
    console.log(this.name + " is running!");
  }

  shout() {
    console.log(this.name + " is shouting!");
  }

  info() {
    console.log("Animal name is " + this.name +" color is "+ this.color);
  }
}

class Dog extends Animal{
    jump(){
        console.log(this.name + " is long jump");
    }
}

let monkey = new Animal("monkey", "brown");
let dog = new Dog("dog", "white")
monkey.info()
monkey.run()
monkey.shout()

dog.jump(); // ues child class with parent method use 
dog.shout();
dog.info();

//monkey.jump(); // error not call with parent class with child method