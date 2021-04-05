import React from 'react';
import './collection-overview.styles.scss';
import {connect} from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import {selectCollection} from '../../redux/shop/shop.selectors'

export const CollectionOverview =({collections})=>{
    return(
        <div className='collection-overview'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
        </div>
    )
}

const mapStateToProps = (state)=>({
    collections:selectCollection(state)
})
export default connect(mapStateToProps)(CollectionOverview);