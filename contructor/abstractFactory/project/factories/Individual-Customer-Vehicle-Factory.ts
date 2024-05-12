import { IndividualCustomer } from "../customer/Individual-Customer";
import { Customer } from "../interfaces/customer.ts";
import { CreateVehicleCustomer } from "../interfaces/customerVehicleFactory";
import { Vehicle } from "../interfaces/vehicle";
import { IndividualCar } from "../vehicle/Individual-Car";

export class IndividualCustomerVehicleFactory implements CreateVehicleCustomer {
  
  createCustomer(CustomerName: string): Customer {
    return new IndividualCustomer(CustomerName)
  }
  
  createVehicle(CustomerName: string, vehicleName: string): Vehicle {
    const customer = this.createCustomer(CustomerName)

    return new IndividualCar(vehicleName, customer)
  }

}