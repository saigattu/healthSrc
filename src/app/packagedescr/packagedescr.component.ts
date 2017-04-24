import { Component, OnInit } from '@angular/core';
import { PackagedetailsService } from '../packagedetails.service';
import {Healthpackage} from '../healthpackage';
import { Centre } from '../centre';
import { Branch } from '../branch';
@Component({
  selector: 'app-packagedescr',
  templateUrl: './packagedescr.component.html',
  styleUrls: ['./packagedescr.component.css']
})
export class PackagedescrComponent implements OnInit {
packDescr:Healthpackage;
centres:Centre[];
branches:Branch[];
selectedCentre=new Centre(0,"Sample");
packageCount:Number=1;
totalAmount:Number=0;
  constructor(public packser:PackagedetailsService) {
      this.centres=packser.getCentres();
   }
onSelect(centreid) {
    this.branches = this.packser.getBranches()
                 .filter((item)=> item.centreid == centreid);
  }
  onSelected(packCount,p)
  {
this.totalAmount=packCount*p.packageCost;
  }
  ngOnInit() {
  this.packDescr= this.packser.packageDetails
  }
addToCart=function(pack)
{
  if(!pack.cart)
  {
this.packser.cartCount++;
pack.cart=true;
this.packser.cartPackageList.push(pack);

  }
  
}
showPackage=function(pc)
{
this.packDescr=pc;
}
}
