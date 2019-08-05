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
var _a;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let SuscriptionService = class SuscriptionService {
    constructor(suscriptionModel) {
        this.suscriptionModel = suscriptionModel;
    }
    async getUser(rut) {
        return await this.suscriptionModel.findOne({ rut: rut });
    }
    async getUsers() {
        return await this.suscriptionModel.find();
    }
    async createUser(suscription) {
        const newSuscription = new this.suscriptionModel(suscription);
        return await newSuscription.save();
    }
    async updateuser(id, suscription) {
        return await this.suscriptionModel.findByIdAndUpdate(id, suscription, { new: true });
    }
    async deleteUser(id) {
        return await this.suscriptionModel.findByIdAndRemove(id);
    }
};
SuscriptionService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Suscription')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], SuscriptionService);
exports.SuscriptionService = SuscriptionService;
//# sourceMappingURL=suscription.service.js.map