var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log("Person Created");
    }
    Person.prototype.showPersonInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Phone: ").concat(this.phone, " "));
    };
    return Person;
}());
//Java Inheritance
// Superclass ve Subclass
// Sınıfların birbirlerinden türemeleri sonucunda superclass ve subclass kavramları ortaya çıkar.
// Bir sınıf başka bir sınıftan türüyorsa yani başka bir sınıfın değişkenlerini ve metotlarını miras alıyorsa subclass olarak adlandırılır.
// Eğer bir sınıftan başka bir sınıf miras alınıyor veya türetiliyorsa o sınıf superclass olarak adlandırılır.
// Superclass and Subclass
// As a result of the derivation of classes from each other, the concepts of superclass and subclass emerge.
// If a class derives from another class, that is, it inherits variables and methods from another class, it is called a subclass.
// If a class is inherited or derived from another class, that class is called a superclass.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, phone, salary) {
        var _this = _super.call(this, name, age, phone) || this;
        _this.salary = salary;
        console.log("Employee Created");
        return _this;
    }
    Employee.prototype.changeDepartment = function () {
        console.log("Chenging Departmant...");
    };
    Employee.prototype.showPersonInfo = function () {
        _super.prototype.showPersonInfo.call(this);
        console.log("Salary: ".concat(this.salary));
    };
    return Employee;
}(Person));
//let person = new Person("Ali Sakaroğlu", 27, "+905368218656");
//person.showPersonInfo();
//console.log(person.name); // It connot be used because it is private.
//console.log(person.age); // It can be used because it is public variable
var employee = new Employee("Ali Sakaroğlu", 27, "+905368218656", 14000);
employee.changeDepartment();
employee.showPersonInfo();
