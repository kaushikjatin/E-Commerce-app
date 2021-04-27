import ShopActionTypes from './shop.types'


const Initial_State = {
    collection:null
}

const shopReducer =(state=Initial_State,action) =>{
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collection:action.payload
            }
        default:
            return state;
    }
};

export default shopReducer