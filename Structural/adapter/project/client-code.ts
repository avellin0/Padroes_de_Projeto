import { EmailValidatorProtocol } from "./interfaces/emailvalidatorProtocol";
import { EmailValidatorAdapter } from "./validations/email-validator-adapter";

function ValidaEmail(emailValidator: EmailValidatorProtocol, email: string): void {
    if(emailValidator.isEmail(email)){
        console.log("Válido");
    }else{
        console.log("Inválido");
    }
}

ValidaEmail(new EmailValidatorAdapter(), 'DaviAvelino2007@gmail.com')