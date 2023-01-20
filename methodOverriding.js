class Employee{

    login(){
       console.log("Employee logged in")
    }
    logout(){
       console.log("Employee logged out")
    }
    requestedLeave(leave){
       console.log(`Employee has requested ${leave} `)
    }
}

class Programmer extends Employee{

    coffee(){
        console.log("programmer requested coffee")
    }
    
    requestedLeave(leave){
        super.requestedLeave(leave+1) // old method override and change data
        console.log("extra leave")
    }
}

let emp1 = new Programmer();
let emp2 = new Employee();

emp2.requestedLeave(4);

emp1.requestedLeave(4)
emp1.coffee()
