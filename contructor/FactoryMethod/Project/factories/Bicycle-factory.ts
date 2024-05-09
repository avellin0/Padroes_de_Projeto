import { Vehicle } from "../vehicles/vehicle";
import { Bicycle } from "../vehicles/bicycle";
import { VehicleFactory } from "./vehicle-factory";

export class BicycleFactory extends VehicleFactory{
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName)
  }
}