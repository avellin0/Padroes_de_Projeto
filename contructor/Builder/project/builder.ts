import { MainDishBuilder } from "./classes/main-dish-builder";
import { MealBox } from "./classes/meal-box";
import { Beans, Beverage, Dessert, Meat, Rice } from "./classes/meals";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

//===========  self-service 
console.log(`\n Self-Service: \n `)

const rice = new Rice('Arroz', 5)
const beans = new Beans('feijao', 10)
const meat = new Meat('carne', 20)
const beverage = new Beverage('bebida', 4)
const dessert = new Dessert('sorvete', 6)

const mealBox = new MealBox()

mealBox.add(rice,beans,meat,beverage,dessert)
console.log(mealBox) // alimentos do self-service
console.log("valor: " + mealBox.getPrice()) // preço do self-service

console.log(`\n Prato Pronto: \n `) // espaço


//============ prato pronto

const mainDishBuilder = new MainDishBuilder()
mainDishBuilder.makeMeal().makeBeverage()

console.log(mainDishBuilder.getMeal()) // alimentos do prato
console.log("valor: "+mainDishBuilder.getPrice()) // preço do prato pronto

console.log(`\n Prato Vegano: \n `)

//============ Prato Vegano

const veganDishBuilder = new VeganDishBuilder()
veganDishBuilder.makeMeal().makeBeverage()

console.log(veganDishBuilder.getMeal()) // Alimentos do prato
console.log("valor: "+veganDishBuilder.getPrice()) // Preço do prato Vegano
