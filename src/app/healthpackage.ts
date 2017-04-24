import { PackageDescription } from './package-description';
export class Healthpackage {
    packageId:Number;
    packageName:String;
    packageDesc:Array<PackageDescription>;
    packageCost:Number;
    cart:boolean=false;
    packageCount:Number=1;
   
    constructor(packageId,packageName,packageDetails,packageCost){
this.packageId=packageId;
this.packageName=packageName;
this.packageDesc=packageDetails;
this.packageCost=packageCost;
    }
}
