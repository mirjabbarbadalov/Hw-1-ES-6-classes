// Theoretical Questions :

/* Question 1

First of all, prototypical inheritance applies for objects and classes in js, but mostly in classes.
If we create Class it has own methods and variables. Also it has prototype. When we want to see the result of our object,
in console, it gives us at the end of the result prototype, prototype means that our object takes methods from its
prototype object, For example We have main object and its child object, child object uses prototype of main object.

Inheritance meaning is that, usage of prototype methods from another object which this prototype belongs it.


for example : 

class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

Car.prototype.modelAndName = function(){
  console.log(`Your car's name is ${this.model} and price is ${this.price}`);
}

const bmw = new Car('BMW', '66k') //Creates new object from Car
 console.log(bmw);   //This Gives us bmw object, model : 'BMW' , price : ''66k, and prototype : whic has fundamental object methods
 console.log(bmw.__proto__)   // Gives us prototype which takes form Car class.
 console.log(bmw.__proto__ === Car.prototype);   //Gives us true, because we know that child.__proto__ === Parent.prototype


  Car.prototype.modelAndName = function(){
  console.log(`Your car's name is ${this.model} and price is ${this.price}`);
}  
      Here we created new custom prototype of Car class, which new objects, for example our bmw object
      can inherit with new function inside the Car class : modelAndName();

*/



/* Question 2

    Because If we use Parent and Child class, we have to use extends property when declare new child class,
    And child class has same variables with its parent class, Inside the class every time we have to write constructor method
    to declare new variables, and without super() we can not declare variables which are same with its Parent class.

    For example: 

class Animal{             //Our Parent Class
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  get getInfo(){
    console.log(`This animal is ${this.name}, it is ${this.age} years old`);
  }
}

const animal1 = new Animal('Bear', 6);
animal1.getInfo;



class Bird extends Animal{            // Our child class one new property from parent is wing, We have to use super() for name and age.
  constructor(name,age, wing){
      super(name, age);
    // this.name = name;
    // this.age = age;
    this.wing = wing;
  }

  get wingInfo(){
    console.log(`${this.name} has ${this.wing} wings`);
  }

}

const bird1 = new Bird('Eagle', 2, 6 );
bird1.getInfo;
bird1.wingInfo;

*/


class Employee{
  constructor(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  get getFullInfo(){
    console.log(`Our employee is ${this.name}, ${this.age} years old and salary is ${this.salary}k`);
  }

  set setNewSalary(newSalary){
    this.salary = newSalary;
  }

}

const employee1 = new Employee('Mirjabbar', '19', 3.5)
employee1.getFullInfo;
employee1.setNewSalary = 4.5
employee1.getFullInfo;



class Programmer extends Employee{
  constructor(name, age, salary, lang){
    super(name, age, salary);
    this.lang = lang;
  }

  get getProgrammerSalary(){
    console.log(`${this.name}'s salary is ${(this.salary*3).toFixed(2)}k`);
  }

  get getListLanguages(){
    console.log(`${this.name} knows ${this.lang}`);
  }

  set addNewLang(newLang){
    this.lang.push(newLang)
  }


}

const programmer1 = new Programmer('Ziya', '16',1.2, ['HTML', 'CSS', 'JS', 'Python', 'C#'] )

programmer1.getFullInfo;
programmer1.getProgrammerSalary;
programmer1.getListLanguages;
programmer1.addNewLang = 'React';
programmer1.getListLanguages;
