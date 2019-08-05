import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SuscriptionComponent } from './components/suscription/suscription.component';
import { SuscriptionFormComponent } from './components/suscription-form/suscription-form.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SuscriptionComponent,
    SuscriptionFormComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
