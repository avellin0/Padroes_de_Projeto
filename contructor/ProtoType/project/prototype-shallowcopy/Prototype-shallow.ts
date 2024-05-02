interface protoType{
  clone(): protoType
}

export class Person implements protoType{
  public addresses: Address[] = []

  constructor(public name: string, public age: number){
    
  }

  clone(): this{
    const newObj = Object.create(this)
    return this
  }

  addAddress(address: Address):void{
    this.addresses.push(address)
  }
}

export class Address {
  constructor(public street: string, public number: number){}
}

const address1 = new Address('Rua icarunba', 432)
const person1 = new Person('Davi', 17)
person1.addAddress(address1)


const person2 = person1.clone()
console.log(person2);



