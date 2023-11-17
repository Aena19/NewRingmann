import { Component,Input,Output, EventEmitter,SimpleChanges } from '@angular/core';
import { Product } from 'src/assets/models/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkbox-dropdown',
  templateUrl: './checkbox-dropdown.component.html',
  styleUrls: ['./checkbox-dropdown.component.css']
})
export class CheckboxDropdownComponent {

  @Input() filterName : string = ""
  @Input() filterValues : [string[],boolean[]] = [[],[]]
  @Input() selectedCount : number = 0

  @Output() filterValueChangeEvent = new EventEmitter<string>

  url: string = 'assets/data/products.json';
  products !: Product[] ;

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges) {

  }

  getValue(i:number){
    return i + 1
  }

  stopClosing(event:Event){
    event.stopPropagation();
  }

filterValueChanged(){
  console.log('in filterValueChanged')
  var selectedValues

  selectedValues = this.getSelectedValues()
  console.log(selectedValues)
  this.selectedCount = selectedValues.length
  console.log(this.selectedCount)
  this.filterValueChangeEvent.emit(selectedValues.toString() + ',' + this.filterName + ',' + this.selectedCount)
}

getSelectedValues(){
  var selectedValues : string[] = []

  for(let i = 0; i < this.filterValues[1].length; i++){
    if(this.filterValues[1][i] == true){
        selectedValues.push(this.filterValues[0][i])
      }
  }
  return selectedValues
}

reset(event:Event){
    for(let i = 0; i < this.filterValues[1].length; i++){
      this.filterValues[1][i] = false
    }  
    this.filterValueChanged()
    event.stopPropagation();
  }

}