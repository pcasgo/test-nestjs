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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
let SuscriptionService = class SuscriptionService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000';
    }
    getSuscription(id) {
        return this.http.get(`${this.BASE_URL}/landing/${id}`);
    }
    getSuscriptions() {
        return this.http.get(`${this.BASE_URL}/landing`);
    }
    createSuscription(suscription) {
        return this.http.post(`${this.BASE_URL}/landing/subscriptions`, suscription);
    }
    updateSuscription(id, suscription) {
        return this.http.put(`${this.BASE_URL}/landing?id=${id}`, suscription);
    }
    deleteSuscription(id) {
        return this.http.delete(`${this.BASE_URL}/landing?id=${id}`);
    }
};
SuscriptionService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], SuscriptionService);
exports.SuscriptionService = SuscriptionService;
//# sourceMappingURL=suscription.service.js.map