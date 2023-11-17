import { Component,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { Product } from 'src/assets/models/product.model';

@Component({
  selector: 'app-flange-filter',
  templateUrl: './flange-filter.component.html',
  styleUrls: ['./flange-filter.component.css']
})
export class FlangeFilterComponent {

  @Input() products !: Product[]
  @Input() filterUpdate !: boolean
  @Input() selectedValues !: string[]
  @Input() removeFilter !: string
  @Output() filterValueChangeEvent = new EventEmitter<string>

  
  flangeValues : [string[],boolean[]] = [[],[]]
  selectedCount !: number

  ngOnChanges(changes: SimpleChanges) {
    if(this.filterUpdate)
      this.getFlangeValues()
    if(this.removeFilter)
      this.removeSelection()
  }

  getFlangeValues(){
    var tempFlangeValues = []
    var flangeList = ["1/2 (2.6 mm)","1 (3.2 mm)","1 1/2 (3.6 mm)","2 (4mm)"]

    if(this.products != null){
      for(let i = 0; i < flangeList.length; i++){
        var flangeValue = flangeList[i]
        var flangeCount = 0
        for(let j = 0; j < this.products.length; j++){
          if(this.products[j].flange != null){
            if(this.products[j].flange.toString().includes(flangeValue))
              flangeCount++
          }
        }
        this.flangeValues[0][i] = flangeValue + " (" + flangeCount + ")"
      }

      if(this.selectedValues.length == 0){
        for(let i = 0;i<this.flangeValues[0].length;i++)
        {
          this.flangeValues[1][i]= false
        }
        this.selectedCount = 0
      }
      else{
        this.selectedCount = 0
        for(let i = 0;i<this.flangeValues[0].length;i++)
        {
          for(let j =0; j < this.selectedValues.length; j++){
            var checkboxValue = this.flangeValues[0][i].substring(0,this.flangeValues[0][i].length - 4)
            var selectedValue = this.selectedValues[j].substring(0,this.selectedValues[j].length - 4)
            if(checkboxValue === selectedValue){
              this.flangeValues[1][i]= true
              this.selectedCount++
              break
            }
            else
              this.flangeValues[1][i]= false
          }
        }
      }
    }
  }

  getCount(key: string, filterName : string,filterValues : string[]) {
      return filterValues.filter((curElem) =>curElem === key).length
  }

  uniqueFilter(value : string, index : number, self : string[]) {
    return self.indexOf(value) === index;
  }

  getFilterValues(filterValueString : string){
    var filterValueArray = filterValueString.split(",")

    if(filterValueArray.length != 0)
        this.selectedCount = parseInt(filterValueArray.pop() ?? '0')
    this.filterValueChangeEvent.emit(filterValueArray.toString())
  }

  removeSelection(){
    for(let i = 0;i<this.flangeValues[0].length;i++)
    {
        var checkboxValue = this.flangeValues[0][i].substring(0,this.flangeValues[0][i].length - 4)
        if(checkboxValue === this.removeFilter){
          this.flangeValues[1][i]= false
          this.selectedCount--
          break
        } 
    }
    this.removeFilter = ''
  }
}
