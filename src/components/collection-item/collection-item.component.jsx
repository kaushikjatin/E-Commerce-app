import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
import {addItem} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'

const CollectionItem=({item,addItem})=>{
    const { name,price,imageUrl}=item
    return(
        <div className='collection-item'>
            <div
            className='image'
            style={
                {
                    backgroundImage:'url('+imageUrl+')'
                }
            }/>

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton className='custom-button' onClick={()=>addItem(item)} inverted>Add To Cart</CustomButton>
        </div>
    )}

const mapdispatchtoprops=(dispatch)=>({
    addItem:(item)=>dispatch(addItem(item))
})
export default connect(null,mapdispatchtoprops)(CollectionItem);