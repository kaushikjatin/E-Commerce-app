import { call,all } from "@redux-saga/core/effects";
import { fetchCollectionStart } from "./shop/shop.sagas";
import { rootUserSaga} from "./user/user.sagas";
import {rootCartSaga} from './cart/cart.sagas'

export  default function* rootSaga(){
    yield all([call(fetchCollectionStart),call(rootUserSaga),call(rootCartSaga)]);
}