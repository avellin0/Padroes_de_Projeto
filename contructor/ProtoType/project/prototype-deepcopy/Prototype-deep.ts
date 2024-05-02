interface protoType{
  clone(): protoType
}

export class Person implements protoType{
  public addresses: Address[] = []

  constructor(public name: string, public age: number){
    
  }

  clone(): Person{
    const newObj = new Person(this.name, this.age)
    newObj.addresses = this.addresses.map(item => item.clone()) // clona todos os endereços que ficarem no array
    return newObj
  }

  addAddress(address: Address):void{
    this.addresses.push(address)
  }
}

export class Address implements protoType{
  constructor(public street: string, public number: number){}

  clone(): Address{
      return new Address(this.street , this.number)
  }
}


const address1 = new Address('Rua icarunba', 432)
const person1 = new Person('Davi', 17)
person1.addAddress(address1)
const person2 = person1.clone()


person1.addresses[0].street = "rua tanto faz"


console.log(person1)
console.log(person2);



