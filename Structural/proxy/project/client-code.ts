import { SystemUserProxy } from "./system-user-proxy";

async function clientCode():Promise<void>{
    const user = new SystemUserProxy('Davi');
    console.log('isso vai levar 2 segundos');
    console.log(await user.getAddresses());
    console.log('vai repetir');

    for (let i = 0 ; i < 5; i++){
        console.log(await user.getAddresses());
    }
    
}

clientCode()