var firstName = ""
var lastName = ""

//============================ PROTO TYPE 

const personProtoType = {
  firstName: firstName,
  lastName: lastName,
  age: 17,

  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

//============================ FUNÇÃO PRINCIPAL

function Person(firstName, lastName , age){
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age
}

Person.prototype = Object.create(personProtoType)
Person.prototype.constructor = Person


//=========================== HERANÇA

function Profile(firstName, lastName, age){
  Person.call(this, firstName, lastName, age);
  this.letter = "Bem vindo ao meu perfil"
}

Profile.prototype = Object.create(Person.prototype)
Profile.prototype.constructor = Profile;


//=========================== LOGs

const pessoa1 = new Person('wesley', 'Avelino', 17) // => Person()
console.log(pessoa1);

const pessoa2 = new Profile('Adriano', 'Lima', 42) // => Profile()
console.log(pessoa2.fullName())