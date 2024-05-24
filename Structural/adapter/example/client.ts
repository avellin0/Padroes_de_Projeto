import IsEmail from "validator/lib/isEmail"
const email = "DaviAvelino2007@gmail.com"

if(IsEmail(email)){
    console.log('É válido');
}else{
    console.log('Não é válido');
}

