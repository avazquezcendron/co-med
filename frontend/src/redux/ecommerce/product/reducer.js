import {
    GET_ALL_PRODUCT,
    GET_SINGLE_ITEM,
    GET_LIST
} from '../../../redux/actionTypes';


const INIT_STATE = {
    productItems: [],
    products: [],
    symbol: '$',
    list: [],
    singleItem: [],
    search: []
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        
        case GET_ALL_PRODUCT:
            return { ...state };

        case GET_LIST:
            return { ...state, productItems: action.payload };

        case GET_SINGLE_ITEM:
            const selectedItem = state.productItems
            return { ...state, singleItem: selectedItem[0] };
            
        default:
            return state;
    }
}
