import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ringmann';

  priceRangeList : string[] = ["0-50","51-100","101-150","151-200","201-250","251-300"]

  ngOnInit(): void {
    
  }
  
}
