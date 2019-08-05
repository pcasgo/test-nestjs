"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const register_controller_1 = require("./landing/register.controller");
const suscription_service_1 = require("./landing/suscription.service");
const mongoose_1 = require("@nestjs/mongoose");
const landing_schema_1 = require("./landing/schemas/landing.schema");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/landing'),
            mongoose_1.MongooseModule.forFeature([{ name: 'Suscription', schema: landing_schema_1.LandingSchema }])
        ],
        controllers: [app_controller_1.AppController, register_controller_1.RegisterController],
        providers: [app_service_1.AppService, suscription_service_1.SuscriptionService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map