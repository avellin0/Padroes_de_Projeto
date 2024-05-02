const personProtoType = {
  firstName: "Davi",
  lastName: "Avelino",
  age: 17,

  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

const AnotherPerson = Object.create(personProtoType)
console.log(AnotherPerson.lastName);