function Employee(name, department, salary){
    this.name = name
    this.department = department
    this.salary = salary
}

Employee.prototype.login = function(){
    console.log(`${this.name} Logged In.`);
}

Employee.prototype.logout = function(){
    console.log(`${this.name} Logged Out.`);
}

Employee.prototype.work = function(){
    console.log(`${this.name} Working.`);
}

Employee.prototype.showDetails = function(){
    console.log(`Name       : ${this.name}`);
    console.log(`Department : ${this.department}`);
    console.log(`Salary     : ${this.salary}`);
}


let e1 = new Employee("Krunal Parmar", "Developer", 55000 )
let e2 = new Employee("Aditya Mishra", "Developer", 50000 )
let e3 = new Employee("Vishal Chaudary", "IT", 35000 )
let e4 = new Employee("Sonal Singh", "Operations", 30000 )
let e5 = new Employee("Sanjay Mshra", "Marketing", 27000 )

console.log(e1.__proto__); 

console.log(Employee.prototype); 

console.log(e1.__proto__===Employee.prototype); 


console.log("---------------------------------------------------");


console.log(e1.__proto__);
console.log(e1.__proto__.__proto__);
console.log(e1.__proto__.__proto__.__proto__);

console.log("---------------------------------------------------");

let intern = Object.create(e2)
intern.__proto__.internName = intern.__proto__.name
intern.__proto__.duration = "3 Months"

intern.login()
intern.showDetails()
console.log(intern.__proto__);


console.log("---------------------------------------------------");

Employee.prototype.promote = function(newDepartment){
    this.department = newDepartment
    console.log(`${this.name} has been promoted to ${this.department}.`);
}

e1.promote("Team Lead")
console.log(e1);
