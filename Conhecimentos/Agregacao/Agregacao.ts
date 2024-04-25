class Delegacia{
  departamentos: Departamentos[]
  constructor(){
    this.departamentos = []
  }

  addDepartamentos(departamentos: Departamentos){
    this.departamentos.push(departamentos)
  }
}


class Departamentos{
  name: String
  constructor(name: string){
    this.name = name
  }
}

const delegacia = new Delegacia()
const departamentos = new Departamentos("Investigador")
delegacia.addDepartamentos(departamentos)

console.log(delegacia.departamentos[0].name)