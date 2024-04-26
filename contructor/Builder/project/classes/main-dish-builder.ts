import {MealBuilderProtocol} from '../interfaces/meal-builder-protocol'
import {MealBox} from './meal-box'
import { Rice, Beans, Meat, Beverage, Dessert } from './meals'

export class MainDishBuilder implements MealBuilderProtocol{
  private meal: MealBox = new MealBox()
   
  reset(): this{
    this.meal = new MealBox()
    return this
  }
  makeMeal(): this {
    const rice = new Rice('Arroz', 5)
    const beans = new Beans('feijao', 10)
    const meat = new Meat('carne', 20) 
    this.meal.add(rice,beans,meat)
    return this
  }
  makeBeverage(): this {
    const beverage = new Beverage('bebida', 4)
    this.meal.add(beverage)
    return this
  }
  makeDessert(): this {
    const dessert = new Dessert('sorvete', 6)
    this.meal.add(dessert)
    return this
  }
 
  getMeal(): MealBox{
    return this.meal
  }

  getPrice(): number{
    return this.meal.getPrice()
  }
}