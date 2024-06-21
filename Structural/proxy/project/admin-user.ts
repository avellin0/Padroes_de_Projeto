import { SystemUserAddressProtocol, SystemUserProtocol } from "./interface/system-user-protocol";

export class AdminUser implements SystemUserProtocol{
    constructor(public name: string){}
    
    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        return new Promise((resolve,reject) => {
           return setTimeout(() => {
                return resolve([
                    {state: "Rio de janeiro",street: "AV. Brasil", number: 150}
                ]);
            }, 2000)
        })
    }
}

// Assim que faz um teste de Promise 