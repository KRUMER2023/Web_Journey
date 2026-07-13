
// Student here is a constructor function (used with `new` to create instances)
function Student(name, div, rollno){
    this.name = name
    this.div = div
    this.rollno = rollno
    
}

let college  = {
    clgName : "Parul University",
    Location : "Waghodia, Gujarat, India"
}

Student.prototype.__proto__ = college

Student.prototype.prtDetails = function(){
    console.log(`
        Name : ${this.name}
        Clg  : ${this.clgName}
        Loc  : ${this.Location}
        Div  : ${this.div}
        Roll : ${this.rollno}
        `);
}

Student.prototype.updateDiv = function(div){
    this.div = div
}


let s1 = new Student("Krunal", "7M2", 8)
let s2 = new Student("Aditya", "7M1", 12)
let s3 = new Student("Vishal", "7M3", 32)

s1.prtDetails()
s2.prtDetails()
s3.prtDetails()

console.log("After updating div of s1");
s1.updateDiv("7M1")
s1.prtDetails()

console.log("After updating div of s2");
s2.updateDiv("7M3")
s2.prtDetails()




console.log("------------------------------------");

console.log("Now using __proto__ to implement Inheritance: ");


let Animal = {
    speak : true
}

let Dog = {
    voice : "Bark"
}

Dog.__proto__ = Animal
console.log("Can Dog speak : " + Dog.speak);
console.log("Dog Voice : "+ Dog.voice);
