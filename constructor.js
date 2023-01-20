class TrainForm {
    
  constructor(name, number, address) {
    (this.name = name), (this.number = number), (this.address = address);
  }

  preview() {
    console.log(`Train Name: ${this.name}`);
    console.log(`Train Number: ${this.number}`);
    console.log(`Train Address: ${this.address}`);
  }
  submit() {
    console.log("form submitted");
  }

  cancel() {
    console.log("form cancel");
    this.number = 0;
  }
}

let form = new TrainForm("local", 5689, "address");

form.preview();
form.submit();
form.cancel();
form.preview();
