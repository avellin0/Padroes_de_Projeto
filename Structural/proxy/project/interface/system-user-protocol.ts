export type SystemUserAddressProtocol = {state:string, street: string, number: number}

export interface SystemUserProtocol{
    name: string;

    getAddresses(): Promise<SystemUserAddressProtocol[]>;
}