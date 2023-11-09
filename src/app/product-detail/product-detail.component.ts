import { Component } from '@angular/core';
import { Product } from 'src/assets/models/product.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router} from '@angular/router'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  constructor(private http:HttpClient,private route:ActivatedRoute,private router :Router){}

  url: string = 'assets/data/products.json';
  products !: Product[] ;
  productId : number = 0;
  newPrice : string = "";
  selectedProductsArray : string[] = ["1","2","3","4","5","6"]
  firstProductId : number = 0
  lastProductId : number = 0

  ngOnInit(){
    console.log('in productdetail component')

    this.route.paramMap.subscribe((params : ParamMap)=>{
      this.productId = parseInt(params.get('id') || '')
    })

    this.getProductsData()
    this.firstProductId = parseInt(this.selectedProductsArray[0])
    this.lastProductId = parseInt(this.selectedProductsArray[this.selectedProductsArray.length-1])
  }

  getProductsData(){
    console.log('in getProductsData')
    return this.http.get(this.url).subscribe({
      next: (data) => {
          this.products = data as Product[]; 
          console.log(this.products)
        },
      error:(error) => {console.log(error)}
    })
    
  }

  changePrice(event:Event){
     this.newPrice = (<HTMLButtonElement>event.target).title
  }

  goBackToProducts(){
    this.router.navigate([('../')],{relativeTo : this.route})
  }

  gotoPrevious(){
    this.newPrice = ""
    this.router.navigate([('../') + (String(this.productId - 1))],{relativeTo : this.route})
  }
    
  gotoNext(){
    this.newPrice = ""
    this.router.navigate([('../') + (String(this.productId + 1))],{relativeTo : this.route})
  }
  
}