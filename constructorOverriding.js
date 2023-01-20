class Employee {
  constructor(name) {
      this.name = name;
      console.log(name ,"Employee constructor");
  }

  login() {
    console.log("employee login");
  }
}

class Programmer extends Employee {
  constructor(name) {
    super(name);
    console.log("programmer constructor");
  }

  info() {
    console.log(this.name);
  }
}

let emp1 = new Programmer("harry");

emp1.login();
emp1.info();
