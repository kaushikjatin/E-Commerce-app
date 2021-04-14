import {createSelector} from 'reselect'

const selectshop = (state) => {return state.shop}

export const selectCollection = createSelector(
    [selectshop],
    (shop) => Object.keys(shop.collection).map(key_name=>shop.collection[key_name])
)

export const selectSpecificCollection = (url_param) =>(
    createSelector(
        [selectshop],
        (shop)=> shop.collection[url_param]
    )
)