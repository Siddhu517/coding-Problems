/*
Q .2
Please implement a software for a car service station using Object Oriented Programming. If you are not familiar or
comfortable with object-oriented programming, we suggest you give this article a quick read to ensure you
understand it before you attempt it.
It should have the following features:
The car service station caters to different types of cars – Hatchback, Sedan, SUV.
It provides different types of services like Basic Service, Engine Fixing, Clutch Fixing, Gear Fixing and Brake Fixing.
Each service has a service code associated with it and different prices for different types of cars.

The software should generate a detailed bill with the total amount for each service request based on the Type of
Car specified and the requested Service Codes.
Example:
Type of Car – Hatchback
Service Codes – BS01, EF01
Charges for Basic Servicing – ₹ 2000
Charges for Engine Fixing – ₹ 5000
Total Bill – ₹ 7000
In addition, if the total service bill is more than ₹ 10000, a complimentary cleaning should be provided and specified
in the bill.
*/


class Service {
    constructor(code, price) {
      this.code = code;
      this.price = price;
    }
  }
  
  class BasicService extends Service {
    constructor(price) {
      super("BS01", price);
    }
  }
  
  class EngineFixing extends Service {
    constructor(price) {
      super("EF01", price);
    }
  }
  
  class ClutchFixing extends Service {
    constructor(price) {
      super("CF01", price);
    }
  }
  
  class GearFixing extends Service {
    constructor(price) {
      super("GF01", price);
    }
  }
  
  class BrakeFixing extends Service {
    constructor(price) {
      super("BF01", price);
    }
  }
  
  class CarServiceStation {
    constructor() {
      this.services = {
        Hatchback: {
          BS01: new BasicService(2000),
          EF01: new EngineFixing(5000),
          CF01: new ClutchFixing(2000),
          GF01: new GearFixing(3000),
          BF01: new BrakeFixing(1000),
        },
        Sedan: {
          BS01: new BasicService(4000),
          EF01: new EngineFixing(8000),
          CF01: new ClutchFixing(4000),
          GF01: new GearFixing(6000),
          BF01: new BrakeFixing(1500),
        },
        SUV: {
          BS01: new BasicService(5000),
          EF01: new EngineFixing(10000),
          CF01: new ClutchFixing(6000),
          GF01: new GearFixing(8000),
          BF01: new BrakeFixing(2500),
        },
      };
    }
  
    getPrice(carType, serviceCode) {
      console.log(`Type of Car - ${carType}`);
      console.log(`Service Codes - ${serviceCode}`);
      
      let totalServises = [];
      for (let i = 0; i < serviceCode.length; i++) {
        if (serviceCode[i] === "BS01") {
          console.log(
            `Charges for Basic Servicing - ₹ ${
              this.services[carType][serviceCode[i]].price
            }`
          );
        } else if (serviceCode[i] === "EF01") {
          console.log(
            `Charges for Engine Fixing - ₹ ${
              this.services[carType][serviceCode[i]].price
            }`
          );
        } else if (serviceCode[i] === "CF01") {
          console.log(
            `Charges for Clutch Fixing - ₹ ${
              this.services[carType][serviceCode[i]].price
            }`
          );
        } else if (serviceCode[i] === "BF01") {
          console.log(
            `Charges for Brake Fixing - ₹ ${
              this.services[carType][serviceCode[i]].price
            }`
          );
        } else if (serviceCode[i] === "GF01") {
          console.log(
            `Charges for Gear Fixing - ₹ ${
              this.services[carType][serviceCode[i]].price
            }`
          );
        }
  
        totalServises.push(this.services[carType][serviceCode[i]].price);
      }
  
      /* total */
      let totalPrice = totalServises.reduce((a, b) => a + b);
      console.log(`Total Bill - ₹ ${totalPrice}`);
  
      if (totalPrice >= 10000) {
        console.log(`Congratulations! Your bill is ₹ 10,000 + and as a complimentary service, we are also providing a cleaning.`);
      }
    }
  }
  
  const station = new CarServiceStation();
  
  station.getPrice("Hatchback", ["BS01", "EF01", "CF01", "GF01"]);
  
  station.getPrice("Sedan", ["BS01"]);
  
  station.getPrice("SUV", ["BS01", "CF01", "GF01"]);
  