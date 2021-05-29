import ShopActionTypes from './shop.types'
import { firestore , convertSnapshotToMap} from '../../firebase/firebase.utils';

const fetchCollectionsStart = ()=>({
        type:ShopActionTypes.FETCH_COLLECTIONS_START
})

const fetchCollectionsSuccess = (collections) =>({
        type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload:collections
})

const fetchCollectionsFailure = (message) =>({
        type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload:message
})


export const fetchCollectionsAsync = ()=>{
        return (dispatch)=>{
                const collectionRef=firestore.collection('collections')
                dispatch(fetchCollectionsStart());
                collectionRef
                .get()
                .then(snapshot =>{
                        const collections_map=convertSnapshotToMap(snapshot);
                        dispatch(fetchCollectionsSuccess(collections_map));
                })
                .catch(error => dispatch(fetchCollectionsFailure(error.message)));
        }
}