import { AdminUser } from "./admin-user";
import { SystemUserAddressProtocol, SystemUserProtocol } from "./interface/system-user-protocol";

export class SystemUserProxy implements SystemUserProtocol{

    private realUser: SystemUserProtocol | null = null; 
    private realUserAddress: SystemUserAddressProtocol[] | null = null


    constructor (public name: string){}


    private CreateUser(): SystemUserProtocol{
        if(this.realUser === null){
            return new AdminUser(this.name);
        }
        
        return this.realUser;
    }

    async getAddresses(): Promise<SystemUserAddressProtocol[]>{
        this.realUser = this.CreateUser()

        if(this.realUserAddress === null){
            this.realUserAddress = await this.realUser.getAddresses();
        }

        return this.realUserAddress
    }
}