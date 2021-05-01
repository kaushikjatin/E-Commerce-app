import {createSelector} from 'reselect'

const selectshop = (state) => {return state.shop}

export const selectCollection = createSelector(
    [selectshop],
    (shop) => shop.collection ? Object.keys(shop.collection).map(key_name=>shop.collection[key_name]) : []
)

export const selectCollectionsFetching = createSelector(
    [selectshop],
    (shop) => shop.isFetching
)

export const selectSpecificCollection = (url_param) =>(
    createSelector(
        [selectshop],
        (shop)=> shop.collection ? shop.collection[url_param] : null
    )
)