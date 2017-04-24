import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PackagesComponent } from "./packages/packages.component";

import { DefaultComponent } from "./default/default.component";
import { HealthpackagesComponent } from "./healthpackages/healthpackages.component";
import { PackagedescrComponent } from "./packagedescr/packagedescr.component";
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
     { path: '', redirectTo: '/default', pathMatch: 'full' },
    { path: 'healthpackages', component: HealthpackagesComponent },
      { path: 'home', component: HomeComponent },
       { path: 'default', component: DefaultComponent },
        { path: 'packagedescription', component: PackagedescrComponent }
  
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);