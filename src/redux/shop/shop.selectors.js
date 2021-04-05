import {createSelector} from 'reselect'

const selectshop = (state) => {return state.shop}

export const selectCollection = createSelector(
    [selectshop],
    (shop) => shop.collection
)