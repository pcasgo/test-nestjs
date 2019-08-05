import { CreateSuscriptionDto } from './dto/create-suscription';
import { SuscriptionService } from './suscription.service';
import { SuscriptionI } from './interfaces/suscription.interface';
export declare class RegisterController {
    private readonly suscriptionService;
    constructor(suscriptionService: SuscriptionService);
    getUser(rut: any): Promise<SuscriptionI>;
    getUsers(): Promise<SuscriptionI[]>;
    createUser(userDto: CreateSuscriptionDto): Promise<SuscriptionI>;
    updateUser(id: any, userDto: CreateSuscriptionDto): Promise<SuscriptionI>;
    deleteUser(idUser: any): Promise<SuscriptionI>;
}
