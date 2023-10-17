import { Component } from '@angular/core';

declare var myExtObject: any;

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  ngOnInit(): void {
      new myExtObject();
    }
}
