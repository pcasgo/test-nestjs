import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuscriptionComponent } from './components/suscription/suscription.component';
import { SuscriptionFormComponent } from './components/suscription-form/suscription-form.component';


const routes: Routes = [
  {
    path: '',
    component: SuscriptionFormComponent
  },
  {
    path: 'suscription/create',
    component: SuscriptionFormComponent
  },
  {
    path: 'suscription/edit/:id',
    component: SuscriptionFormComponent    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
