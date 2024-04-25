class Casa{
 quartos: Quartos[]

  constructor(first: string, second: string, three: string ){
    this.quartos = [ 
        new Quartos(first),
        new Quartos(second),
        new Quartos(three)
    ]
  }
}

class Quartos{
  name: string
  constructor(name: string){
    this.name = name
  }
}


const casa = new Casa("sala","cozinha","banheiro")
console.log(casa.quartos[0].name)