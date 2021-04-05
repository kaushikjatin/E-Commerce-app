import SHOP_DATA from './shop.data'

const Initial_State = {
    collection:SHOP_DATA
}

const shopReducer =(state=Initial_State,action) =>{
    switch(action.type){
        default:
            return state;
    }
};

export default shopReducer