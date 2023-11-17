import { Component } from '@angular/core';
import { Product } from 'src/assets/models/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {

  url: string = 'assets/data/products.json';
  products !: Product[] ;
  filteredProducts !: Product[] ;
  finalProducts !: Product[]
  selectedPriceValues : string[] = []
  selectedFlangeValues : string[] = []
  selectedSizeValues : string[] = []
  changedFilter : string = ""
  priceFilterUpdate : boolean = true
  flangeFilterUpdate : boolean = true
  sizeFilterUpdate : boolean = true
  productsToBeDisplayedCount : number = 0
  filterToBeRemoved !: string

  constructor(private http: HttpClient) {}

  ngOnInit() : void{
    this.getProductsData()
  }
 
   getProductsData(){
     console.log('in getProductsData')
     return this.http.get(this.url).subscribe({
       next: (data) => {
        this.products = data as Product[]; 
        this.finalProducts = this.products
      },
       error:(error) => {console.log(error)}
     })
   }

  getFilterValues(filterValueString : string)
  {
    var filterValueArray;
    var filterName = "";
    
    if(filterValueString.startsWith(','))
      filterValueString = filterValueString.substring(1,filterValueString.length)
    filterValueArray = filterValueString.split(",")

    if(filterValueArray.length != 0)
        filterName = filterValueArray.pop() ?? ''
      
    if(filterName === 'Price'){
      this.selectedPriceValues = filterValueArray
      this.priceFilterUpdate = false
      this.flangeFilterUpdate = true
      this.sizeFilterUpdate = true
    }
    if(filterName === 'Flange'){
      this.selectedFlangeValues = filterValueArray
      this.priceFilterUpdate = true
      this.flangeFilterUpdate = false
      this.sizeFilterUpdate = true

    }
    if(filterName === 'Size(idxfdxh)'){
      this.selectedSizeValues = filterValueArray
      this.priceFilterUpdate = true
      this.flangeFilterUpdate = true
      this.sizeFilterUpdate = false
    }
    if(filterValueString === ''){
      this.priceFilterUpdate = true
      this.flangeFilterUpdate = true
      this.sizeFilterUpdate = true
    }

    this.filteredProducts = this.products
    if(this.selectedPriceValues.length != 0)
        this.filteredProducts = this.filterProductsByPrice(this.selectedPriceValues)
//    console.log(this.filteredProducts)

    if(this.selectedFlangeValues.length != 0)
      this.filteredProducts = this.filterProductsByFlange(this.selectedFlangeValues)
//    console.log(this.filteredProducts)

    if(this.selectedSizeValues.length != 0)
      this.filteredProducts = this.filterProductsBySize(this.selectedSizeValues)
    //    console.log(this.filteredProducts)

    this.finalProducts = this.filteredProducts.filter(this.uniqueFilterProduct)
    this.finalProducts = this.finalProducts.sort((p1,p2) => p1.id - p2.id)
    this.productsToBeDisplayedCount = this.finalProducts.length

    this.changedFilter = filterName
  }

  filterProductsByPrice(selectedPriceValues : string[]){
    var filterValue :string
    var tempProduct : Product[] = []
    var finalProduct : Product[] = []

    for(let i = 0 ; i < selectedPriceValues.length; i++){
      filterValue = selectedPriceValues[i].substring(0,selectedPriceValues[i].length - 4)
      var tempfilterValueArray = filterValue.split('-')
      var minPrice = parseInt(tempfilterValueArray[0])
      var maxPrice = parseInt(tempfilterValueArray[1])

      tempProduct = this.products.filter(product => product.startingprice > minPrice).filter(product => product.startingprice < maxPrice)

      for(let i = 0; i < tempProduct.length; i++){
        finalProduct.push(tempProduct[i])
      }
    }
    return finalProduct
  }

  filterProductsByFlange(selectedFlangeValues : string[]){
    var filterValue :string
    var tempProduct : Product[] = []
    var finalProduct : Product[] = []
    console.log(selectedFlangeValues)
    for(let i = 0 ; i < this.selectedFlangeValues.length; i++){

      filterValue = this.selectedFlangeValues[i].substring(0,this.selectedFlangeValues[i].length-4)
      tempProduct = this.filteredProducts.filter(product => product.flange).filter(product => product.flange.toString().includes(filterValue))
      for(let i = 0; i < tempProduct.length; i++){
        finalProduct.push(tempProduct[i])
      }
    }
    return finalProduct
  }

  filterProductsBySize(selectedSizeValues : string[]){
    console.log('in filterProductsBySize')
    var filterValue :string
    var tempProduct : Product[] = []
    var finalProduct : Product[] = []
    for(let i = 0 ; i < this.selectedSizeValues.length; i++){
      filterValue = this.selectedSizeValues[i].substring(0,this.selectedSizeValues[i].length-4)
      console.log(filterValue)
      // tempProduct = this.filteredProducts
      //                                     .filter(product => product.sizedetails)
      //                                     .filter(prod => prod.sizedetails)
      //                                     .filter(p => p.sizedetails
      //                                                               .filter(sizedetails => console.log(sizedetails.size))
      //                                                               .filter(sd => sd.size.includes(filterValue))
      //                                                               )

      // tempProduct = this.filteredProducts
      //                                     .filter(product => product.sizedetails)
      //                                     .filter(prod => prod.sizedetails
      //                                                                     .filter(sizedetails => sizedetails.size)
      //                                                                     .filter(sd => sd.size.includes(filterValue))
      //                                                                     )

      for (let j = 0 ; j < this.filteredProducts.length; j++){
        var fp = this.filteredProducts[j]
        var sd = []
        if(fp.sizedetails)
          sd = fp.sizedetails.filter(sd => sd.size.includes(filterValue))
        if(sd.length != 0)
          finalProduct.push(fp)
      }
      
    }
    console.log(finalProduct)
    return finalProduct
  }

  uniqueFilterProduct(value : Product, index : number, self : Product[]) {
    return self.indexOf(value) === index;
  }

  removeFilter(value : string, filterName : string){
    console.log('removeFilter ' + filterName + '...' + value)
    value = value.substring(0,value.length -4)
    console.log(value)
    this.filterToBeRemoved = value
    if(filterName === 'Price'){
      this.priceFilterUpdate = true
      for(let i = 0; i < this.selectedPriceValues.length; i++){
        var price : string = this.selectedPriceValues[i].substring(0,this.selectedPriceValues[i].length - 4)
        if(price === value){
          this.selectedPriceValues.splice(i,1)
        }
        this.getFilterValues(this.selectedPriceValues.toString() + ',' + filterName)
      }
    }
    else if(filterName === 'Flange'){
      for(let i = 0; i < this.selectedFlangeValues.length; i++){
        var flange : string = this.selectedFlangeValues[i].substring(0,this.selectedFlangeValues[i].length - 4)
        if(flange === value){
          this.selectedFlangeValues.splice(i,1)
        }
        this.getFilterValues(this.selectedFlangeValues.toString() + ',' + filterName)
      }
    }
    else if(filterName === 'Size(idxfdxh)'){
      for(let i = 0; i < this.selectedSizeValues.length; i++){
        var size : string = this.selectedSizeValues[i].substring(0,this.selectedSizeValues[i].length - 4)
        console.log(size)
        console.log(value)
        if(size === value){
          this.selectedSizeValues.splice(i,1)
          break
        }
      }
      this.getFilterValues(this.selectedSizeValues.toString() + ',' + filterName)
    }
  }

  removeAllFilters(){
    console.log('removeAllFilters')
    this.selectedFlangeValues.length = 0
    this.selectedPriceValues.length = 0
    this.selectedSizeValues.length = 0
    this.getFilterValues('')
  }

  sortProducts(sortOption:number){
    if(sortOption == 1){
      this.finalProducts = this.finalProducts.sort((p1,p2) => p1.id - p2.id)
    }
    else if(sortOption == 2){
      
      this.finalProducts = this.finalProducts.sort((p1,p2) => {
        if (p1.name > p2.name) {
            return 1;
        }
        if (p1.name < p2.name) {
            return -1;
        }
        return 0;
        }
        )
    }
    else if(sortOption == 3){
      
      this.finalProducts = this.finalProducts.sort((p1,p2) => {
        if (p2.name > p1.name) {
            return 1;
        }
        if (p2.name < p1.name) {
            return -1;
        }
        return 0;
        }
        )
    }
    else if(sortOption == 4){
      
      this.finalProducts = this.finalProducts.sort((p1,p2) => p1.startingprice - p2.startingprice)
    }
    else if(sortOption == 5){
      
      this.finalProducts = this.finalProducts.sort((p1,p2) => p2.startingprice - p1.startingprice)
    }

  }
}
