import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from './constant';

function* getProducts(){
    let data = yield fetch('http://localhost:3000/products')
    data = yield data.json()
    // console.log('get data saga',data)
    yield put({type: SET_PRODUCT_LIST, data})
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProducts)    
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}
function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3000/products?q=${data.query}`);
    result = yield result.json();
    // console.log("action is called", result)
    yield put({type: SET_PRODUCT_LIST, data:result})
}
export default productSaga;