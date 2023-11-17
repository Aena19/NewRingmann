import { Component,Input,SimpleChanges } from '@angular/core';
import { Product } from 'src/assets/models/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products !: Product[]

}
