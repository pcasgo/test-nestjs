"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_suscription_1 = require("./dto/create-suscription");
const suscription_service_1 = require("./suscription.service");
let RegisterController = class RegisterController {
    constructor(suscriptionService) {
        this.suscriptionService = suscriptionService;
    }
    getUser(rut) {
        return this.suscriptionService.getUser(rut);
    }
    getUsers() {
        return this.suscriptionService.getUsers();
    }
    createUser(userDto) {
        return this.suscriptionService.createUser(userDto);
    }
    updateUser(id, userDto) {
        return this.suscriptionService.updateuser(id, userDto);
    }
    deleteUser(idUser) {
        return this.suscriptionService.deleteUser(idUser);
    }
};
__decorate([
    common_1.Get(':rut'),
    __param(0, common_1.Param('rut')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "getUser", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "getUsers", null);
__decorate([
    common_1.Post('/subscriptions'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_suscription_1.CreateSuscriptionDto]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "createUser", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_suscription_1.CreateSuscriptionDto]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "updateUser", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "deleteUser", null);
RegisterController = __decorate([
    common_1.Controller('landing'),
    __metadata("design:paramtypes", [suscription_service_1.SuscriptionService])
], RegisterController);
exports.RegisterController = RegisterController;
//# sourceMappingURL=register.controller.js.map