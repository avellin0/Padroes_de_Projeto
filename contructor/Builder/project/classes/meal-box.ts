import {mealCompositeProtocol} from "../interfaces/meal-composite-protocol"

// MealBox é um composite

export class MealBox implements mealCompositeProtocol{
  private children: mealCompositeProtocol[] = []; 

  getPrice(): number {
    return this.children.reduce((sum, meal)=> sum + meal.getPrice(), 0)
  }

  add(...meal: mealCompositeProtocol[]):void{
    meal.forEach((item) => this.children.push(item))
  }
}


// A função tem o parametro "meal" que tem o valor da interface "mealCompositeProtocol" 
// que por sua vez cria um contrato dizendo que todos que à implementam deve ter o método "getPrice", ou seja , 
// basicamente essa função garante que só possa ser adicionado "alimentos" 
// que tenha a função "getPrice" nas cusas classes (objetos) => *{add(Rice) only if rice has getPrice()}* 
