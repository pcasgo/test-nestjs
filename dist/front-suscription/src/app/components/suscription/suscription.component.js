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
const suscription_service_1 = require("../../services/suscription.service");
let SuscriptionComponent = class SuscriptionComponent {
    constructor(suscriptionService) {
        this.suscriptionService = suscriptionService;
    }
    ngOnInit() {
        this.getSuscriptions();
    }
    getSuscriptions() {
        this.suscriptionService.getSuscriptions()
            .subscribe(res => console.log(res), err => console.log(err));
    }
};
SuscriptionComponent = __decorate([
    core_1.Component({
        selector: 'app-suscription',
        templateUrl: './suscription.component.html',
        styleUrls: ['./suscription.component.css']
    }),
    __metadata("design:paramtypes", [suscription_service_1.SuscriptionService])
], SuscriptionComponent);
exports.SuscriptionComponent = SuscriptionComponent;
//# sourceMappingURL=suscription.component.js.map