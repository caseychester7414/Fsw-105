var employee = []
function Employees(name, title, salary, status = "full-time"){
this.name = name;
this.title = title;
this.salary = salary;
this.status = status;
this.printEmployeeForm = function (){
    console.log(this)
}
employee.push(this)
}

let casey = new Employees("Casey", "bakery", "10 / hr")
let lea = new Employees("lea", "dollar tree", "7000")
let shiloh = new Employees ("Shiloh", "web developer", "100000")
console.log(employee)
casey.printEmployeeForm()
lea.printEmployeeForm()
shiloh.printEmployeeForm()