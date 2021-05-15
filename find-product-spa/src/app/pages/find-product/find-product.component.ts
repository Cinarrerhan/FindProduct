import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import * as fromRoot from '../../reducers';
import * as product from '../../actions/product';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindProductComponent implements OnInit {

  searchQuery$ : Observable<string>;
  products$ : Observable<Product[]>;
  loading$ : Observable<boolean>;

  constructor(private store : Store<fromRoot.State>) { 
    this.searchQuery$ = store.select(fromRoot.getSearchQuery).pipe(take(1));
    this.products$ = store.select(fromRoot.getSearchResult);
    this.loading$ = store.select(fromRoot.getSearchLoading);
  }

  ngOnInit(): void {
  }

  search(query : string){
    this.store.dispatch(new product.SearchAction(query));
  }

}
