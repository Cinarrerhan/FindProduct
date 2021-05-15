import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import * as product from '../actions/product';
import { ProductService } from "../services/product.service";

@Injectable()
export class ProductEffects {

    search$ = createEffect(() => this.actions$.pipe(
        ofType(product.SEARCH),
        mergeMap((search) => this.service.getAll(search).pipe(
            map(products => new product.SearchCompleteAction(products)),
            catchError(() => of(new product.SearchCompleteAction([])))
        ))
    ));

    constructor(private actions$: Actions, private service: ProductService) { }
}