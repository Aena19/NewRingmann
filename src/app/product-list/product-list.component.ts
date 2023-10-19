import { Component } from '@angular/core';
import { Product } from 'src/assets/models/product.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  url: string = 'assets/data/products.json';
  productsToBeDisplayed !: Product[] ;

  constructor(private http: HttpClient, private route : ActivatedRoute) {}

  ngOnInit(){
    console.log('in productlist')
    this.getProductsData()
  }

  getProductsData(){
    console.log('in getProductsData')
    return this.http.get(this.url).subscribe({
      next: (data) => {
          this.productsToBeDisplayed = data as Product[]; 
        },
      error:(error) => {console.log(error)}
    })
  }
}
