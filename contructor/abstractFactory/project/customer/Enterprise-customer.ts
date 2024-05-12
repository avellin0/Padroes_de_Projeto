import { Customer } from "../interfaces/customer.ts";

export class EnterpriseCustomer implements Customer{
  constructor(public name: string) {}
}

// quando coloca "public/private" no constructor não é necessario dizer os parametros como "name: string" dentro da class
