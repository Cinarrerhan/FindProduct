import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromLayout from './layout';
import * as fromSearch from './search';
import * as fromProduct from './product';

export interface State {
    layout: fromLayout.State;
    router: fromRouter.RouterState;
    search: fromSearch.State;
    product: fromProduct.State;
}

export const reducers: ActionReducerMap<State> = {
    layout: fromLayout.reducer,
    router: fromRouter.routerReducer,
    search: fromSearch.reducer,
    product: fromProduct.reducer
}

export const getProductsState = (state: State) => state.product;

export const getProductEntities = createSelector(getProductsState, fromProduct.getEntites)

export const getLayoutState = (state: State) => state.layout;

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);

export const getSearchState = (state: State) => {
    return state.search;
}

export const getSearchProductIds = createSelector(getSearchState, fromSearch.getIds);
export const getSearchQuery = createSelector(getSearchState, fromSearch.getQuery);
export const getSearchLoading = createSelector(getSearchState, fromSearch.getLoading);

export const getSearchResult = createSelector(getProductEntities, getSearchProductIds, (products, searchIds) => {
    return searchIds.map(ProductId => products[ProductId]);
})