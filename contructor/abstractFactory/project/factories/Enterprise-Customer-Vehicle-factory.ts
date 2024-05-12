import { EnterpriseCustomer } from "../customer/Enterprise-customer";
import { Customer } from "../interfaces/customer.ts";
import { CreateVehicleCustomer } from "../interfaces/customerVehicleFactory";
import { Vehicle } from "../interfaces/vehicle";
import { EnterpriseCar } from "../vehicle/Enterprise-car";

export class EnterpriseCustomerVehicleFactory implements CreateVehicleCustomer {
  
  createCustomer(CustomerName: string): Customer {
    return new EnterpriseCustomer(CustomerName)
  }
  
  createVehicle(CustomerName: string, vehicleName: string): Vehicle {
    const customer = this.createCustomer(CustomerName)

    return new EnterpriseCar(vehicleName, customer)
  }

}