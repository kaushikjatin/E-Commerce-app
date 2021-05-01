import ShopActionTypes from './shop.types'


const Initial_State = {
    collection:null,
    isFetching:false,
    errorMessage:undefined
}

const shopReducer =(state=Initial_State,action) =>{
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return{
                ...state,
                isFetching:true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                isFetching:false,
                collection:action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMessage:action.payload
            }
        default:
            return state;
    }
};

export default shopReducer