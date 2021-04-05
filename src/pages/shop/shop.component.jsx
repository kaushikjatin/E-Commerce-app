import React from 'react';
import {connect} from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'

const ShopPage =({collections})=>{
        return(
            <div className='shop-page'>
                 <CollectionOverview></CollectionOverview>
            </div>
        )
    }


export default ShopPage;