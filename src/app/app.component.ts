import { Component, OnInit, Input } from '@angular/core';

//declare var myExtObject: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ringmann';

  @Input() question : string = "Q1"
  @Input() answer : string = "A1"

  ngOnInit(): void {
  //  new myExtObject();
  }
  
}
