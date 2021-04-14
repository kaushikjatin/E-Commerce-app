import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectSpecificCollection} from '../../redux/shop/shop.selectors'
import {connect} from 'react-redux'

const CollectionPage=({collection})=>{
    return(
        <div className='collection-page'>
            <h2>{collection.title}</h2>
            <div className='items'>
                {collection.items.map(item => <CollectionItem key={collection.id} item={item}></CollectionItem>) }
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps)=>({
    collection:selectSpecificCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);