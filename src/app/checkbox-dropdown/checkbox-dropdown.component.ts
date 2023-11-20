import { Component,Input,Output, EventEmitter,SimpleChanges } from '@angular/core';
import { Product } from 'src/assets/models/product.model';

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

  getValue(i:number){
    return i + 1
  }

  stopClosing(event:Event){
    event.stopPropagation();
  }

  doCheck(event:Event){
    var targetId = (<HTMLInputElement>event.target).id
    var checkboxName = targetId.replace('Label','')
    var elem = <HTMLInputElement>document.getElementById(checkboxName)
    var index = parseInt(checkboxName.substring(checkboxName.length-1,checkboxName.length))
    if(elem){
      if(!elem.checked){
        elem.checked = true
        this.filterValues[1][index-1] = true
      }
      else{
        elem.checked = false
        this.filterValues[1][index-1] = false
      }
    }
    this.stopClosing(event)
    this.filterValueChanged()
      
   // (<HTMLInputElement>document.getElementById('checkboxName'))!.checked = true
  }

filterValueChanged(){
  var selectedValues

  selectedValues = this.getSelectedValues()
  this.selectedCount = selectedValues.length
  this.filterValueChangeEvent.emit(selectedValues.toString() + ',' + this.filterName + ',' + this.selectedCount)
}

getSelectedValues(){
  var selectedValues : string[] = []

  for(let i = 0; i < this.filterValues[1].length; i++){
    if((<HTMLInputElement>document.getElementById(this.filterName + (i+1).toString())).checked){
        selectedValues.push(this.filterValues[0][i])
      }
  }
  return selectedValues
}

reset(event:Event){
    for(let i = 0; i < this.filterValues[1].length; i++){
      (<HTMLInputElement>document.getElementById(this.filterName + (i+1).toString())).checked = false
      this.filterValues[1][i] = false
    }  
    this.filterValueChanged()
    event.stopPropagation();
  }
}

