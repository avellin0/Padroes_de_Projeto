import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Beverage, Rice, VeganMeat } from "./meals";

export class VeganDishBuilder implements MealBuilderProtocol{
  private meal: MealBox = new MealBox()

  reset(): this{
    this.meal = new MealBox()
    return this
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5)
    const beans = new Beans('feijao', 10)
    const soja = new VeganMeat('soja', 5) 
    this.meal.add(rice,beans, soja)
    return this
  }
  makeBeverage(): this {
    const beverage = new Beverage('bebida', 4)
    this.meal.add(beverage)
    return this    
  }

  getMeal(): MealBox{
    return this.meal
  }

  getPrice(): number{
    return this.meal.getPrice()
  }
}