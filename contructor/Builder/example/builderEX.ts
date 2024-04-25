export class Person{
  constructor(public name?:string , public age?: number){
  }
}

export class personBuilder{
  private person = new Person();

  newPerson(): void {
    this.person = new Person()
  }

  setName(name: string): this{
    this.person.name = name
    return this
  }

  setAge(age: number): this{
    this.person.age = age
    return this
  }

  getResult(): Person{
    return this.person
  }
}

const personBuilder1 = new personBuilder()
const person1 = personBuilder1.setName('davi').setAge(17).getResult(); // method chaining
console.log(person1)

personBuilder1.newPerson()

// POR MAIS QUE TENHA FUNCIONADO , O BUILDER É FEITO PARA PROBLEMAS MAIS COMPLEXOS... ESSE "PROBLEMA" PODERIA SER RESILIDO ASSIM // 

type person = {name?: string , age?: number}
const pessoa1: person = {name: "Davi", age: 17}
const pessoa2: person = {name: "Wesley", age: 26}

console.log(`\n- Usando o type: { name: '${pessoa1.name}', age: ${pessoa1.age} }`)