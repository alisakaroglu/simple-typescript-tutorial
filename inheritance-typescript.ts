class Person {
  //private name: string;
  name: string;
  age: number;
  phone: string;

  constructor(name: string, age: number, phone: string) {
    this.name = name;
    this.age = age;
    this.phone = phone;

    console.log("Person Created");
  }
  showPersonInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Phone: ${this.phone} `);
  }
}
//Java Inheritance
// Superclass ve Subclass
// Sınıfların birbirlerinden türemeleri sonucunda superclass ve subclass kavramları ortaya çıkar.
// Bir sınıf başka bir sınıftan türüyorsa yani başka bir sınıfın değişkenlerini ve metotlarını miras alıyorsa subclass olarak adlandırılır.
// Eğer bir sınıftan başka bir sınıf miras alınıyor veya türetiliyorsa o sınıf superclass olarak adlandırılır.

// Superclass and Subclass
// As a result of the derivation of classes from each other, the concepts of superclass and subclass emerge.
// If a class derives from another class, that is, it inherits variables and methods from another class, it is called a subclass.
// If a class is inherited or derived from another class, that class is called a superclass.

class Employee extends Person {
  salary: number;
  constructor(name: string, age: number, phone: string, salary: number) {
    super(name, age, phone);
    this.salary = salary;

    console.log("Employee Created");
  }
  changeDepartment() {
    console.log("Chenging Departmant...");
  }

  showPersonInfo() {
    super.showPersonInfo();
    console.log(`Salary: ${this.salary}`);
  }
}


//let person = new Person("Ali Sakaroğlu", 27, "+905368218656");
//person.showPersonInfo();
//console.log(person.name); // It connot be used because it is private.
//console.log(person.age); // It can be used because it is public variable

 let employee = new Employee("Ali Sakaroğlu", 27, "+905368218656", 14000);
 employee.changeDepartment();
 employee.showPersonInfo();

