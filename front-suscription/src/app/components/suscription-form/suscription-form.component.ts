import { Component, OnInit } from '@angular/core';
import { Suscription } from '../../interfaces/Suscription';
import { SuscriptionService } from '../../services/suscription.service';
@Component({
  selector: 'app-suscription-form',
  templateUrl: './suscription-form.component.html',
  styleUrls: ['./suscription-form.component.css']
})
export class SuscriptionFormComponent implements OnInit {

  suscription: Suscription = {
    name: '',
    phone: '',
    email: '',
    rut: ''
  }; 

  constructor(private suscriptionService: SuscriptionService) { }

  ngOnInit() {
  }

  submitSuscription(){
    console.log(this.suscription);
    this.suscriptionService.createSuscription(this.suscription)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
