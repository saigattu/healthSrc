import { Component,ElementRef,OnInit } from '@angular/core';

declare var jQuery : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private elRef:ElementRef) {
  
    
  }
  title = 'app works!';
  ngOnInit():any{
    // jQuery(this.elRef.nativeElement).find()
  }
}
