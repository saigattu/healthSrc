import { Component, OnInit } from '@angular/core';
import {Healthpackage} from '../healthpackage';
import { Router } from '@angular/router';
import { PackagedetailsService } from '../packagedetails.service';
@Component({
  selector: 'app-healthpackages',
  templateUrl: './healthpackages.component.html',
  styleUrls: ['./healthpackages.component.css']
})
export class HealthpackagesComponent implements OnInit {


  constructor(private router: Router,public packageService:PackagedetailsService ) {
  
   }

  ngOnInit() {
  }
btnClick= function (pack) {
        this.packageService.packageDetails=pack;
        this.router.navigateByUrl('/packagedescription');
};

}
