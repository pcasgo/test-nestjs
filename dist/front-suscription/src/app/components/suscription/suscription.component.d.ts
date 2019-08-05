import { OnInit } from '@angular/core';
import { SuscriptionService } from '../../services/suscription.service';
export declare class SuscriptionComponent implements OnInit {
    private suscriptionService;
    constructor(suscriptionService: SuscriptionService);
    ngOnInit(): void;
    getSuscriptions(): void;
}
