import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
 
<<<<<<< HEAD
<<<<<<< HEAD
import { productsReducer,newProductReducer, productDetailsReducer,newReviewReducer, productReducer } from './reducers/productReducers'
import { authReducer, userReducer, forgotPasswordReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'
import {newOrderReducer,myOrdersReducer,orderDetailsReducer,allOrdersReducer} from './reducers/orderReducers'
=======
import { productsReducer, productDetailsReducer } from './reducers/productReducers'
import { authReducer, userReducer, forgotPasswordReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'
import {newOrderReducer,myOrdersReducer} from './reducers/orderReducers'
>>>>>>> parent of 48997f4 (reviews,admin dashboard)
=======
import { productsReducer, productDetailsReducer } from './reducers/productReducers'
import { authReducer, userReducer, forgotPasswordReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'
import {newOrderReducer,myOrdersReducer} from './reducers/orderReducers'
>>>>>>> parent of 48997f4 (reviews,admin dashboard)

const reducer = combineReducers({
products: productsReducer,
productDetails: productDetailsReducer,
product:productReducer,
auth: authReducer,
user: userReducer,
forgotPassword: forgotPasswordReducer,
cart: cartReducer,
newOrder: newOrderReducer,
<<<<<<< HEAD
<<<<<<< HEAD
myOrders: myOrdersReducer,
orderDetails: orderDetailsReducer,
newReview:newReviewReducer,
newProduct:newProductReducer,
Product:productReducer,
allOrders: allOrdersReducer
=======
myOrders: myOrdersReducer
>>>>>>> parent of 48997f4 (reviews,admin dashboard)
=======
myOrders: myOrdersReducer
>>>>>>> parent of 48997f4 (reviews,admin dashboard)
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') 
         ? JSON.parse(localStorage.getItem('cartItems'))
         : [],
         shippingInfo: localStorage.getItem('shipingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            :{}
    }
}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;

