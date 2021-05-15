import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-preview-list',
  templateUrl: './product-preview-list.component.html',
  styleUrls: ['./product-preview-list.component.scss']
})
export class ProductPreviewListComponent implements OnInit {

  @Input() products : Product[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
