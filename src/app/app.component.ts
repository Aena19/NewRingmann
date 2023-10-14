import { Component, OnInit } from '@angular/core';

declare var name: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ringmann';

  ngOnInit(): void {
    new name();
  }
  
}
