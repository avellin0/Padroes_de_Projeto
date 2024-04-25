class Car{
  driver: Driver | null;
  constructor(){
      this.driver = null
  }
}

class Driver{
  name: string;
  constructor(name: string){
    this.name = name
  }
}


const car = new Car()
const driver = new Driver("Davi")
car.driver = driver

console.log(car.driver.name)