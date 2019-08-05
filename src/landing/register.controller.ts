import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateSuscriptionDto } from './dto/create-suscription';
import { SuscriptionService } from './suscription.service';
import { SuscriptionI} from './interfaces/suscription.interface';

@Controller('landing')
export class RegisterController {
    // Constructor
    constructor(private readonly suscriptionService: SuscriptionService){}

    // Obtener un usuario
    @Get(':rut')
    getUser(@Param('rut') rut): Promise<SuscriptionI> {
        return this.suscriptionService.getUser(rut);         
    }
    // Obtener toodos los usuarios
    @Get()
    getUsers(): Promise<SuscriptionI[]> {
        return this.suscriptionService.getUsers();
    }
    // Registar un usuario
    @Post('/subscriptions')
    createUser(@Body() userDto: CreateSuscriptionDto): Promise<SuscriptionI> {
        return this.suscriptionService.createUser(userDto);
    }
    // Actualizar un usuario
    @Put(':id')
    updateUser(@Param('id') id, @Body() userDto: CreateSuscriptionDto): Promise<SuscriptionI> {
        return this.suscriptionService.updateuser(id, userDto);
    }
    // Eliminar un usuario
    @Delete(':id')
    deleteUser(@Param('id') idUser): Promise<SuscriptionI> {
        return this.suscriptionService.deleteUser(idUser);
    }
}
