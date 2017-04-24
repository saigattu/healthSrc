import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { PackagesComponent } from './packages/packages.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { CONST_ROUTING } from './app.routing';
import { DefaultComponent } from './default/default.component';
import { HealthpackagesComponent } from './healthpackages/healthpackages.component';
import { PackagedescrComponent } from './packagedescr/packagedescr.component'; 
import { PackagedetailsService } from './packagedetails.service';
import { BmiComponent } from './bmi/bmi.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PackagesComponent,
    ServicesComponent,
    ContactComponent,
    ClientsComponent,
    HomeComponent,
    AboutComponent,
    MapComponent,
    FooterComponent,
    DefaultComponent,
    HealthpackagesComponent,
    PackagedescrComponent,
    BmiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
     CONST_ROUTING
  ],
  providers: [PackagedetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
