import { combineReducers } from 'redux';
import TodoApp from './todo/reducer';
import EmailApp from './email/reducer';
import ChatApp from './chat/reducer';
import Ecommerce from './ecommerce/product/reducer';
import Cart from './ecommerce/cart/reducer';
import Wishlist from './ecommerce/wishlist/reducer';
import Filters from './ecommerce/filter/reducer';
import Bookmarkapp from './bookmark/reducer'
import Taskapp from './task/reducer'
import Projectapp from './project/reducer'
import Customizer from './customizer/reducer';

const reducers = combineReducers({
    TodoApp,
    EmailApp,
    ChatApp,
    Product: Ecommerce,
    Wishlist,
    Cart,
    Filters,
    Bookmarkapp,
    Taskapp,
    Projectapp,
    Customizer
});

export default reducers;