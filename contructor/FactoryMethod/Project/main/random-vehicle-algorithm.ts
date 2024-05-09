import { CarFactory } from "../factories/car-factory";
import { Vehicle} from "../vehicles/vehicle";
import { BicycleFactory } from "../factories/Bicycle-factory";
import { RandomNumbers } from "../utils/random";

export function randomCarAlgorithm(): Vehicle{
  const carro = new CarFactory()
  const bicycle = new BicycleFactory()

  const car1 = carro.getVehicle('ranger rover')
  const car2 = carro.getVehicle('land rover')
  const car3 = carro.getVehicle('bmw x6')
  const bike = bicycle.getVehicle('bike')

  const cars = [car1, car2, car3, bike]

  return cars[RandomNumbers(3)]
}