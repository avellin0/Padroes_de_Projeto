interface product{
  sayhi(): void
}

class ConcreteProduct implements product{
  sayhi(): void {
    console.log("hello")
  }
}


abstract class Creator{
  abstract factoryMethod(): product

  createAndShow():void{
    const product = this.factoryMethod()
    console.log(product);
  }
}

class ConcreteCreator extends Creator{
  factoryMethod(): product {
    return new ConcreteProduct();    
  }
}

const creator = new ConcreteCreator()
const product = creator.factoryMethod()
product.sayhi() // hi
creator.createAndShow() // Concreteproduct {}