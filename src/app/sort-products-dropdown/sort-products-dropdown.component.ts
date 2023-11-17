import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-products-dropdown',
  templateUrl: './sort-products-dropdown.component.html',
  styleUrls: ['./sort-products-dropdown.component.css']
})
export class SortProductsDropdownComponent {

  @Output() sortOptionChangeEvent = new EventEmitter<number>

  sortOption : number = 1

  sortChanged(){
    console.log(this.sortOption)
    this.sortOptionChangeEvent.emit(this.sortOption)
  }
  
}
