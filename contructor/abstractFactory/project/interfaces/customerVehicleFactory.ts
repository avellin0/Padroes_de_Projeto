import { Customer } from "./customer.ts";
import { Vehicle } from "./vehicle";

export interface CreateVehicleCustomer{
  createCustomer(CustomerName: string): Customer
  createVehicle(CustomerName: string, vehicleName: string ): Vehicle
}