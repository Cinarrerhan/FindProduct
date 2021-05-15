import { Product } from "../models/product";
import * as product from '../actions/product';


export interface State {
    ids: string[];
    entities: { [ProductId: string]: Product };
    selectedProductId: string | null;
};

export const initialState: State = {
    ids: [],
    entities: {},
    selectedProductId: null
};

export function reducer(state = initialState, action: product.Actions): State {
    switch (action.type) {
        case product.SEARCH_COMPLETE: {
            const products = action.payload;
            const newProducts = products.filter(product => !state.entities[product.ProductId]);

            const newProductIds = newProducts.map(product => product.ProductId);
            const newProductEntities = newProducts.reduce((entities: { [ProductId: string]: Product }, product: Product) => {
                return Object.assign(entities, {
                    [product.ProductId]: product
                });
            }, {});

            return {
                ids: [...state.ids, ...newProductIds],
                entities: Object.assign({}, state.entities, newProductEntities),
                selectedProductId: state.selectedProductId
            }
        }
        case product.LOAD: {
            const product = action.payload;

            if (state.ids.indexOf(product.ProductId) > -1) {
                return state;
            }

            return {
                ids: [...state.ids, product.ProductId],
                entities: Object.assign({}, state.entities, {
                    [product.ProductId]: product
                }),
                selectedProductId: state.selectedProductId
            };
        }

        case product.SELECT: {
            return {
                ids: state.ids,
                entities: state.entities,
                selectedProductId: action.payload
            }
        }

        default : {
            return state;
        }

    }


}

export const getEntites = (state: State) => state.entities;