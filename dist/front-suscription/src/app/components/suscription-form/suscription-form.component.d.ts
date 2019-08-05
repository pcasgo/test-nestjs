import { OnInit } from '@angular/core';
import { Suscription } from '../../interfaces/Suscription';
import { SuscriptionService } from '../../services/suscription.service';
export declare class SuscriptionFormComponent implements OnInit {
    private suscriptionService;
    suscription: Suscription;
    constructor(suscriptionService: SuscriptionService);
    ngOnInit(): void;
    submitSuscription(): void;
}
