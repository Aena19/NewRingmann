import { Component, Input } from '@angular/core';
import { Product } from 'src/assets/models/product.model';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

 @Input() product! : Product;
 constructor(private route : ActivatedRoute, private router : Router){}

 goToProductDetail(){
  console.log('goToProductDetail')

  this.router.navigate([String(this.product.id)],{relativeTo : this.route})  
 }

}

