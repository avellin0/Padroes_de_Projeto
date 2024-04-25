interface Ipessoa{
  nomeCompleto(): string
}



class CreatePessoa implements Ipessoa{
  private first_name: string
  private second_name: string
  private age: number

  nomeCompleto(): string {
    return `${this.first_name} ${this.second_name}`
  }
  create(name: string , second_name: string, age: number){
    this.first_name = name
    this.second_name = second_name
    this.age = age
    
    return {nome: this.nomeCompleto(), idade: this.age}

  }

}

const teste = new CreatePessoa()
console.log(teste.create("Davi","Avelino",17))









