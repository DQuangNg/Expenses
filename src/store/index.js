import reducer from "./reducer"
import {createStore , } from 'redux'


const store = createStore(reducer)
//console.log('store', store.getState());
export default store
