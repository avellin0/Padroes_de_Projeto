export abstract class ProductComponent {
   abstract getPrice(): number

   add(product: ProductComponent): void{}
   remove(product: ProductComponent): void {}
}

export class leaf extends ProductComponent{
  constructor (public name: string, public price: number){
    super(); // quando você usa um constructor em uma classe que extend outra você precisa chamar "super"
  }

  getPrice(): number {
    return this.price
  }
}


export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = []

  add(...products: ProductComponent[]): void {
    products.forEach( product => (this.children.push(product)))
  }

  remove(product: ProductComponent): void {
    const index = this.children.indexOf(product)

    if(index !== - 1){
      this.children.splice(index, 1)
    }
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0) // sum é uma variavel que começa com 0 e soma todos os getPrice dos filhos
  }
}

const book = new leaf('livro', 45)
const headset = new leaf('fone', 25)
const pen = new leaf('caneta', 2)

const productBox = new ProductComposite()
productBox.add(book, pen, headset)

console.log(productBox);
console.log(`\n ---------------`);


const phone = new leaf('celular', 1_500)
const kindle = new leaf('Kindle', 700)

const OtherProductBox = new ProductComposite()
OtherProductBox.add(phone, kindle)

console.log(OtherProductBox);
console.log(`\n ---------------`);


productBox.add(OtherProductBox)
console.log(productBox);

console.log(`\n ---------------`);
console.log("total: " + productBox.getPrice());






