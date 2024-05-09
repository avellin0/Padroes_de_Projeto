import {Vehicle} from "../vehicles/vehicle"

export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): Vehicle // factoryMethod

  // pickUp(customeName: string, vehicleName: string): Vehicle{
  //   const car = this.getVehicle(vehicleName)
  //   car.pickUp(customeName)
  //   return car
  // }
}

  // você também pode ter metódos nas classes abstratas ^-^
// A diferença entre INTERFACEs e ASBTRACT CLASSs é o peso , enquanto na compilação a interface nem é compilada a class abistrata é. 
