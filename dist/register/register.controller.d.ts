import { CreateRegisterDto } from './dto/create-register';
export declare class RegisterController {
    getUser(idUser: any): string;
    getUsers(): string;
    createUser(userDto: CreateRegisterDto): string;
    updateUser(userDto: CreateRegisterDto): string;
    deleteUser(idUser: any): string;
}
