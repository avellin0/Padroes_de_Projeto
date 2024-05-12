import { EnterpriseCustomerVehicleFactory } from "./factories/Enterprise-Customer-Vehicle-factory";
import { IndividualCustomerVehicleFactory } from "./factories/Individual-Customer-Vehicle-Factory";

const enterpriseFactory = new EnterpriseCustomerVehicleFactory()
const individualFactory = new IndividualCustomerVehicleFactory()

const car1 = individualFactory.createVehicle('Davi', 'bmw x6')
const car2 = enterpriseFactory.createVehicle('Sr. Davi', 'Ranger Rover')

car1.pickUp()
car2.pickUp()

