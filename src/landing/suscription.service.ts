import { Injectable } from '@nestjs/common';
import { SuscriptionI } from './interfaces/suscription.interface';
import { Model } from 'mongoose';
import { InjectModel} from '@nestjs/mongoose';
@Injectable()
export class SuscriptionService {

    constructor(@InjectModel('Suscription') private readonly suscriptionModel: Model<SuscriptionI>) {}
    
    async getUser(rut: string): Promise<SuscriptionI>{
        return await this.suscriptionModel.findOne({rut: rut});
    }

    async getUsers(): Promise<SuscriptionI[]>{
        return await this.suscriptionModel.find();
    }
 
    async createUser(suscription: SuscriptionI): Promise<SuscriptionI>{
        const newSuscription = new this.suscriptionModel(suscription);
        return await newSuscription.save(); 
    }
    // TODO: buscar por rut en vez de por id para actualizar y borrar
    async updateuser(id: string , suscription: SuscriptionI): Promise<SuscriptionI>{
        return await this.suscriptionModel.findByIdAndUpdate(id, suscription, {new: true});
    } 

    async deleteUser(id: string): Promise<SuscriptionI>{
        return await this.suscriptionModel.findByIdAndRemove(id);
    }
}
