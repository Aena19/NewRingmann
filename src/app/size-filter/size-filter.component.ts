import { Component,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { Product } from 'src/assets/models/product.model';

@Component({
  selector: 'app-size-filter',
  templateUrl: './size-filter.component.html',
  styleUrls: ['./size-filter.component.css']
})
export class SizeFilterComponent {

  @Input() products !: Product[]
  @Input() filterUpdate !: boolean
  @Input() selectedValues !: string[]
  @Input() removeFilter !: string
  @Output() filterValueChangeEvent = new EventEmitter<string>

  sizeValues : [string[],boolean[]] = [[],[]]
  selectedCount !: number

  ngOnChanges(changes: SimpleChanges) {
    if(this.filterUpdate)
      this.getSizeValues()
    if(this.removeFilter){
      this.removeSelection()
    }
  }

  getSizeValues(){
    var tempSizeValues = []
    var sizeList = ["33 x 47 x 8","35 x 54 x 8","35 x 54 x 10","36 x 47 x 8","36 x 51 x 8","38 x 47 x 8","38 x 51 x 8","38 x 54 x 8","38 x 54 x 10","40 x 47 x 8","40 x 51 x 8","40 x 51 x 11","40 x 54 x 8","40 x 54 x 10","42 x 47 x 8","42 x 51 x 8","42 x 51 x 10","42 x 54 x 8","42 x 54 x 10","45 x 54 x 8","45 x 54 x 10"]

    if(this.products != null){
      for(let i = 0; i < sizeList.length; i++){
        var sizeValue = sizeList[i]
        var sizeCount = 0
        for(let j = 0; j < this.products.length; j++){
          if(this.products[j].sizedetails != null){
            for(let k = 0; k < this.products[j].sizedetails.length; k++){
              if(this.products[j].sizedetails[k].size.toString().includes(sizeValue))
                sizeCount++
            }
          }
        }
        this.sizeValues[0][i] = sizeValue + " (" + sizeCount + ")"
      }

      this.sizeValues[0] = this.sizeValues[0].sort()
      
      if(this.selectedValues.length == 0){
        for(let i = 0;i<this.sizeValues[0].length;i++)
        {
          this.sizeValues[1][i]= false
        }
        this.selectedCount = 0
      }
      else{
        this.selectedCount = 0
        for(let i = 0;i<this.sizeValues[0].length;i++)
        {
          for(let j =0; j < this.selectedValues.length; j++){
            var checkboxValue = this.sizeValues[0][i].substring(0,this.sizeValues[0][i].length - 4)
            var selectedValue = this.selectedValues[j].substring(0,this.selectedValues[j].length - 4)
            if(checkboxValue === selectedValue){
              this.sizeValues[1][i]= true
              this.selectedCount++
              break
            }
            else
              this.sizeValues[1][i]= false
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
    for(let i = 0;i<this.sizeValues[0].length;i++)
    {
        var checkboxValue = this.sizeValues[0][i].substring(0,this.sizeValues[0][i].length - 4)
        if(checkboxValue === this.removeFilter){
          this.sizeValues[1][i]= false
          this.selectedCount--
          break
        }
    }
    this.removeFilter = ''
  }
}
