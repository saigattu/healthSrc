import { Component, OnInit } from '@angular/core';
import {Healthpackage} from '../healthpackage';
import { Router } from '@angular/router';
import { PackagedetailsService } from '../packagedetails.service';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

public pack1:Healthpackage ;
public pack2:Healthpackage;
public pack3:Healthpackage;
  constructor(private router: Router,public packageService:PackagedetailsService) { 
    this.pack1=packageService.packageList[0];
    this.pack2=packageService.packageList[1];
    this.pack3=packageService.packageList[2];
  }

  ngOnInit() {
    
  }
btnClick= function (pack) {
        this.packageService.packageDetails=pack;
        this.router.navigateByUrl('/packagedescription');
};

}
