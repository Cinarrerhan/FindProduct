import * as product from '../actions/product';

export interface State {
    ids: string[];
    loading: boolean;
    query: string;
}

const initialState: State = {
    ids: [],
    loading: false,
    query: ''
};

export function reducer(state = initialState, action: product.Actions): State {
    switch (action.type) {
        case product.SEARCH: {

            const query = action.payload;

            if (query === '') {
                return {
                    ids: [],
                    loading: false,
                    query
                }
            }

            return Object.assign({}, state, {
                query, loading: true
            })
        }

        case product.SEARCH_COMPLETE: {

            const products = action.payload;

            return {
                ids: products.map(product => product.ProductId),
                loading: false,
                query: state.query
            }
        }

        default: {
            return state;
        }
    }
}

export const getQuery = (state: State) => state.query;

export const getIds = (state: State) => state.ids;

export const getLoading = (state : State) => state.loading;