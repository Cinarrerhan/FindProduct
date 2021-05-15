import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  @Input() query = '';
  @Input() searching = false;
  @Output() search = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
