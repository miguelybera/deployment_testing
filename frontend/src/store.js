import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { productReducers } from './reducers/productReducers'

const reducer = combineReducers({
    products: productReducers
})

let initialState = {} //contains all the data we want to put in this state just before loading the application

//clear the store
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;