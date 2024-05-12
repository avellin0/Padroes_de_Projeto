import { Customer } from "../interfaces/customer.ts";

export class IndividualCustomer implements Customer {
  constructor(public name: string) {}
}