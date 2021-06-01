import {put, take, takeEvery} from 'redux-saga/effects';
import {fetchCollectionsSuccess,fetchCollectionsFailure} from './shop.actions';
import { firestore , convertSnapshotToMap} from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types'

function* asyncOperationHandler(){
    try{
            const collectionref=firestore.collection('collections');
            const snapshot=yield collectionref.get();
            const collectionsMap = yield convertSnapshotToMap(snapshot);
            yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
}

export  function* fetchCollectionStart(){
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START,asyncOperationHandler);
}