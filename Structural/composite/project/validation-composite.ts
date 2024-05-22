export abstract class ValidationComponent {
    abstract validate(value: unknown): boolean;
}


export class ValidateEmail extends ValidationComponent{
    validate(value: unknown): boolean {
       if(typeof value !== 'string') return false    
        
       return /@/.test(value)
    }
}

export class ValidateNumberonEmail extends ValidationComponent{
    validate(value: unknown): boolean {
        if(typeof value !== 'string') return false
        return /\d+/.test(value)
    }
}

export class ValidatePassword extends ValidationComponent{
    validate(value: unknown): boolean {
        if(typeof value !== 'number') return false
        return true
    }
}


export class ValidationComposite extends ValidationComponent{
    private readonly children: ValidationComponent[] = []

    validate(value: unknown): boolean {
        
        for (const child of this.children){
            const validate = child.validate(value)
            if(!validate) return false
        }

            return true
    }


    add(...validations: ValidationComponent[]): void{
        validations.forEach((validation) => this.children.push(validation))
    }
}


const validationEmail = new ValidateEmail()
const validationPassword = new ValidatePassword()
const validationNumberonEmail = new ValidateNumberonEmail()
const validationComposite = new ValidationComposite()


validationComposite.add(validationNumberonEmail, validationEmail)
console.log(validationComposite.validate('daviavelino2007@gamil.com'));

// para uma funcionar, a validação da outra precisa estar "desligada"

validationComposite.add(validationPassword)
console.log(validationComposite.validate(12345));

