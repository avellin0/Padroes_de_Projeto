interface ProtoType{
  clone(): this
}

export class Person implements ProtoType{
  constructor(public name: string , public age: number){}

  clone(): this {
    
    const newPerson = Object.create(this)
    return this
  }  
}

const person1 = new Person('Davi', 17)
const person2 = person1.clone()

console.log(person1.name) // Davi
console.log(person2.name) // Davi


