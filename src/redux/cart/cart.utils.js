export const addItem =(cartItems,new_item)=>{
    const flag=cartItems.find(temp_item=>temp_item.id==new_item.id);
    if(flag)
        return cartItems.map(temp_item=>(temp_item.id==new_item.id)?({...temp_item,quantity:temp_item.quantity+1}):(temp_item))
    return [...cartItems,{...new_item,quantity:1}];
}

export const decreaseQuantity = (cartItems,item) =>{
    const temp_item=cartItems.find(cartItem => cartItem.id == item.id);
    if(temp_item.quantity==1)
    {
        return cartItems.filter(cartItem => cartItem.id != item.id);
    }
    return cartItems.map(cartItem =>
         cartItem.id == item.id
          ? {...cartItem, quantity :cartItem.quantity -1}
          : cartItem)
}