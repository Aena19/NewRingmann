import { Component, Input } from '@angular/core';
import { Product } from 'src/assets/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

 @Input() product! : Product;

// p : Pro = new Pro
  
}

// export class Pro{

//   name:String = "abc";
//   imgsrc:string="sigma-excel-726647.webp";
//   price:number=100;
 
// }