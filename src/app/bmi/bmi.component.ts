import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
 globalHeight:any;
  globalBMI:any;
  
public weight:Number=130;
 public feet=5;
 public inches=9;
  constructor() { }

  ngOnInit() {
  }
convertHeight=function(feet, inches){
    var convertedHeight = (feet*12)+inches;
   this.globalHeight = convertedHeight;  /*<------------------------must define as scope variable*/
    return convertedHeight;
  };

  calcBMI=function(globalHeight, weight){
    var bmi=((weight/Math.pow(globalHeight,2))*703),
        globalBMI=bmi;
    this.test=globalBMI;
    return bmi.toFixed(2);
  };
  categorize=function(globalHeight, weight){
    var bmi=((weight/Math.pow(globalHeight,2))*703);
   var category;
    if(bmi>30){
      category="obese";
  } else if(bmi>25 && bmi<29.99) {
   category="overweight";
  }else if(bmi>18.5 && bmi<24.99) {
   category="healthy";
  }else if(bmi<18.5) {
   category="underweight";
  };
    return category;
  };
    
}
