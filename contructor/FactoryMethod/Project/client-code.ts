import { randomCarAlgorithm } from "./main/random-vehicle-algorithm";
import { RandomNumbers } from "./utils/random";

const customerName = ['Davi', 'Adriano', 'Wesley', 'Cristiane']

for (let x = 0; x < 10 ; x++) {

  const vehicle = randomCarAlgorithm()
  const name = customerName[RandomNumbers(customerName.length)]

  vehicle.pickUp(name)
  vehicle.stop()
  console.log("---");
}