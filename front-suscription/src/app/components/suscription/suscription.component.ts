import { Component, OnInit } from '@angular/core';
import { SuscriptionService } from '../../services/suscription.service';

@Component({
  selector: 'app-suscription',
  templateUrl: './suscription.component.html',
  styleUrls: ['./suscription.component.css']
})
export class SuscriptionComponent implements OnInit {

  constructor(private suscriptionService: SuscriptionService) { }

  ngOnInit() {
    this.getSuscriptions();
  }

  getSuscriptions(){
    this.suscriptionService.getSuscriptions()
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
