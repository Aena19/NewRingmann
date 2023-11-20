import { Component,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { Product } from 'src/assets/models/product.model';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent {

  @Input() products !: Product[]
  @Input() filterUpdate !: boolean
  @Input() selectedValues !: string[]
  @Input() removeFilter !: string
  // @Input() resetClicked = new EventEmitter<string>
  @Output() filterValueChangeEvent = new EventEmitter<string>

  priceRangeList : string[] = ["0-50","51-100","101-150","151-200","201-250","251-300"]
  priceValues : [string[],boolean[]] = [[],[]]
  selectedCount !: number

  ngOnChanges(changes: SimpleChanges) {
      if(this.filterUpdate)
        this.getPriceValues()
      if(this.removeFilter != '')
        this.removeSelection()
  }

  getPriceValues(){
    if(this.products != null){
      var tempProducts : Product[]
      var priceRangeList = this.priceRangeList
    
      for(let i = 0; i < priceRangeList.length; i++){
        var tempcheckboxArray = priceRangeList[i].split('-')
        var minPrice = parseInt(tempcheckboxArray[0])
        var maxPrice = parseInt(tempcheckboxArray[1])
        
        tempProducts = this.products.filter(product => product.startingprice >= minPrice).filter(product => product.startingprice <= maxPrice)

        var priceRange : string = priceRangeList[i]
        var count : number = tempProducts.length

        this.priceValues[0][i] = priceRange   + ' (' + count + ')'
      }
      
      if(this.selectedValues.length == 0){
        for(let i = 0;i<this.priceValues[0].length;i++)
        {
          this.priceValues[1][i]= false
        }
        this.selectedCount = 0
      }
      else{
        this.selectedCount = 0
        for(let i = 0;i<this.priceValues[0].length;i++)
        {
          for(let j =0; j < this.selectedValues.length; j++){
            var checkboxValue = this.priceValues[0][i].substring(0,this.priceValues[0][i].length - 4)
            var selectedValue = this.selectedValues[j].substring(0,this.selectedValues[j].length - 4)
            if(checkboxValue === selectedValue){
              this.priceValues[1][i]= true
              this.selectedCount++
              break
            }
            else
              this.priceValues[1][i]= false
          }
        }
      }
    }
  }

  getFilterValues(filterValueString : string){
    console.log('in getFilterValues')
    console.log(filterValueString)
    var filterValueArray = filterValueString.split(",")
    console.log(filterValueArray)
    if(filterValueArray.length != 0)
        this.selectedCount = parseInt(filterValueArray.pop() ?? '0')
    console.log(this.selectedCount)
    this.filterValueChangeEvent.emit(filterValueArray.toString())
  }

  removeSelection(){
    for(let i = 0;i<this.priceValues[0].length;i++)
    {
        var checkboxValue = this.priceValues[0][i].substring(0,this.priceValues[0][i].length - 4)
        if(checkboxValue === this.removeFilter){
          this.priceValues[1][i]= false
          this.selectedCount--
          break
        }      
    }
    this.removeFilter = ''
  }
}
