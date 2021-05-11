import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
import {addItem} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'
import VanillaTilt from 'vanilla-tilt';


class CollectionItem extends React.Component
{
    constructor() {
        super();
        this.myRef = React.createRef();
      }

    componentDidMount()
    {
        const node = this.myRef.current;
        VanillaTilt.init(node,{max:25 , speed:200})      
    }

    render()
    {
        const {item,addItem}=this.props;
        const {price,name,imageUrl}=item;
        return(
            <div className='box' ref={this.myRef}>
            <div className='price'>${price}</div>
            <div className='name'>{name}</div>
            <img className ='product' src={imageUrl}></img>
            <div className='add-to-cart' onClick={()=>addItem(item)}>Add To Cart</div>
            {/* <CustomButton className='custom-button' onClick={()=>addItem(item)} inverted>Add To Cart</CustomButton> */}
        </div>
        )
    }
}

const mapdispatchtoprops=(dispatch)=>({
    addItem:(item)=>dispatch(addItem(item))
})

export default connect(null,mapdispatchtoprops)(CollectionItem);