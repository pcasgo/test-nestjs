import { SuscriptionI } from './interfaces/suscription.interface';
import { Model } from 'mongoose';
export declare class SuscriptionService {
    private readonly suscriptionModel;
    constructor(suscriptionModel: Model<SuscriptionI>);
    getUser(rut: string): Promise<SuscriptionI>;
    getUsers(): Promise<SuscriptionI[]>;
    createUser(suscription: SuscriptionI): Promise<SuscriptionI>;
    updateuser(id: string, suscription: SuscriptionI): Promise<SuscriptionI>;
    deleteUser(id: string): Promise<SuscriptionI>;
}
