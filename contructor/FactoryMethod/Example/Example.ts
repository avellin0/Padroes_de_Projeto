type Car = {model: string, enginer: string}
type CarPrototype = {showDetails(): void}

const carPrototype: CarPrototype = {
  showDetails():void{
    console.log(this);
  }
}

const carFactory = (model: string, enginer: string): Car & CarPrototype  => {
  const idAsPrivateMember = Math.floor(Math.random() * 1000)
  const carObj = Object.create(carPrototype)
  return Object.assign(carObj, {id: idAsPrivateMember, model , enginer})
}

const car1 = carFactory('x6', 'TwinPower Turbo')
console.log(car1.showDetails());

const car2 = carFactory('ferrari 488','v8')
console.log(car2.showDetails());
