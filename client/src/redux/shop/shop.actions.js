import ShopActionTypes from './shop.types'

export const fetchCollectionsStart = ()=>({
        type:ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collections) =>({
        type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload:collections
})

export const fetchCollectionsFailure = (message) =>({
        type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload:message
})